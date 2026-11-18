export interface Job {
  company: string;
  url?: string;
  title: string;
  /** e.g. "Software Engineer → Software Engineer II" when promoted */
  titleNote?: string;
  start: string; // "MAR 2025"
  end: string; // "APR 2026" or "PRESENT"
  city: string;
  bullets: string[]; // at most 3, each with a number
}

export interface EarlierItem {
  org: string;
  url?: string;
  title: string;
  when?: string;
  note: string;
}

export const jobs: Job[] = [
  {
    company: 'Stripe',
    url: 'https://stripe.com',
    title: 'Software Engineer II',
    start: 'Mar 2025',
    end: 'Apr 2026',
    city: 'New York',
    bullets: [
      'Cut bank payout pauses by 49% while keeping fraud loss under $2k a month, partnering with data science on rule changes verified through A/B tests.',
      'Designed, launched and owned a Java gRPC service for account history across 5M+ merchants, handling 2M+ transactions a day at 99.95% uptime.',
      'Automated merchant review exemptions with an Airflow pipeline, removing 5,000+ unnecessary reviews for platforms processing $277B a year.',
    ],
  },
  {
    company: 'Qualtrics',
    url: 'https://www.qualtrics.com',
    title: 'Software Engineer II',
    titleNote: 'Software Engineer → Software Engineer II',
    start: 'Aug 2021',
    end: 'Feb 2025',
    city: 'Seattle',
    bullets: [
      'Led the Angular-to-React/TypeScript migration of Heat Map, a widget used by 70% of client brands with 800,000+ weekly executions.',
      'Took a Node.js microservice to 99.999% uptime and Sev-1 reliability certification with batched async workflows, retries and golden-signal alerting.',
      'Built a Redis cache that cut query response times by 30%, and shipped historical dataset comparisons that drove $1M+ in new revenue.',
    ],
  },
];

export const earlier: EarlierItem[] = [
  {
    org: 'Qualtrics',
    title: 'Software Engineer Intern',
    when: 'Summer 2020',
    note: 'Two React integrations with Google Calendar and Sheets, used by 80+ clients.',
  },
  {
    org: 'Numina',
    title: 'Software Engineer Intern',
    when: '2019',
    note: 'React/GraphQL admin panel that cut customer onboarding time by 90%.',
  },
  {
    org: 'Google Mentorship Program',
    title: 'Mentee',
    when: '2018 — 2019',
    note: 'One of 20 students in the pilot cohort, paired with a senior engineer.',
  },
];

export const education = {
  school: 'Hunter College',
  program: 'Daedalus Honors Program',
  degree: 'B.A. Computer Science, minors in Math and Theatre',
  when: '2017 — 2021',
};
