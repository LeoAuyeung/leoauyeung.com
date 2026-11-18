export interface Hackathon {
  name: string;
  year?: number;
  result?: string;
  href?: string;
}

/** Wins and roles, shown one per line. */
export const highlights: Hackathon[] = [
  { name: 'HackNYU', year: 2020, result: '1st place, sustainability', href: 'https://bit.ly/changeHackNYU20' },
  { name: 'JPMorgan Chase Code for Good', year: 2019, result: '2nd place', href: 'https://bit.ly/pactCFG19' },
  { name: 'Hunter Codefest', year: 2019, result: '1st place' },
  { name: 'Hunter Codefest', result: 'Founder and head organizer · month-long hackathon, 100+ students, sponsored by Google' },
];

/** Everything else, shown as one muted line. */
export const alsoAttended: string[] = [
  'Facebook NY Hackathon 2019',
  'SBUHacks 2019',
  'HackNYU 2019',
  'HackCooper 2018',
  'CUNY Hackathon 2017 (top 10)',
];
