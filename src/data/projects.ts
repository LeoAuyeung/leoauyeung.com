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
    tags: ['HackNYU', '1st place', 'mobile'],
    blurb:
      'A mobile app that rounds up everyday purchases and donates the spare change to environmental charities. Won 1st place in the sustainability track.',
    links: [{ label: 'post', href: 'https://bit.ly/changeHackNYU20' }],
  },
  {
    title: 'Scholars at Risk',
    year: 2019,
    tags: ['JPMC Code for Good', '2nd place', 'web'],
    blurb:
      'A multilingual web app, built in 24 hours, that lets academics anonymously report self-censorship and turns the reports into visualizations for the nonprofit.',
    links: [{ label: 'post', href: 'https://bit.ly/pactCFG19' }],
  },
  {
    title: 'Pokémon: Fantastic Version',
    year: 2016,
    tags: ['Java', 'terminal'],
    blurb:
      'A terminal Pokémon game with catching, gym battles, leveling and evolution, built with a classmate for AP Computer Science.',
    links: [{ label: 'code', href: 'https://github.com/LeoAuyeung/Team-Fantastic-Baby' }],
  },
];
