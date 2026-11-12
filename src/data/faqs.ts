// Answers are paraphrased from the FAQ page on choicepain.com.
export interface Faq { q: string; a: string }
export const faqGroups: { id: string; title: string; items: Faq[] }[] = [
  { id: 'causes', title: 'Causes & prevention', items: [
    { q: 'Why do so many people suffer from back pain?', a: 'With age, muscles and bones weaken and cushion the spine less well. Bulging or ruptured discs can press on nerves and cause pain. Smoking, extra weight, poor posture and poor sleep add to the problem.' },
    { q: 'How can I avoid back pain?', a: 'Prevention works best. Stretch before and after activity, keep good posture, share your weight evenly when you stand, use a firm mattress, take breaks from sitting, stay at a healthy weight, lift with your legs and do not smoke.' },
    { q: 'How can I use ergonomics in everyday life?', a: 'Good ergonomics helps prevent repetitive-motion problems such as carpal tunnel syndrome. Use a headset for long calls, add a footrest if your feet do not reach the floor, switch between sitting and standing, center your monitor, type lightly and keep your shoulders relaxed.' },
    { q: 'Why should I exercise instead of resting a sore back?', a: 'Bed rest weakens muscles and slows healing. Some discomfort during activity does not mean you are causing harm. Stronger muscles support a full return to normal life, and studies link staying active with a faster return to work.' },
  ] },
  { id: 'spine', title: 'Spine conditions', items: [
    { q: 'What is the difference between a slipped, bulging, ruptured and herniated disc?', a: 'All four terms describe a disc that has weakened over time so part of it pushes out between the vertebrae. Your doctor can tell you which term fits your scan and what it means for your treatment.' },
    { q: 'What is degenerative disc disease?', a: 'As we age, discs lose their spring and become more likely to herniate under heavy loads. Family history raises the risk. Worn discs lose their shock absorption, and the space between the vertebrae can narrow.' },
    { q: 'How can osteoporosis affect the spine?', a: 'Osteoporosis often goes unnoticed until a bone breaks. Spinal vertebrae can collapse without warning, leading to pain, a stooped posture, loss of height and sometimes nerve damage.' },
    { q: 'What is scoliosis?', a: 'Scoliosis is a sideways curve of the spine with twisted vertebrae. Mild cases may make the hips or ribs look uneven. Severe cases can press on organs and may need surgery. Finding it early and limiting how far it progresses is the key.' },
  ] },
  { id: 'surgery', title: 'Surgery & procedures', items: [
    { q: 'How often is surgery needed for back pain?', a: 'Many people believe surgery is the only real cure, but experts estimate it helps only about 5% of back pain cases. Most episodes of low back pain improve within six weeks.' },
    { q: 'When should I think about surgery?', a: 'Surgery is usually considered only after nonsurgical care has not worked. That care includes ice and heat, short rest, exercise, injections and medication. Options such as acupuncture may also be explored.' },
    { q: 'What is minimally invasive surgery?', a: 'The surgeon uses very small incisions and special tools to repair the spine. Results are said to match open surgery, with less muscle damage, shorter operations and recovery, smaller scars, and less pain and blood loss.' },
    { q: 'Why is the artificial disc big news?', a: 'It is seen as the best alternative to fusion so far. More than 200,000 spinal fusions are done in the U.S. each year, and experts expect over half of those patients could one day receive an artificial disc.' },
    { q: 'Who is a candidate for an artificial disc?', a: 'Candidates include people with a worn or injured disc at L4-L5 or L5-S1 that causes pain, and people with degenerative disc disease whose vertebrae have moved less than 3 mm. A physician also looks at activity level, weight, occupation and allergies.' },
    { q: 'What are the benefits of an artificial disc?', a: 'Patients often return to activity sooner than after fusion. The disc keeps the spine moving, may protect nearby levels from wear, needs no bone graft and reduces disc-related pain.' },
    { q: 'Are there any drawbacks to an artificial disc?', a: 'Younger patients in their 20s or 30s may outlive the implant, which is expected to last about 15 to 20 years like joint replacements. Replacing a worn-out disc later can be complex.' },
  ] },
  { id: 'training', title: 'About your doctor', items: [
    { q: 'What is fellowship training?', a: 'A fellowship is the highest level of specialty training for U.S. physicians. It is funded by a grant for advanced study or a special project and usually includes a stipend.' },
  ] },
];
