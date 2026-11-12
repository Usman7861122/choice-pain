// PLACEHOLDER HOURS: the old choicepain.com shows no office hours. The practice must confirm these.
// To change one office, add its slug under `overrides`. Times are 24h "HH:MM"; null = closed. Index 0 = Sunday.
export const officeTimeZone = 'America/New_York'; // all 10 offices (MD and DE) are in Eastern time
export type Day = { open: string; close: string } | null;
export const defaultHours: Day[] = [
  null,
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  null,
];
export const overrides: Record<string, Day[]> = {};
export const hoursFor = (slug: string): Day[] => overrides[slug] || defaultHours;
export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const fmt = (t: string) => { const [h, m] = t.split(':').map(Number); const ap = h >= 12 ? 'PM' : 'AM'; return `${h % 12 || 12}${m ? ':' + String(m).padStart(2, '0') : ''} ${ap}`; };
