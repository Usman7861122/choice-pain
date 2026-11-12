// Source: https://choicepain.com/services/ (old site Services dropdown, used as Conditions)
const c = (slug: string, title: string) => ({ slug, title });
export const conditions = [
  c('back-pain','Back Pain'), c('neck-pain','Neck Pain'), c('shoulder-pain','Shoulder Pain'), c('knee-pain','Knee Pain'),
  c('hip-pain','Hip Pain'), c('foot-and-ankle-pain','Foot & Ankle Pain'), c('arm-and-hand-pain','Arm & Hand Pain'),
  c('arthritis','Arthritis'), c('carpal-tunnel-syndrome','Carpal Tunnel Syndrome'), c('complex-regional-pain-syndrome','Complex Regional Pain Syndrome'),
  c('fibromyalgia','Fibromyalgia'), c('headache','Headache'), c('tmj','TMJ'), c('whiplash','Whiplash'),
  c('diabetic-neuropathy','Diabetic Neuropathy'), c('postherpetic-neuralgia','Postherpetic Neuralgia'), c('facet-syndrome','Facet Syndrome'),
  c('sacroiliac-joint-injection','Sacroiliac Joint Pain'), c('tennis-elbow','Tennis Elbow'), c('osteoporosis','Osteoporosis'),
  c('interstitial-cystitis','Interstitial Cystitis'), c('cancer-pain','Cancer Pain'), c('personal-injuries','Personal Injuries'),
  c('workers-compensation','Workers Compensation'), c('sports-medicine','Sports Medicine'), c('suboxone','Suboxone'),
];
