export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  skills: string[];
  type: 'education' | 'work' | 'project';
}

export interface AboutInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  imageUrl: string;
}