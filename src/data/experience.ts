export interface Job {
  company: string;
  url?: string;
  title: string;
  start: string; // "MAR 2025"
  end: string; // "APR 2026" or "PRESENT"
  city: string;
  /** One line about the team, e.g. "Fraud User Interventions team" */
  team: string;
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
    title: 'Software Engineer II',
    start: 'Mar 2025',
    end: 'Apr 2026',
    city: 'New York, NY',
    team: 'Fraud User Interventions team',
  },
  {
    company: 'Qualtrics',
    url: 'https://www.qualtrics.com',
    title: 'Software Engineer II',
    start: 'Aug 2021',
    end: 'Feb 2025',
    city: 'Seattle, WA',
    team: 'Employee Experience team',
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
  degree: 'Bachelor’s in Computer Science, minors in Math and Theatre',
  when: '2017 — 2021',
};
