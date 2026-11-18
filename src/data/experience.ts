export interface Role {
  title: string;
  start: string; // "Mar 2025"
  end: string; // "Apr 2026" or "Present"
}

export interface Job {
  company: string;
  url?: string;
  city: string;
  /** Written once per company, under all roles. */
  team: string;
  /** Newest first. The first role's title and dates go on the heading lines. */
  roles: Role[];
}

export interface EarlierItem {
  org: string;
  url?: string;
  title: string;
  when?: string;
}

export const jobs: Job[] = [
  {
    company: 'Stripe',
    url: 'https://stripe.com',
    city: 'New York, NY',
    team: 'Risk — Fraud User Interventions team',
    roles: [{ title: 'Software Engineer II', start: 'Mar 2025', end: 'Apr 2026' }],
  },
  {
    company: 'Qualtrics',
    url: 'https://www.qualtrics.com',
    city: 'Seattle, WA',
    team: 'Employee Experience (EX) team',
    roles: [
      { title: 'Software Engineer II', start: 'May 2023', end: 'Feb 2025' },
      { title: 'Software Engineer I', start: 'Aug 2021', end: 'May 2023' },
    ],
  },
];

export const earlier: EarlierItem[] = [
  {
    org: 'Qualtrics',
    title: 'Software Engineer Intern',
    when: '2020',
  },
  {
    org: 'Numina',
    title: 'Software Engineer Intern',
    when: '2019',
  },
  {
    org: 'Google Mentorship Program',
    title: 'Mentee',
    when: '2018 — 2019',
  },
];

export const education = {
  school: 'Hunter College',
  program: 'Daedalus Honors Program',
  degree: 'Bachelor’s in Computer Science',
  minors: 'Minors in Math and Theatre',
  when: '2017 — 2021',
};
