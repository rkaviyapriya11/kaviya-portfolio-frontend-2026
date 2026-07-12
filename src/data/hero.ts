export type SocialPlatform = 'github' | 'linkedin' | 'email'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  href: string
}

export interface HeroAction {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'outline'
}

export interface HeroData {
  greeting: string
  name: string
  title: string
  intro: string
  profileImage: {
    src: string
    alt: string
  }
  actions: HeroAction[]
  socialLinks: SocialLink[]
}

export const heroData: HeroData = {
  greeting: "Hi, I'm",
  name: 'R. Kaviyapriya',
  title: 'Frontend Developer | Node.js Developer',
  intro:
    'I build responsive, user-focused web applications with React and scalable backend solutions with Node.js. Passionate about clean code and delivering polished digital experiences.',
  profileImage: {
    src: '/profile.jpg',
    alt: 'R. Kaviyapriya — Frontend and Node.js Developer',
  },
  actions: [
    {
      label: 'Download Resume',
      href: '/resume.pdf',
      variant: 'primary',
    },
    {
      label: 'View Projects',
      href: '#projects',
      variant: 'secondary',
    },
    {
      label: 'Hire Me',
      href: '#contact',
      variant: 'outline',
    },
  ],
  socialLinks: [
    {
      platform: 'github',
      label: 'GitHub',
      href: 'https://github.com/yourusername',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
    },
    {
      platform: 'email',
      label: 'Email',
      href: 'mailto:your.email@example.com',
    },
  ],
}
