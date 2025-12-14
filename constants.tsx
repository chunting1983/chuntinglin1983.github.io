import React from 'react';
import { ServiceItem, Experience, Speech, Publication, Education } from './types';

// Icons as SVG components
export const Icons = {
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Scale: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
  ),
  LightBulb: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.45l.75 2.25h-4.5l.75-2.25a6.01 6.01 0 001.5.45zM12 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM12 12V5.25M12 5.25a2.25 2.25 0 00-2.25-2.25H9.75a2.25 2.25 0 00-2.25 2.25V12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a2.25 2.25 0 002.25 2.25h-4.5A2.25 2.25 0 0012 20.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c3.75 0 7.5 3 7.5 7.5 0 3.375-3.75 7.5-7.5 7.5S4.5 13.125 4.5 9.75c0-4.5 3.75-7.5 7.5-7.5z" />
    </svg>
  ),
  Handshake: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  ),
  Microphone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  ),
  Document: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  Patent: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  )
};

export const PROFILE = {
  name: "Dr. CT Lin (林峻霆)",
  title: "Chief Operating Officer, OCIC, NTHU",
  tagline: "Bridging Deep-Tech Innovation and Commercial Success.",
  bio: `I am a seasoned professional with 15+ years of multidisciplinary experience spanning deep-tech startups, industry-academic collaboration, and national innovation policy. Currently serving as the Chief Operating Officer at National Tsing Hua University's Operations Center for Industry Collaboration, I specialize in open innovation ecosystems, patent commercialization, and deep-tech startup acceleration. My background includes pivotal roles in government think tanks and cross-border biotech ventures, with technical expertise in BNCT, nanomaterials, and electro-chemistry.`,
  linkedin: "https://www.linkedin.com/in/CTLIN1983",
  email: "chuntinglin1983@gmail.com"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Industry-Academic Collaboration",
    description: "Building partnerships between government, corporates, and academia. Leading the Hermes-Epitek Joint Innovation Platform to scout and match deep-tech technologies.",
    icon: <Icons.Handshake />,
  },
  {
    title: "Startup Acceleration & Mentoring",
    description: "Mentoring 10+ deep-tech startups on IP strategy, fundraising, and licensing structures. Expert in bridging R&D with business realities.",
    icon: <Icons.LightBulb />,
  },
  {
    title: "IP Strategy & Commercialization",
    description: "Managing large-scale patent portfolios (2000+ patents). Proven track record of tripling patent transaction volume and doubling contract values.",
    icon: <Icons.Scale />,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Chief Operating Officer",
    company: "Operations Center for Industry Collaboration, NTHU",
    period: "Jul 2024 – Present",
    description: "Lead the Industrial Liaison Officers (ILO) team. Drive patent commercialization through demand-driven strategies and build global innovation partnerships.",
  },
  {
    role: "Division Manager / Industrial Liaison Officer",
    company: "Technology Transfer Division, OCIC, NTHU",
    period: "Oct 2021 – Jun 2024",
    description: "Oversaw a 2000+ patent portfolio. Launched the Tsing-Hua Hermes-Epitek Joint Innovation Platform. Tripled annual patent transactions from <30 to 90 per year.",
  },
  {
    role: "Director, General Manager Office",
    company: "Neuboron Medtech, China",
    period: "Jun 2019 – Sep 2021",
    description: "Led IP strategy and international partnerships. Managed a global portfolio of 600+ BNCT patents and supported US-China Joint Ventures.",
  },
  {
    role: "Researcher",
    company: "National Institutes of Applied Research (NARLabs)",
    period: "Nov 2008 – May 2019",
    description: "Served as Associate Researcher and seconded to the Executive Yuan's Office of Science and Technology. Contributed to national S&T policy and autonomous vehicle regulations.",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Ph.D., Engineering and System Science",
    institution: "National Tsing Hua University (NTHU), Taiwan",
    period: "2012 – 2016",
    details: "Focus: Nano-catalysis, Surface Analysis, and Electrochemistry."
  },
  {
    degree: "M.S., Engineering and System Science",
    institution: "National Tsing Hua University (NTHU), Taiwan",
    period: "2006 – 2008",
    details: "Focus: Direct methanol fuel cells, Nano-catalysis."
  },
  {
    degree: "Executive Program, IP Law & Tech Transfer",
    institution: "George Washington University / UW / NCCU",
    period: "2011",
    details: "MMOT Program focusing on Technology transfer, IP law, and Investment Evaluation."
  },
  {
    degree: "Short-Term Legal Studies",
    institution: "Shih Hsin University, Taiwan",
    period: "2007 – 2009",
    details: "Focus: General Civil and Commercial Law."
  }
];

// Data from CV PDF
export const SPEECHES: Speech[] = [
  {
    date: "Dec 5, 2024",
    title: "From R&D, IP Transfer to Startups",
    event: "Advanced Industry Talent Training",
    location: "NARLabs, Hsinchu"
  },
  {
    date: "Nov 28, 2024",
    title: "Building Patent Literacy: Search Techniques and Interpretation",
    event: "Advanced Industry Talent Training",
    location: "NARLabs, Hsinchu"
  },
  {
    date: "Jul 23, 2024",
    title: "The Big IP Mindset for Startups",
    event: "Summer Innovation & Entrepreneurship Bootcamp",
    location: "NTHU, Hsinchu"
  },
  {
    date: "Dec 6, 2023",
    title: "The Impact of NTHU's Technology Transfer and Startup Ecosystem (English)",
    event: "iPhD Seminar",
    location: "NTHU, Hsinchu"
  },
  {
    date: "Nov 14, 2023",
    title: "From R&D, IP Transfer to Startups – Essential Commercialization Knowledge",
    event: "Advanced Industry Talent Training",
    location: "NARLabs, Hsinchu"
  },
  {
    date: "Nov 2, 2023",
    title: "Basic Concepts of Patents – Scope of Rights & Fundamental Regulations",
    event: "Advanced Industry Talent Training",
    location: "NARLabs, Hsinchu"
  },
  {
    date: "Jul 15, 2023",
    title: "The Big IP Mindset for Campus Startups – Strategy, Absorption, and Application",
    event: "Garage+",
    location: "NTHU, Hsinchu"
  },
  {
    date: "Dec 7, 2022",
    title: "Startup Fundraising and Leveraging Government Resources",
    event: "Innovation & Incubation Center",
    location: "NTHU, Hsinchu"
  },
  {
    date: "Oct 12, 2022",
    title: "Top-Level Startup Structuring and Equity Incentive Design",
    event: "Innovation & Incubation Center",
    location: "NTHU, Hsinchu"
  },
  {
    date: "Aug 10, 2022",
    title: "Key Commercial Terms in Industry-Academia Collaboration",
    event: "Innovation & Incubation Center",
    location: "NTHU, Hsinchu"
  }
];

export const PUBLICATIONS: Publication[] = [
  // Patents (Selected from 28 granted)
  {
    type: 'patent',
    title: "Visible light response catalyst structure and process for manufacturing the same",
    journalOrId: "US Patent No. US9861975",
    date: "2018"
  },
  {
    type: 'patent',
    title: "The fabrication approach of platinum silicide modified silicon tip apex for field sensing",
    journalOrId: "Japan Patent No. 6078029",
    date: "2017"
  },
  {
    type: 'patent',
    title: "Tip Structure Of Platinum-Silicide-Silicon Composite Field Sensor Probe",
    journalOrId: "US Patent No. 9255944B1",
    date: "2016"
  },
  {
    type: 'patent',
    title: "Neutron capture treatment system and target for particle beam generating device",
    journalOrId: "CN Patent No. CN219481343U",
    date: "2023"
  },
  {
    type: 'patent',
    title: "Target material and base material for particle beam generating device",
    journalOrId: "TW Patent No. TWI813380B",
    date: "2023"
  },
  {
    type: 'patent',
    title: "Visible light response photocatalyst structure and manufacturing method thereof",
    journalOrId: "TW Patent No. I541190",
    date: "2016"
  },
  // Papers (Selected from 19 SCI)
  {
    type: 'paper',
    title: "Rapid fabrication of three-dimensional gold dendritic nanoforests for visible light-enhanced methanol oxidation",
    journalOrId: "Electrochimica Acta, 192, 15",
    date: "2016",
    authors: "C.-T. Lin, et al."
  },
  {
    type: 'paper',
    title: "Facile preparation of a platinum silicide nanoparticle-modified tip apex for scanning Kelvin probe microscopy",
    journalOrId: "Nanoscale Research Letters, 10, 401",
    date: "2015",
    authors: "C.-T. Lin, et al."
  },
  {
    type: 'paper',
    title: "A facile approach to prepare silicon-based Pt-Ag tubular dendritic nano-forests",
    journalOrId: "Nanoscale Research Letters, 10, 74",
    date: "2015",
    authors: "C.-T. Lin, et al."
  },
  {
    type: 'paper',
    title: "Localized Electroless Ag Plating at a Tip Apex for Scanning Kelvin Probe Microscopy",
    journalOrId: "Japanese Journal of Applied Physics, 52",
    date: "2013",
    authors: "C.-T. Lin, et al."
  },
  {
    type: 'paper',
    title: "A simple fabrication process of Pt-TiO2 hybrid electrode for photo-assisted methanol fuel cells",
    journalOrId: "Microelectronic Engineering, 88, 2644",
    date: "2011",
    authors: "C.-T. Lin, et al."
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Dr. CT Lin (林峻霆), a renowned IP & Technology Transfer expert and currently the COO of NTHU's Operations Center for Industry Collaboration.
Your goal is to represent Dr. Lin professionally, answer questions about his background, services, and general IP concepts, and encourage users to book a consultation.

Here is Dr. Lin's profile data:
Name: ${PROFILE.name}
Title: ${PROFILE.title}
Bio: ${PROFILE.bio}
LinkedIn: ${PROFILE.linkedin}

Education:
${EDUCATION.map(e => `- ${e.degree} from ${e.institution} (${e.period})`).join('\n')}

Services:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Key Statistics:
- 15+ years of multidisciplinary experience
- 37 Invited Speeches
- 19 SCI Papers
- 28 Granted Patents
- Tripled patent transactions at NTHU (2022-2024)

Guidelines:
1. Be polite, professional, and knowledgeable.
2. If asked about specific legal advice, clarify that you are an AI and they should book a consultation for formal advice.
3. Keep answers concise (under 150 words) unless asked for details.
4. If the user seems interested in services, suggest clicking the "Book Consultation" button.
5. Use markdown for formatting.
`;