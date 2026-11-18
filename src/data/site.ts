export interface Link {
  label: string;
  href: string;
}

export const site = {
  name: 'Leo Au-Yeung',
  legalName: 'Yiu-Wah (Leo) Au-Yeung',
  role: 'Software engineer',
  company: 'Stripe',
  city: 'New York',
  /** Hero line, kept under 15 words. */
  tagline: 'Software engineer. Native New Yorker.',
  /** Optional second clause in the hero. */
  subline: 'Experience: Stripe, Qualtrics',
  description:
    'Leo Au-Yeung is a software engineer and native New Yorker, with experience at Stripe and Qualtrics. Also a photographer and two-time marathoner.',
  url: 'https://leoauyeung.com',
  email: 'leo297747@gmail.com',
  linkedin: 'https://www.linkedin.com/in/leo-au-yeung/',
  github: 'https://github.com/leoauyeung',
  instagram: '',
  resume: '/resume.pdf',
  year: 2026,
};

export const nav: Link[] = [
  { label: 'work', href: '/work' },
  { label: 'photos', href: '/photos' },
];

export const contacts: Link[] = [
  { label: 'email', href: `mailto:${site.email}` },
  { label: 'linkedin', href: site.linkedin },
  { label: 'github', href: site.github },
  ...(site.instagram ? [{ label: 'instagram', href: site.instagram }] : []),
  { label: 'résumé ↗', href: site.resume },
];

/** External links (and the PDF) open in a new tab. */
export const isExternal = (href: string) => /^https?:\/\//.test(href) || href.endsWith('.pdf');
