export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface Speech {
  date: string;
  title: string;
  event: string;
  location: string;
}

export interface Publication {
  type: 'patent' | 'paper';
  title: string;
  journalOrId: string; // Journal name for papers, Patent No. for patents
  date: string;
  authors?: string; // Optional field for co-authors
}

export interface ResourceItem {
  title: string;
  description: string;
  format: string;
  size: string;
  downloadUrl: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  TRACK_RECORD = 'track-record',
  RESOURCES = 'resources',
  CONTACT = 'contact',
}