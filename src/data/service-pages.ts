// Structure and facts modelled on https://www.advspine.org/services/epidural-steroid-injections/ (rewritten in our own words for Choice Pain).
// PHOTOS: every 13-digit ID below is a TEMPORARY Unsplash photo. See scripts/UNSPLASH-TEMP-PHOTOS.md for the Shutterstock replacements.
// (Old note) Photos: Shutterstock IDs. Put the licensed files in /public/images/stock/<id>.webp. Until then, `fallback` images show.
const s = (id: number | string) => `/images/stock/${id}.webp`;

export interface ServicePage {
  slug: string; title: string; summary: string; metaTitle: string; metaDescription: string; lede: string;
  photos: { img: string; fallback: string; alt: string }[];
  whatIs: { title: string; text: string[] };
  candidates: { title: string; text: string; conditions: string[]; symptoms: string[] };
  benefits: { title: string; text: string; items: { title: string; text: string }[] };
  recovery: { title: string; text: string; steps: { label: string; title: string; text: string }[] };
  safety: { title: string; text: string[] };
  faqs: { q: string; a: string }[];
}

export const servicePages: Record<string, ServicePage> = {
  'epidural-steroid-injections': {
    slug: 'epidural-steroid-injections',
    title: 'Epidural Steroid Injections',
    summary: 'X-ray guided injections place anti-inflammatory medicine beside irritated spinal nerves for neck, back and leg pain.',
    metaTitle: 'Epidural Steroid Injections in Maryland & Delaware | Choice Pain & Rehabilitation Center',
    metaDescription: 'X-ray guided epidural steroid injections place anti-inflammatory medicine beside irritated spinal nerves to relieve neck, back and leg pain. Offered at 10 offices in Maryland and Delaware.',
    lede: 'An epidural steroid injection places anti-inflammatory medicine right beside an irritated spinal nerve. It is a common, effective, non-surgical option for neck, back and leg pain.',
    photos: [
      { img: s('1758691462863'), fallback: s('1758691462863'), alt: "Doctor consulting with a patient in an office" },
      { img: s('1758573467051'), fallback: s('1758573467051'), alt: "Woman holding a human spine model" },
      { img: s('1666214276389'), fallback: s('1666214276389'), alt: "Doctor setting up a patient for a scan" },
    ],
    whatIs: {
      title: 'What is an epidural steroid injection?',
      text: [
        'The epidural space is the area around your spinal nerves. When a bulging disc or a narrow spinal canal irritates those nerves, they swell and send pain into your neck, arms, back or legs.',
        'Using live X-ray guidance, your physician places a thin needle next to the inflamed nerve and delivers a mix of steroid and numbing medicine. The steroid calms the swelling, and the numbing medicine can ease pain right away.',
        'Injections can be given in the neck (cervical), mid-back (thoracic) or lower back (lumbar). In the lower back we use several routes, including caudal and transforaminal. Your physician explains each step before you decide.',
      ],
    },
    candidates: {
      title: 'Is it right for you?',
      text: 'Good candidates have pain from an inflamed nerve that has not improved enough with rest, medicine or physical therapy.',
      conditions: ['Herniated or bulging disc', 'Sciatica', 'Spinal stenosis', 'Degenerative disc disease', 'Back or leg pain after surgery'],
      symptoms: ['Pain that travels into an arm or leg', 'Numbness or tingling', 'Burning or shooting nerve pain', 'Pain when sitting, standing or walking'],
    },
    benefits: {
      title: 'Why patients choose it',
      text: 'For many people, enough relief to sleep, work and take part in physical therapy, which supports long-term healing.',
      items: [
        { title: 'Targets the source', text: 'Medicine goes to the inflamed nerve, not through your whole body.' },
        { title: 'A quick visit', text: 'The procedure usually takes 15 to 30 minutes, and you go home the same day.' },
        { title: 'Helps you rehab', text: 'Less pain makes it easier to stay active and finish your therapy.' },
        { title: 'May help you avoid surgery', text: 'Many patients do not need an operation once the swelling settles.' },
      ],
    },
    recovery: {
      title: 'What recovery is like',
      text: 'There is very little downtime. The spot where the needle went in may feel sore for a day or two.',
      steps: [
        { label: 'Same day', title: 'Rest and go home', text: 'Most people have someone drive them home. Take it easy for the rest of the day.' },
        { label: 'Days 2 to 7', title: 'Relief builds', text: 'The numbing medicine wears off within hours. The steroid usually starts to work within a few days.' },
        { label: 'Follow-up', title: 'Review your relief', text: 'We check how you feel and decide together if another injection or a different treatment makes sense.' },
      ],
    },
    safety: {
      title: 'Is it safe?',
      text: [
        'Epidural steroid injections are one of the most common pain procedures, and X-ray guidance makes them precise.',
        'Side effects are uncommon and usually mild: short-term soreness, a flushed face, or a brief rise in blood sugar. Serious problems such as infection or nerve injury are rare. Tell us about blood thinners, allergies and diabetes before your visit.',
      ],
    },
    faqs: [
      { q: 'Does the injection hurt?', a: 'We numb the skin first, so most patients feel pressure instead of sharp pain. Ask us about light sedation.' },
      { q: 'How long does relief last?', a: 'From several weeks to many months. It depends on the cause of your pain and how your body responds.' },
      { q: 'How many injections can I have?', a: 'Most patients need one to three. We limit how often steroids are given to keep you safe.' },
    ],
  },
};

const P = (id: string, alt: string) => ({ img: s(id), fallback: s(id), alt });

servicePages['radiofrequency-ablation'] = {
  slug: 'radiofrequency-ablation', title: 'Radiofrequency Ablation',
  summary: 'Gentle heat switches off the small nerves that carry pain from arthritic joints, with relief that can last months to over a year.',
  metaTitle: 'Radiofrequency Ablation in Maryland & Delaware | Choice Pain & Rehabilitation Center',
  metaDescription: 'Radiofrequency ablation (RFA) uses mild heat to calm the small nerves that carry pain from arthritic joints in the spine, SI joint and knees. Offered at 10 offices in Maryland and Delaware.',
  lede: 'Radiofrequency ablation (RFA) uses mild heat to calm the small nerves that send pain signals from arthritic joints in the spine, the sacroiliac (SI) joint, the knees and other areas. Relief often lasts from several months to more than a year.',
  photos: [P('1767972463825', "Neck with the area of pain highlighted"), P('1615997380705', "Person touching the back of their neck in pain"), P('1746842419697', "Medical professional examining a knee")],
  whatIs: { title: 'What is radiofrequency ablation?', text: [
    'Worn spinal facet joints and other arthritic joints send pain through very small sensory nerves, such as the medial branch nerves in the spine and the genicular nerves in the knee. RFA turns these nerves off without weakening your muscles.',
    'First we do a diagnostic nerve block to confirm where your pain comes from. If the block gives good short-term relief, your physician uses X-ray guidance to place a thin probe beside the nerve, then applies radiofrequency heat so the nerve can no longer carry pain.',
    'Our board-certified specialists perform the procedure and explain each step before you decide.'] },
  candidates: { title: 'Is it right for you?', text: 'RFA works best for long-lasting joint pain that responded well to a diagnostic nerve block.',
    conditions: ['Facet joint arthritis in the neck, mid back or low back', 'Sacroiliac (SI) joint pain', 'Knee and hip arthritis', 'Some headaches that start in the neck', 'Chronic pain after spine surgery'],
    symptoms: ['Aching pain that does not spread far', 'Pain when twisting or leaning back', 'Morning stiffness', 'Pain that returns when steroid injections wear off'] },
  benefits: { title: 'Why patients choose it', text: 'Longer relief than most injections, with no incision.', items: [
    { title: 'Long-lasting relief', text: 'Many patients feel better for six months to over a year.' },
    { title: 'No incision', text: 'It is done through a needle, so there are no stitches.' },
    { title: 'Less medicine', text: 'Many patients can reduce their pain medicine afterward.' },
    { title: 'Can be repeated', text: 'If the pain returns, the treatment can be done again.' }] },
  recovery: { title: 'What recovery is like', text: 'Most people go home the same day and return to normal life quickly.', steps: [
    { label: 'Day 1', title: 'Rest and ice', text: 'Rest for the rest of the day. Ice can ease soreness.' },
    { label: 'Weeks 1 to 3', title: 'Relief builds', text: 'Pain relief usually builds over two to three weeks. Some soreness for a week or two is normal.' },
    { label: 'Ongoing', title: 'Stay strong', text: 'Exercise or physical therapy can strengthen the area for longer-lasting benefit.' }] },
  safety: { title: 'Is it safe?', text: ['RFA has a long safety record. X-ray guidance and a test stimulation confirm the probe is in the right place before any heat is applied.', 'Temporary soreness or skin numbness can happen. Serious problems are rare.'] },
  faqs: [
    { q: 'Why do I need a test block first?', a: 'It shows which nerves carry your pain, which makes RFA more likely to work.' },
    { q: 'Will it affect my movement or strength?', a: 'No. The treated nerves carry feeling from the joint, not signals to your muscles.' },
    { q: 'Can the pain come back?', a: 'Nerves can slowly regrow over months. If pain returns, RFA can be repeated.' }],
};

servicePages['spinal-cord-stimulation'] = {
  slug: 'spinal-cord-stimulation', title: 'Spinal Cord Stimulation',
  summary: 'A small implanted device changes how pain signals reach the brain, and you can try it for a week first.',
  metaTitle: 'Spinal Cord Stimulation in Maryland & Delaware | Choice Pain & Rehabilitation Center',
  metaDescription: 'Spinal cord, DRG and peripheral nerve stimulation for long-term nerve pain, with a one-week trial before any permanent implant. Offered at 10 offices in Maryland and Delaware.',
  lede: 'A small implanted device changes how pain signals travel to your brain. It is meant for people with long-term nerve pain who have not found relief from other treatments, and you can try it before you commit to a permanent implant.',
  photos: [P('1772122028898', "Close-up of a spine model with a red disc"), P('1768507423533', "Chiropractor adjusting a patient's back"), P('1649751361457', "Doctor examining a patient's leg")],
  whatIs: { title: 'What is spinal cord stimulation?', text: [
    'A spinal cord stimulator uses thin wires, called leads, placed in the epidural space, plus a small battery under the skin. It sends mild electrical pulses that block or change pain signals before they reach your brain. Many modern systems cause no tingling at all.',
    'We also offer DRG stimulation for focused pain in the foot, knee, groin or chest wall, and peripheral nerve stimulation for pain from a single nerve.',
    'Our board-certified specialists explain each step before you decide.'] },
  candidates: { title: 'Is it right for you?', text: 'Good candidates have chronic nerve pain lasting months that has not improved enough with medicine, injections or therapy.',
    conditions: ['Pain after back or neck surgery', 'Complex regional pain syndrome (CRPS)', 'Diabetic and other neuropathy', 'Chronic sciatica or radiculopathy', 'Chronic back and leg pain'],
    symptoms: ['Burning or electric-type pain', 'Pain in the legs or arms', 'Pain that limits walking or sleep', 'Reliance on strong pain medicine'] },
  benefits: { title: 'Why patients choose it', text: 'A treatment you can test before you decide.', items: [
    { title: 'Trial first', text: 'A one-week trial shows how much it helps before you choose an implant.' },
    { title: 'Less medicine', text: 'Many patients reduce or stop opioid pain medicine.' },
    { title: 'You are in control', text: 'Adjust your therapy with a small remote or phone app.' },
    { title: 'Reversible', text: 'The system can be turned off or removed if needed.' }] },
  recovery: { title: 'What the process looks like', text: 'Treatment happens in steps, so you are never rushed into an implant.', steps: [
    { label: 'About 1 week', title: 'The trial', text: 'Temporary leads are placed through a needle in a short outpatient visit. You go home and track your pain.' },
    { label: 'If it works', title: 'The implant', text: 'If the trial gives good relief, the permanent system is placed through small incisions as an outpatient procedure.' },
    { label: '4 to 6 weeks', title: 'Recovery', text: 'Avoid heavy lifting and twisting while the leads settle. After that, you return to daily life with less pain.' }] },
  safety: { title: 'Is it safe?', text: ['Spinal cord stimulation has been used for decades and is FDA-approved for chronic pain. The trial lowers the risk of choosing a treatment that will not work for you.', 'Possible risks include infection, lead movement and discomfort at the battery site. These are uncommon and usually fixable.'] },
  faqs: [
    { q: 'Will I feel the stimulator?', a: 'Some settings cause mild tingling and many newer settings cause none. You can switch programs with your remote.' },
    { q: 'Can I have an MRI?', a: 'Most modern systems are MRI-compatible under certain conditions. We choose a device that fits your needs.' },
    { q: 'How long does the battery last?', a: 'It depends on the device. Rechargeable batteries can last many years, and some systems never need recharging.' }],
};

servicePages['mild-procedure'] = {
  slug: 'mild-procedure', title: 'MILD® Procedure',
  summary: 'A minimally invasive lumbar decompression for spinal stenosis with no implants, no stitches and no general anesthesia.',
  metaTitle: 'MILD® Procedure for Spinal Stenosis in Maryland & Delaware | Choice Pain & Rehabilitation Center',
  metaDescription: 'MILD (minimally invasive lumbar decompression) treats lumbar spinal stenosis through a tiny opening with no implants and no stitches. Offered at 10 offices in Maryland and Delaware.',
  lede: 'MILD (minimally invasive lumbar decompression) treats lumbar spinal stenosis through a very small opening. It needs no general anesthesia, no implants and no stitches, and it aims to help you stand and walk longer with less pain.',
  photos: [P('1772790969968', "Seniors walking outdoors with a rollator"), P('1523294928042', "Older man walking with a cane"), P('1625690987114', "Older couple walking arm in arm")],
  whatIs: { title: 'What is the MILD procedure?', text: [
    'In lumbar spinal stenosis, a thickened ligament at the back of the spinal canal presses on the nerves. This causes pain, heaviness and numbness in the back and legs, mostly when you stand or walk.',
    'During MILD, your physician uses X-ray guidance and small tools placed through a port about the size of a baby aspirin. Tiny pieces of the thickened ligament are removed to make more room for your nerves.',
    'Our board-certified specialists explain each step before you decide.'] },
  candidates: { title: 'Is it right for you?', text: 'MILD is for people whose stenosis is caused by a thickened ligament, confirmed on an MRI or CT scan.',
    conditions: ['Lumbar spinal stenosis', 'Neurogenic claudication', 'Thickened ligamentum flavum'],
    symptoms: ['Leg pain when standing or walking', 'Needing to sit or lean forward for relief', 'Heaviness or weakness in the legs', 'Lower back pain that limits activity'] },
  benefits: { title: 'Why patients choose it', text: 'Real relief without a large operation.', items: [
    { title: 'Tiny opening', text: 'The port is about 5 mm wide, and no stitches are needed.' },
    { title: 'No implants', text: 'Nothing is left behind in your spine.' },
    { title: 'Quick recovery', text: 'Most patients go home the same day and walk soon after.' },
    { title: 'Stand and walk longer', text: 'Most patients report they can stand and walk longer with less pain.' }] },
  recovery: { title: 'What recovery is like', text: 'Most people are back to light activity within days.', steps: [
    { label: 'Same day', title: 'Home with a small bandage', text: 'You go home a few hours after the procedure.' },
    { label: 'Weeks 1 to 2', title: 'Keep walking', text: 'Stay lightly active and walk often. Avoid heavy lifting for a short time.' },
    { label: 'Months after', title: 'Lasting relief', text: 'Studies show relief lasts for years for many patients.' }] },
  safety: { title: 'Is it safe?', text: ['Clinical studies show a strong safety record, with no major device-related complications reported.', 'Because it avoids general anesthesia and implants, it may suit older adults and people with other health conditions.'] },
  faqs: [
    { q: 'Is MILD surgery?', a: 'It is a minimally invasive outpatient procedure through a very small port, with no general anesthesia and no stitches.' },
    { q: 'How do I know if I have the right kind of stenosis?', a: 'Your physician reviews your MRI or CT to measure the ligament and decide if MILD fits your anatomy.' },
    { q: 'Does it rule out other treatments later?', a: 'No. Your spine stays stable, so other treatments remain possible.' }],
};

servicePages['kyphoplasty'] = {
  slug: 'kyphoplasty', title: 'Kyphoplasty',
  summary: 'A small balloon lifts a collapsed spine bone and medical cement holds it in place, often with fast pain relief.',
  metaTitle: 'Kyphoplasty for Spinal Compression Fractures in Maryland & Delaware | Choice Pain & Rehabilitation Center',
  metaDescription: 'Balloon kyphoplasty treats painful spinal compression fractures, often with fast relief. Offered at 10 offices in Maryland and Delaware.',
  lede: 'Kyphoplasty treats painful spinal compression fractures. A small balloon lifts the collapsed bone and medical cement holds it in place. Patients often feel relief quickly, and the procedure can help prevent a stooped posture.',
  photos: [P('1743767587874', "Four views of the human spine"), P('1762955911769', "Caregiver helping seniors with an activity"), P('1758798464263', "Elderly man with a walker in a park")],
  whatIs: { title: 'What is kyphoplasty?', text: [
    'A compression fracture happens when a bone in the spine collapses. Common causes are osteoporosis, a fall, or cancer weakening the bone. It can cause sharp back pain and loss of height.',
    'Your physician places a needle into the broken bone, inserts a small balloon and inflates it to create space. The space is filled with bone cement, which hardens within minutes and steadies the fracture.',
    'We also offer Intracept® basivertebral nerve ablation for chronic low back pain that starts inside the vertebra. Our board-certified specialists explain each step before you decide.'] },
  candidates: { title: 'Is it right for you?', text: 'Good candidates have a recent, painful compression fracture confirmed by imaging.',
    conditions: ['Osteoporotic compression fracture', 'Fracture from a fall or injury', 'Spinal fracture caused by cancer', 'Vertebrogenic low back pain (treated with Intracept®)'],
    symptoms: ['Sudden, sharp back pain', 'Pain that gets worse when standing', 'Loss of height', 'A rounded or hunched posture'] },
  benefits: { title: 'Why patients choose it', text: 'Relief that helps you get back on your feet.', items: [
    { title: 'Fast relief', text: 'Many patients feel better within a day or two.' },
    { title: 'Restores height', text: 'The balloon can help lift the collapsed bone.' },
    { title: 'Better mobility', text: 'Less pain means less bed rest and fewer complications.' },
    { title: 'Minimally invasive', text: 'It is done through a needle, often as an outpatient procedure.' }] },
  recovery: { title: 'What recovery is like', text: 'Most people walk within hours and resume daily activities quickly.', steps: [
    { label: 'Same day', title: 'Walk and go home', text: 'Patients usually walk within one to two hours and can go home that day.' },
    { label: 'First weeks', title: 'Ease back in', text: 'Most daily activities resume quickly. Avoid heavy lifting for a few weeks.' },
    { label: 'Long term', title: 'Protect your bones', text: 'We help plan bone health care with your primary doctor to lower the risk of new fractures.' }] },
  safety: { title: 'Is it safe?', text: ['Kyphoplasty is well studied and widely used. Live X-ray guidance helps keep the cement inside the bone.', 'Problems such as cement leakage or infection are uncommon.'] },
  faqs: [
    { q: 'How soon should a fracture be treated?', a: 'Results are best when it is treated early, usually within the first few months. If you have sudden back pain, call us soon.' },
    { q: 'Is the procedure painful?', a: 'Numbing medicine and sedation keep you comfortable. Soreness at the needle site usually fades within a few days.' },
    { q: 'Can it prevent future fractures?', a: 'It treats the broken bone only. Treating bone health, such as osteoporosis, is what helps prevent new fractures.' }],
};

servicePages['regenerative-medicine'] = {
  slug: 'regenerative-medicine', title: 'Regenerative Medicine & Joints',
  summary: 'PRP, Regenexx® and joint injections use your own tissue and gels to help joints and tendons heal.',
  metaTitle: 'Regenerative Medicine & Joint Injections in Maryland & Delaware | Choice Pain & Rehabilitation Center',
  metaDescription: 'PRP, Regenexx®, steroid and hyaluronic acid injections for joint and tendon pain. Offered at 10 offices in Maryland and Delaware.',
  lede: 'Regenerative medicine uses your own body tissue to support healing. PRP, Regenexx® procedures, joint injections and hyaluronic acid gel injections may ease joint and tendon pain and help you stay active.',
  photos: [P('1606206591513', "Rows of blood collection tubes in a laboratory"), P('1638980314369', "Syringe taped to a patient's leg"), P('1733685372553', "Doctor examining a patient's arm")],
  whatIs: { title: 'What is regenerative medicine?', text: [
    'Platelet-rich plasma (PRP) is made from a small sample of your blood, spun to concentrate the platelets. Platelets carry growth factors that help repair tissue. The concentrate is injected into the injured joint, tendon or ligament with ultrasound or X-ray guidance.',
    'Regenexx® uses advanced lab processing of your own cells for joints and the spine. For arthritis we also offer steroid injections for the shoulder, hip and knee, and hyaluronic acid gel (viscosupplementation) to cushion the knee.',
    'Our board-certified specialists explain each step before you decide.'] },
  candidates: { title: 'Is it right for you?', text: 'Good candidates are active people with joint or soft-tissue pain who want to delay or avoid surgery.',
    conditions: ['Knee, hip and shoulder arthritis', 'Tendon injuries such as tennis elbow and rotator cuff', 'Ligament sprains', 'Sports injuries', 'Some disc and spine pain'],
    symptoms: ['Joint pain with activity', 'Stiffness and swelling', 'Pain that lingers after an injury', 'Less range of motion'] },
  benefits: { title: 'Why patients choose it', text: 'Care that aims to help your body heal, not only cover up the pain.', items: [
    { title: 'Uses your own cells', text: 'The risk of an allergic reaction is very low.' },
    { title: 'Aims to repair', text: 'It supports tissue healing instead of only masking pain.' },
    { title: 'Precise placement', text: 'Ultrasound or X-ray guidance puts the treatment exactly where it is needed.' },
    { title: 'May delay surgery', text: 'It may help you delay or avoid a joint replacement.' }] },
  recovery: { title: 'What recovery is like', text: 'Improvement often builds slowly over weeks to months.', steps: [
    { label: 'First days', title: 'Rest the area', text: 'Some soreness is normal. If your provider asks, avoid anti-inflammatory pills.' },
    { label: 'Weeks 2 to 6', title: 'Guided rehab', text: 'Rehabilitation exercises help strengthen the treated tissue.' },
    { label: 'About 3 months', title: 'Best results', text: 'Most patients notice the biggest improvement around this time.' }] },
  safety: { title: 'Is it safe?', text: ['PRP and Regenexx® use your own blood or cells, so the chance of a reaction is very low.', 'As with any injection, there is a small risk of infection or a short-term increase in pain.'] },
  faqs: [
    { q: 'Is PRP covered by insurance?', a: 'Coverage varies, and PRP is often not covered. Our team explains costs before treatment.' },
    { q: 'How many treatments will I need?', a: 'Many people need one to three, depending on the problem.' },
    { q: 'Which joint injection is right for me?', a: 'Your physician reviews your imaging, activity level and goals to recommend the best option.' }],
};
