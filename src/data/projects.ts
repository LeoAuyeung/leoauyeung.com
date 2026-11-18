export interface ProjectLink {
  label: string; // "code", "live", "post"
  href: string;
}

export interface Project {
  title: string;
  year: number;
  tags: string[];
  blurb: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: 'Change',
    year: 2020,
    tags: ['HackNYU', '1st place sustainability project', 'React Native'],
    blurb:
      'A React Native mobile app that rounds up everyday card purchases and donates the spare change to environmental charities, built with the Plaid API.',
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
      'A multilingual React app that lets academics anonymously report self-censorship and turns the reports into visualizations for the nonprofit.',
    links: [{ label: 'post', href: 'https://bit.ly/pactCFG19' }],
  },
  {
    title: 'Pokémon: Fantastic Version',
    year: 2016,
    tags: ['AP Computer Science', 'final project', 'Java'],
    blurb:
      'A Java terminal Pokémon game with catching, gym battles, leveling, and evolution, built with a classmate.',
    links: [{ label: 'code', href: 'https://github.com/LeoAuyeung/Team-Fantastic-Baby' }],
  },
];
