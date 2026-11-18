export interface ProjectLink {
  label: string; // "code", "devpost", "post"
  href: string;
}

export interface Project {
  title: string;
  year: number;
  /** Meta line after the year: event/course · result · language */
  tags: string[];
  /** One sentence. Don't name the language here; it's already in the tags. */
  blurb: string;
  /** Optional inline link that finishes the blurb: `${blurb}${lead}<a>${text}</a>.` */
  blurbLink?: { lead: string; text: string; href: string };
  links: ProjectLink[];
}

/** Newest first. */
export const projects: Project[] = [
  {
    title: 'Change',
    year: 2020,
    tags: ['HackNYU', '1st place sustainability project', 'React Native'],
    blurb:
      'A mobile app that rounds up everyday card purchases and donates the spare change to environmental charities, built with the Plaid API.',
    links: [
      { label: 'code', href: 'https://github.com/LeoAuyeung/Change' },
      { label: 'devpost', href: 'https://devpost.com/software/change-o9yabw' },
    ],
  },
  {
    title: 'Scholars at Risk',
    year: 2019,
    tags: ['JPMC Code for Good', '2nd place overall', 'React'],
    blurb:
      'A multilingual web app that lets academics anonymously report self-censorship and turns the reports into visualizations for the nonprofit.',
    links: [
      { label: 'code', href: 'https://github.com/jerseycity19/team-3' },
      { label: 'post', href: 'https://bit.ly/pactCFG19' },
    ],
  },
  {
    title: '2048',
    year: 2019,
    tags: ['Google Mentorship Program', 'final project', 'JavaScript'],
    blurb: 'A web browser replica of the popular game 2048',
    blurbLink: { lead: '; play it live ', text: 'here', href: 'https://angelalim1010.github.io/2048/' },
    links: [{ label: 'code', href: 'https://github.com/angelalim1010/2048' }],
  },
  {
    title: 'Pokémon: Fantastic Version',
    year: 2016,
    tags: ['AP Computer Science', 'final project', 'Java'],
    blurb:
      'A terminal simulation of the classic Pokémon game, with catching, gym battles, leveling, and evolution.',
    links: [{ label: 'code', href: 'https://github.com/LeoAuyeung/Team-Fantastic-Baby' }],
  },
];
