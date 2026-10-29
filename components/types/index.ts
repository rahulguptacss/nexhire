import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
}

export interface TopbarData {
  contact_info: { icon: string; value: string }[];
  socials: { icon: string; href: string }[];
}

export interface HeaderData {
  logo_text: string;
  logo_image: string;
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_text: string;
  logo_image: string;
  description: string;
  socials: { icon: string; href: string }[];
  quick_links: LinkType[];
  our_services?: LinkType[];
  contact: { address: string; phone: string; email: string };
  copyright: string;
}

export interface HeroSectionData {
  subtitle: string;
  title_line1: string;
  title_line2?: string;
  title_highlight: string;
  features: { icon: string; text: string }[];
  button: { text: string; href: string };
  secondary_button?: { text: string; href: string };
  image: string;
  image_alt?: string;
}

export interface FeaturesSectionData {
  items: { icon: string; title: string; description: string }[];
}

export interface AboutSectionData {
  subtitle?: string;
  title: string;
  description: string;
  image1: string;
  image1_alt?: string;
  image2: string;
  image2_alt?: string;
  button?: { text: string; href: string };
  badge_text?: string;
}

export interface MissionVisionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  mission: { title: string; desc: string; description?: string };
  vision: { title: string; desc: string; description?: string };
  image: string;
  image_alt?: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  slug?: string;
  description: string;
  image?: string;
  link?: string;
}

export interface PinnedPanelStat {
  label: string;
  value: string;
}

export interface PinnedPanelItem {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  image_alt?: string;
  badge?: string;
  stats?: PinnedPanelStat[];
  highlights?: string[];
  button?: {
    text: string;
    href: string;
  };
  theme?: 'dark' | 'light' | 'navy' | 'mint' | string;
}

export interface PinnedPanelsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  panels: PinnedPanelItem[];
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button?: { text: string; href: string };
  inquire_text?: string;
  items: ServiceItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  steps: ProcessStep[];
}

export interface WhyChooseUsFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  badge_text: string;
  image1: string;
  image2: string;
  features: WhyChooseUsFeature[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface TeamSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  members: TeamMember[];
}

export interface StatsItem {
  value: string;
  label: string;
}

export interface StatsSectionData {
  items: StatsItem[];
}

export interface TestimonialItem {
  text: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  button?: { text: string; href: string };
  reviews: TestimonialItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  items: FaqItem[];
}

export interface ContactFormField {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactForm {
  label: string;
  title_line1: string;
  title_highlight: string;
  text: string;
  fields: ContactFormField;
  button: string;
  success: string;
}

export interface ContactMap {
  title: string;
  src: string;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  text: string;
  href: string;
  wide?: boolean;
}

export interface ContactSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  form: ContactForm;
  map: ContactMap;
  info: ContactInfoItem[];
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface HomePageData {
  title: string;
  pageName: string;
  metadata?: {
    title: string;
    description: string;
  };
  components: PageComponent[];
}

export interface PagesData {
  home: HomePageData;
  [key: string]: any;
}

export interface SectionsData {
  hero: HeroSectionData;
  features: FeaturesSectionData;
  about: AboutSectionData;
  pinned_panels?: PinnedPanelsSectionData;
  mission_vision: MissionVisionData;
  services: ServicesSectionData;
  process: ProcessSectionData;
  why_choose_us: WhyChooseUsSectionData;
  team: TeamSectionData;
  stats: StatsSectionData;
  testimonials: TestimonialsSectionData;
  faq: FaqSectionData;
  contact: ContactSectionData;
}

export interface CommonData {
  Topbar: TopbarData;
  Header: HeaderData;
  Footer: FooterData;
}

export interface SiteData {
  common: CommonData;
  categories: {
    HR: {
      templateComponents: {
        'template-1': {
          pages: PagesData;
          sections: SectionsData;
        };
      };
    };
  };
}

export const siteJson: SiteData = data as unknown as SiteData;
export const common: CommonData = siteJson.common;
export const template = siteJson.categories.HR.templateComponents['template-1'];
export const pages: PagesData = template.pages;
export const sections: SectionsData = template.sections;
