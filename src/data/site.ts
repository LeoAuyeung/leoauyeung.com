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
  tagline: 'Your friendly neighborhood software engineer, born and raised in New York.',
  /** Optional second clause in the hero. */
  subline: 'Most recently at Stripe and Qualtrics, building products people actually use.',
  description:
    'Leo Au-Yeung is a New York software engineer, most recently at Stripe and Qualtrics. Also a photographer and two-time marathoner.',
  url: 'https://leoauyeung.com',
  email: 'leo297747@gmail.com',
  linkedin: 'https://www.linkedin.com/in/leo-au-yeung/',
  github: 'https://github.com/leoauyeung',
  instagram: '',
  resume: '/resume.pdf',
  source: 'https://github.com/leoauyeung/leoauyeung.com',
  year: 2026,
};

export const nav: Link[] = [
  { label: 'work', href: '/#about' },
  { label: 'photos', href: '/photos' },
  { label: 'résumé ↗', href: site.resume },
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
