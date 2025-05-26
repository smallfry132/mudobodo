import { AboutInfo, SocialLink } from '../types';

export const aboutInfo: AboutInfo = {
  name: 'Johannes Schmidt',
  title: 'Business Informatics Student & Photography Enthusiast',
  bio: `
    I'm Johannes, a Business Informatics student with a passion for both technology and creative expression through photography.
    
    By day, I analyze systems, optimize processes, and develop technology solutions. In my free time, I explore the world through my camera lens, capturing moments that tell stories.
    
    My background in Business Informatics gives me a unique perspective on how technology and business intersect, while photography allows me to express my creativity and appreciation for the world around us.
    
    I believe in the power of both analytical thinking and creative expression, and I strive to bring these complementary approaches to everything I do.
  `,
  location: 'Munich, Germany',
  email: 'contact@johannesschmidt.com',
  imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/johannesschmidt',
    icon: 'Instagram',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/johannesschmidt',
    icon: 'Linkedin',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/johannesschmidt',
    icon: 'Github',
  },
];