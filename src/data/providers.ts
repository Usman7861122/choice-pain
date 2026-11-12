// Bios are written in our own words from the public providers page on choicepain.com. Have the practice review them.
export interface Provider {
  slug: string; name: string; short: string; role: string; img: string;
  intro: string; bio: string[]; focus: string[]; education: string[]; board?: string; offices: string[]; officeSlugs: string[]; notes?: string;
  highlights?: { n: string; label: string }[];
  approach?: { title: string; steps: { title: string; text: string }[] };
  awards?: string[];
}

export const providers: Provider[] = [
  {
    slug: 'tristan-shockley', name: 'Tristan Shockley, MD', short: 'Dr. Shockley', role: 'Pain Management Physician',
    img: '/images/doctors/tristan-shockley.png',
    intro: 'A board-certified pain medicine doctor who treats the source of pain with image-guided, nonsurgical care.',
    bio: [
      'Dr. Shockley uses fluoroscopic and ultrasound guidance to find where pain starts, reach a clear diagnosis and treat the underlying cause.',
      'He puts patient education first and prepares patients for regenerative physical therapy, with one goal: to restore function so you can get back to daily life.',
    ],
    focus: ['Nonsurgical interventional pain medicine', 'Prolotherapy', 'Weight management', 'Physiatric treatments'],
    education: ['B.A., magna cum laude, Howard University', 'M.D., Howard University College of Medicine', 'Internship in Arizona', 'Specialty training at Sinai Hospital of Baltimore'],
    board: 'American Board of Physical Medicine and Rehabilitation',
    offices: ['Dundalk (main office)', 'Olney', 'Rosedale', 'Hyattsville', 'Lanham', 'Pikesville', 'Gaithersburg'],
    officeSlugs: ['dundalk', 'olney', 'rosedale', 'hyattsville', 'lanham', 'pikesville', 'gaithersburg'],
    highlights: [{ n: 'PM&R', label: 'Board-certified, American Board of Physical Medicine and Rehabilitation' }, { n: '7', label: 'Offices where he sees patients' }, { n: 'Image-guided', label: 'Fluoroscopic and ultrasound-guided procedures' }],
    approach: { title: 'How Dr. Shockley approaches your care', steps: [
      { title: 'Find the source', text: 'Live imaging, either fluoroscopy or ultrasound, helps pinpoint where the pain begins.' },
      { title: 'Make a clear diagnosis', text: 'Guided procedures help confirm what is causing your pain.' },
      { title: 'Treat the cause', text: 'Care aims at the underlying problem, not only the symptom.' },
      { title: 'Prepare for rehab', text: 'He teaches you what to expect and prepares you for regenerative physical therapy.' },
      { title: 'Restore function', text: 'The goal is a body that moves again, so daily life feels easier.' },
    ] },
  },
  {
    slug: 'obi-onyewu', name: 'Obi Onyewu, MD, FAAPMR', short: 'Dr. Obi', role: 'Physical Medicine & Rehabilitation',
    img: '/images/doctors/obi-onyewu.png',
    intro: 'Known to patients as "Dr. Obi", he treats acute and chronic pain with minimally invasive techniques.',
    bio: [
      'Dr. Onyewu has more than 16 years of experience in pain medicine. He shapes each plan around your diagnosis, your history and your needs.',
      'His work has been recognized by several top-doctor lists, including the Becker Spine Review list of top pain specialists and Vital patient-choice awards.',
    ],
    focus: ['Acute and chronic pain', 'Minimally invasive pain treatment', 'Physical medicine and rehabilitation'],
    education: ['M.D., Temple University School of Medicine', 'Residency in physical medicine and rehabilitation, Georgetown University Hospital', 'Pain medicine fellowship, Mid-Atlantic Pain Institute (Delaware)'],
    board: 'Double board-certified',
    offices: ['Olney', 'Rosedale', 'Lanham', 'Pikesville'],
    officeSlugs: ['olney', 'rosedale', 'lanham', 'pikesville'],
    highlights: [{ n: '16+', label: 'Years of experience' }, { n: '2x', label: 'Double board-certified' }, { n: '4', label: 'Offices where he sees patients' }],
    awards: ["The Becker's Spine Review Top 150 Pain Specialists", "Vital's Patient Choice award", "Vital's Compassionate Doctor award"],
  },
  {
    slug: 'jasmine-barksdale-cobb', name: 'Jasmine Barksdale-Cobb, CRNP', short: 'Jasmine Barksdale-Cobb', role: 'Nurse Practitioner',
    img: '/images/doctors/jasmine-barksdale-cobb.png',
    intro: 'A nurse practitioner who helps patients with chronic pain become more active again.',
    bio: [
      'Jasmine helps patients move better and return to the activities they enjoy. Her warm manner builds trust with patients and with her team.',
      'She tailors care to each diagnosis and health history, and she reminds patients that a pain-free life is possible.',
    ],
    focus: ['Chronic pain management', 'Personalized treatment plans'],
    education: [],
    offices: [],
    officeSlugs: [],
    notes: 'Call the office to find out which location she sees patients at.',
  },
];
