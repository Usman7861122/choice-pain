// Treatment pages. Source list of treatments: https://choicepain.com/treatment/ (names only). All text is written in our own words.
// MEDICAL TEXT is general patient education: the practice's doctors must review it before launch.
// PHOTOS: only already-licensed Shutterstock photos (status "repeated") until fresh ones are added. See scripts/PHOTO-STATUS.md.
import { photoAlt } from './condition-builder';
import { tspecs1 } from './treatment-specs-1';
import { tspecs2 } from './treatment-specs-2';
import { tspecs3 } from './treatment-specs-3';
import { tspecs4 } from './treatment-specs-4';
import { tspecs5 } from './treatment-specs-5';
export interface Treatment {
  slug: string; path?: string; video?: boolean; title: string; group: string; short: string; lede: string; ov: [string, string];
  cond: string[]; sym: string[]; ben: [string, string][]; rec: [string, string, string][]; safety: string;
  faqs: [string, string][]; rel: string[]; svc?: string; ph: [string, string, string];
}
export const treatmentGroups = ['Spine & Epidural', 'Sympathetic & Plexus Blocks', 'Head, Neck & Face', 'Peripheral Nerves & Joints'] as const;
export const treatmentList: Treatment[] = [...tspecs1, ...tspecs2, ...tspecs3, ...tspecs4, ...tspecs5];
export const treatmentAlt = (id: string) => photoAlt[id] || 'Clinic photo';
