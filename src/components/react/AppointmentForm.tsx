import { useEffect, useState, type FormEvent } from 'react';

interface Opt { value: string; label: string }
interface Props { locations: Opt[]; concerns: Opt[]; email: string; phone: string; endpoint?: string }

const field = 'mt-2 w-full rounded-md border border-accent/30 bg-white px-4 py-3 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25';
const label = 'block text-sm font-semibold text-navy';

export default function AppointmentForm({ locations, concerns, email, phone, endpoint }: Props) {
  const [loc, setLoc] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('location');
    if (q && locations.some((l) => l.value === q)) setLoc(q);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (d.website) return; // honeypot: bots fill this
    const err: Record<string, string> = {};
    if (!d.firstName?.trim()) err.firstName = 'Please enter your first name.';
    if (!d.lastName?.trim()) err.lastName = 'Please enter your last name.';
    if (d.phone.replace(/\D/g, '').length < 10) err.phone = 'Please enter a phone number with 10 digits.';
    if (!/^\S+@\S+\.\S+$/.test(d.email || '')) err.email = 'Please enter a valid email address.';
    if (!d.location) err.location = 'Please choose an office.';
    if (!d.consent) err.consent = 'Please agree so we can contact you.';
    setErrors(err);
    if (Object.keys(err).length) { (form.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus(); return; }

    setState('sending');
    const body = { ...d, locationName: locations.find((l) => l.value === d.location)?.label };
    try {
      if (endpoint) {
        const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) });
        if (!r.ok) throw new Error('bad status');
      } else {
        // No form service connected yet: open the visitor's email app with the request filled in.
        const text = [`Name: ${d.firstName} ${d.lastName}`, `Phone: ${d.phone}`, `Email: ${d.email}`, `Office: ${body.locationName}`, `Concern: ${d.concern || '-'}`, `Patient type: ${d.patientType}`, `Preferred date: ${d.date || '-'}`, `Preferred time: ${d.time}`, '', d.message || ''].join('\n');
        window.location.href = `mailto:${email}?subject=${encodeURIComponent('Appointment request')}&body=${encodeURIComponent(text)}`;
      }
      setState('done');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div role="status" className="rounded-md border border-accent/30 bg-white p-10 text-center shadow-xl shadow-navy/10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-white" aria-hidden="true">✓</div>
        <h2 className="mt-6 font-display text-4xl text-navy">Thank you. We got your request.</h2>
        <p className="mx-auto mt-4 max-w-md text-muted">{endpoint ? 'Our team will call you soon to confirm your visit.' : 'Your email app should be open. Press send to finish your request.'} Need help now? Call <a className="text-accent underline" href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>.</p>
      </div>
    );
  }

  const bad = (k: string) => (errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `${k}-err` } : {});
  const msg = (k: string) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-accent">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-md border border-accent/30 bg-white p-7 shadow-xl shadow-navy/10 md:p-10">
      <h2 className="font-display text-4xl text-navy">Request an appointment</h2>
      <div className="accent-rule mt-4" />
      <p className="mt-4 text-muted">Fill in the form and our team will call you to confirm a time. Fields with * are needed.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="firstName" className={label}>First name *</label><input id="firstName" name="firstName" autoComplete="given-name" className={field} {...bad('firstName')} />{msg('firstName')}</div>
        <div><label htmlFor="lastName" className={label}>Last name *</label><input id="lastName" name="lastName" autoComplete="family-name" className={field} {...bad('lastName')} />{msg('lastName')}</div>
        <div><label htmlFor="phone" className={label}>Phone *</label><input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(240) 555-0100" className={field} {...bad('phone')} />{msg('phone')}</div>
        <div><label htmlFor="email" className={label}>Email *</label><input id="email" name="email" type="email" autoComplete="email" className={field} {...bad('email')} />{msg('email')}</div>
        <div>
          <label htmlFor="location" className={label}>Office *</label>
          <select id="location" name="location" value={loc} onChange={(e) => setLoc(e.target.value)} className={field} {...bad('location')}>
            <option value="">Choose an office</option>
            {locations.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
          </select>{msg('location')}
        </div>
        <div>
          <label htmlFor="concern" className={label}>What hurts or what do you need?</label>
          <select id="concern" name="concern" className={field}>
            <option value="">Choose one (optional)</option>
            {concerns.map((c) => <option key={c.value} value={c.label}>{c.label}</option>)}
          </select>
        </div>
        <div><label htmlFor="date" className={label}>Preferred date</label><input id="date" name="date" type="date" min={new Date().toISOString().slice(0, 10)} className={field} /></div>
        <div>
          <label htmlFor="time" className={label}>Preferred time</label>
          <select id="time" name="time" className={field}><option>Any time</option><option>Morning</option><option>Afternoon</option></select>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={label}>Are you a new patient?</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {['New patient', 'Existing patient'].map((v, i) => (
            <label key={v} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-accent/30 px-4 py-2 text-ink has-[:checked]:border-accent has-[:checked]:bg-accent/10">
              <input type="radio" name="patientType" value={v} defaultChecked={i === 0} className="accent-[#B74848]" />{v}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6"><label htmlFor="message" className={label}>Anything else we should know?</label><textarea id="message" name="message" rows={4} className={field} placeholder="Please do not share private medical details here. You can tell us at your visit." /></div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" value="yes" className="mt-1 h-5 w-5 accent-[#B74848]" {...bad('consent')} />
          <span>I agree that Choice Pain may call, text or email me about this request. This form is not for emergencies. If you have an emergency, call 911.</span>
        </label>{msg('consent')}
      </div>

      {state === 'error' && <p role="alert" className="mt-6 rounded-md border border-accent/40 bg-accent/10 p-4 text-sm text-navy">Sorry, we could not send your request. Please try again or call {phone}.</p>}
      <button type="submit" disabled={state === 'sending'} className="btn btn-appointment mt-8 w-full disabled:opacity-60 sm:w-auto">{state === 'sending' ? 'Sending…' : 'Request Appointment'}</button>
    </form>
  );
}
