import React from 'react';
import { ServiceItem, Experience, Speech, Publication, Education, ResourceItem } from './types';

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
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
};

export const PROFILE = {
  name: "Dr. CT Lin (林峻霆)",
  title: "Chief Operating Officer, OCIC, NTHU",
  tagline: "Bridging Deep-Tech Innovation and Commercial Success.",
  bio: `I am a seasoned professional with 15+ years of multidisciplinary experience spanning deep-tech startups, industry-academic collaboration, and national innovation policy. Currently serving as the Chief Operating Officer at National Tsing Hua University's Operations Center for Industry Collaboration, I specialize in open innovation ecosystems, IP deployment & commercialization, and deep-tech startup acceleration. My background includes pivotal roles in government think tanks and cross-border biotech ventures, with technical expertise in BNCT, nanomaterials, surface science, and electro-chemistry.`,
  linkedin: "https://www.linkedin.com/in/CTLIN1983",
  email: "chuntinglin1983@gmail.com"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Industry-Academic Collaboration",
    description: "Building partnerships with government, corporates, and academia. Leading Joint Innovation Platforms with corporates to provide deep tech scouting, screening, and matching services.",
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
    role: "Chief Operating Officer, OCIC",
    company: "National Tsing Hua University (NTHU), Taiwan",
    period: "Jul 2024 – Present",
    description: `1. Industrial Liaison: Lead NTHU’s Industrial Liaison Officers (ILO) team, building partnerships with government, corporates, and academia. Drive the growth of patent commercialization and licensing through demand-driven strategies.
2. IP Promotion: Tripled NTHU's annual patent transactions in two years (fewer than 30/y in 2022 to 90/y in 2024) and doubled IP transaction contract value.
3. Global Partnership & Innovation Ecosystem: Engage with global startups to foster collaboration with Taiwan’s innovation ecosystem. Represent OCIC in strategic dialogues with partners including Heron, UAiTED (17 universities), and the NSTC National Tech Commercialization Platform (46 universities).`,
  },
  {
    role: "Division Manager / Industrial Liaison Officer",
    company: "Technology Transfer Division, OCIC, NTHU",
    period: "Oct 2021 – Jun 2024",
    description: `1. IP Promotion: Oversaw NTHU’s 2000+ patent portfolio, managing portfolio planning, transaction design, and promotion strategies.
2. Joint Innovation Platform: Designed and launched university-led deep-tech scouting, matching and commercialization platform for corporate partners.
3. Startup Mentoring & Acceleration: Coached 10+ deep-tech ventures across semiconductors, biotech, and new energy on IP strategy, licensing structures, and investor communication.`,
  },
  {
    role: "Director, General Manager Office",
    company: "Neuboron Medtech, China",
    period: "Jun 2019 – Sep 2021",
    description: `Promoted from Manager to Director within 6 months; led management, IP strategy, and international partnerships.
- Coordinated cross-functional operations across R&D, IP, regulatory affairs, legal, and global partnerships (US, EU, and Asia).
- Managed a global portfolio of 600+ BNCT patents; led freedom-to-operate (FTO) analyses for China's first accelerator-based BNCT system.
- Co-inventor on 10+ granted BNCT patents; participated in R&D of BNCT target systems.`,
  },
  {
    role: "Researcher (Secondment), Office of Science and Technology",
    company: "Executive Yuan, Taiwan (National Institutes of Applied Research)",
    period: "Aug 2018 – May 2019",
    description: `Appointed to Taiwan’s central policy think tank for S&T under the Executive Yuan.
- Contributed to policy formulation, regulatory frameworks, and national budget planning for smart mobility and autonomous vehicle ecosystems.
- Coordinated the policy communication for Taiwan’s first autonomous vehicle testing field (Shalun, Tainan).`,
  },
  {
    role: "Associate Researcher, Headquarters",
    company: "National Institutes of Applied Research (NARLabs), Taiwan",
    period: "Jan 2017 – Jul 2018",
    description: `- Established standardized legal document review processes (MOUs, licensing, joint research) across 10 national research centers.
- Advised researchers on IP deployment, licensing structures, and due diligence; drafted key business terms for industry-academia collaborations.`,
  },
  {
    role: "Associate Researcher, National Center for Instrumentation Research",
    company: "National Institutes of Applied Research (NARLabs), Taiwan",
    period: "Nov 2008 – Jan 2017",
    description: `- Focused on micro-nano, electrochemistry, and surface analysis while pursuing PhD at NTHU. Authored 30+ SCI papers and patents with expertise in CVD, PVD, TEM, SEM, AFM, etc.
- Provided IP consultancy to over 100 researchers, conducting prior art searches and patent analysis.
- Selected for the MMOT Program at George Washington University and UW, specializing in IP law, tech transfer, and investment evaluation.`,
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

export const SPEECHES: Speech[] = [
  { date: "Dec 5, 2024", title: "From R&D, IP Transfer to Startups", event: "National Applied Research Laboratories (NARLabs) Advanced Industry Talent Training", location: "Hsinchu" },
  { date: "Nov 28, 2024", title: "Building Patent Literacy: Search Techniques and Interpretation", event: "NARLabs Advanced Industry Talent Training", location: "Hsinchu" },
  { date: "Jul 23, 2024", title: "The Big IP Mindset for Startups", event: "Summer Innovation & Entrepreneurship Bootcamp, College of Electrical Engineering and Computer Science, NTHU", location: "Hsinchu" },
  { date: "Dec 6, 2023", title: "The Impact of NTHU's Technology Transfer and Startup Ecosystem (2): IP Deployment and Technology Transfer", event: "NTHU iPhD Seminar", location: "Hsinchu (English)" },
  { date: "Nov 14, 2023", title: "From R&D, IP Transfer to Startups – Essential Commercialization Knowledge for Researchers", event: "NARLabs Advanced Industry Talent Training", location: "Hsinchu" },
  { date: "Nov 2, 2023", title: "Basic Concepts of Patents – Scope of Rights & Fundamental Regulations", event: "NARLabs Advanced Industry Talent Training", location: "Hsinchu" },
  { date: "Jul 15, 2023", title: "The Big IP Mindset for Campus Startups – Strategy, Absorption, and Application", event: "NTHU Garage+", location: "Hsinchu" },
  { date: "Dec 7, 2022", title: "Startup Fundraising and Leveraging Government Resources", event: "NTHU Innovation & Incubation Center", location: "Hsinchu" },
  { date: "Oct 12, 2022", title: "Top-Level Startup Structuring and Equity Incentive Design", event: "NTHU Innovation & Incubation Center", location: "Hsinchu" },
  { date: "Aug 10, 2022", title: "Key Commercial Terms in Industry-Academia Collaboration", event: "NTHU Innovation & Incubation Center", location: "Hsinchu" },
  { date: "Jul 13, 2022", title: "Fundamentals of Industry-Academia Collaboration, Technology Transfer, and Licensing", event: "NTHU Innovation & Incubation Center", location: "Hsinchu" },
  { date: "Jun 8, 2022", title: "Patent Reading, Searching, and Analysis", event: "NTHU Innovation & Incubation Center", location: "Hsinchu" },
  { date: "May 26, 2022", title: "IP Strategy and Risk Management", event: "NTHU Innovation & Incubation Center", location: "Hsinchu" },
  { date: "May 18, 2022", title: "From R&D, IP Transfer to Startups", event: "NARLabs Advanced Industry Talent Training", location: "Hsinchu" },
  { date: "Feb 23, 2022", title: "Key Aspects of Fundraising: Due Diligence", event: "NTHU (Raise Program)", location: "Hsinchu" },
  { date: "Feb 17, 2022", title: "The Art of Exchange: Patent Licensing & Technology Transfer", event: "NTHU (Raise Program)", location: "Hsinchu" },
  { date: "Feb 9, 2022", title: "IP Strategy & Risk Management", event: "NTHU (Raise Program)", location: "Hsinchu" },
  { date: "Nov 23, 2018", title: "Cross-Disciplinary Thinking for Engineers – From R&D to Patents and Technology Transfer", event: "National Taiwan Science Education Center", location: "Taipei" },
  { date: "Mar 22, 2018", title: "From R&D to Technology Transfer – Cross-Disciplinary Thinking for Researchers", event: "National Taiwan Ocean University, Institute of Optoelectronic Science", location: "Keelung" },
  { date: "Jan 23, 2018", title: "From Idea to IP – Transforming R&D Outcomes", event: "National Taiwan Science Education Center", location: "Taipei" },
  { date: "Jan 12, 2018", title: "Panel Speaker, Cultivating Essential Standard Patents and Global Technology Licensing", event: "2018 Polymer Conference", location: "Taipei" },
  { date: "Dec 7, 2017", title: "From R&D, Patents to Technology Transfer – Exporting Advanced Medical Technologies", event: "2017 Taiwan Healthcare Expo", location: "Taipei" },
  { date: "Nov 1, 2017", title: "From R&D, Patents to Technology Transfer", event: "National United University, Department of Chemical Engineering", location: "Miaoli" },
  { date: "May 31, 2017", title: "From R&D Outcomes to Patents – Patent Claim Construction Techniques", event: "Minghsin University of Science and Technology", location: "Hsinchu" },
  { date: "Nov 24, 2016", title: "Invention Engineering and Patent Analysis in the Biomedical Industry", event: "National United University, Department of Chemical Engineering", location: "Miaoli" },
  { date: "Nov 15, 2016", title: "Patent Searching and Analysis", event: "National University of Kaohsiung, Department of Chemical and Materials Engineering", location: "Kaohsiung" },
  { date: "Sep 30, 2016", title: "Invention Engineering and Patent Analysis", event: "National Chung Hsing University, Graduate Institute of Precision Engineering", location: "Taichung" },
  { date: "May 20, 2016", title: "Patent Searching and Analysis", event: "Minghsin University of Science and Technology", location: "Hsinchu" },
  { date: "May 13, 2016", title: "Introduction to Patent Engineering", event: "Minghsin University of Science and Technology", location: "Hsinchu" },
  { date: "May 26, 2015", title: "Special Topics on Patent Databases", event: "Ming Chi University of Technology, Department of Mechanical Engineering", location: "Taipei" },
  { date: "Apr 28, 2015", title: "Patent Searching and Analysis", event: "Patent Practice Training Workshop, Instrument Technology Research Center", location: "Hsinchu" },
  { date: "Mar 10, 2015", title: "Advanced Patent Search Techniques", event: "Ming Chi University of Technology, Department of Mechanical Engineering", location: "Taipei" },
  { date: "Oct 24, 2014", title: "Introduction to Patent Analysis", event: "National Chung Hsing University, Department of Physics", location: "Taichung" },
  { date: "May 15, 2013", title: "Introduction to Patent Engineering", event: "Patent Practice Seminar, Instrument Technology Research Center", location: "Hsinchu" },
  { date: "Mar 9, 2012", title: "Micro/Nano Research Progress at ITRC – From R&D to IP Strategic Thinking", event: "Graduate School of Materials Science, Nara Institute of Science and Technology", location: "Nara, Japan (English)" },
  { date: "Oct 25, 2011", title: "A Brief Introduction to Patent Engineering", event: "International Scientific Instrument Technology Workshop", location: "Hsinchu (English)" },
  { date: "Sep 28, 2011", title: "Introduction to Patent Engineering", event: "Instrument Technology Research Center", location: "Hsinchu" }
];

export const RESOURCES: ResourceItem[] = [
  // Resources data maintained for type consistency but not displayed
];

export const PUBLICATIONS: Publication[] = [
  // --- GRANTED PATENTS (28 Total) ---
  { type: 'patent', title: "Visible light response catalyst structure and process for manufacturing the same", journalOrId: "US Patent No. US9861975", date: "2018" },
  { type: 'patent', title: "The fabrication approach of platinum silicide modified silicon tip apex for field sensing", journalOrId: "Japan Patent No. 6078029", date: "2017" },
  { type: 'patent', title: "Tip Structure Of Platinum-Platinum Silicide-Silicon Composite Field Sensor Probe And Method For Forming Msta Strucutre On The Probe", journalOrId: "US Patent No. 9255944B1", date: "2016" },
  { type: 'patent', title: "Visible light response photocatalyst structure and manufacturing method thereof", journalOrId: "TW Patent No. I541190", date: "2016" },
  { type: 'patent', title: "Platinum-silicon composite tip applicable to field sensing and its preparation method", journalOrId: "TW Patent No. I521210", date: "2016" },
  { type: 'patent', title: "Method For Modifying Probe Tip", journalOrId: "TW Patent No. I472774", date: "2015" },
  { type: 'patent', title: "Method for manufacturing metal-titanium dioxide composite material by using trace partial implantation of metal precursor", journalOrId: "TW Patent No. I414630", date: "2013" },
  { type: 'patent', title: "Neutron capture treatment system and target for particle beam generating device", journalOrId: "CN Patent No. CN219481343U", date: "2023" },
  { type: 'patent', title: "Neutron capture therapy system and target for particle beam generating device", journalOrId: "CN Patent No. CN218830745U", date: "2023" },
  { type: 'patent', title: "Target material for particle beam generating device and processing equipment thereof", journalOrId: "CN Patent No. CN218830744U", date: "2023" },
  { type: 'patent', title: "Neutron capture treatment system", journalOrId: "CN Patent No. CN218482995U", date: "2023" },
  { type: 'patent', title: "Target material for particle beam generating device and base material thereof", journalOrId: "CN Patent No. CN218482994U", date: "2023" },
  { type: 'patent', title: "Neutron capture therapy system and target material for particle beam generation device", journalOrId: "CN Patent No. CN218482993U", date: "2023" },
  { type: 'patent', title: "Target material and base material for particle beam generating device", journalOrId: "TW Patent No. TWI813380B", date: "2023" },
  { type: 'patent', title: "Neutron capture therapy system and target material installation method for particle beam generating device", journalOrId: "TW Patent No. TWI824743B", date: "2023" },
  { type: 'patent', title: "Neutron capture therapy system and target material for particle beam generation device", journalOrId: "TW Patent No. TWI824621B", date: "2023" },
  { type: 'patent', title: "Neutron capture therapy system and target material for particle beam generation device", journalOrId: "TW Patent No. TWI819709B", date: "2023" },
  { type: 'patent', title: "Neutron capture therapy system and target material for particle beam generation device", journalOrId: "TW Patent No. TWI819708B", date: "2023" },
  { type: 'patent', title: "Target material for particle beam generating device and processing equipment and processing method thereof", journalOrId: "TW Patent No. TWI818625B", date: "2023" },
  { type: 'patent', title: "Method of irradiating ultraviolet light on silicon substrate surface for improving quality of native oxide layer and apparatus using the same", journalOrId: "Japan Patent No. 6368813", date: "2018" },
  { type: 'patent', title: "Method of irradiating ultraviolet light on silicon substrate surface for improving quality of native oxide layer and apparatus using the same", journalOrId: "US Patent No. 10026620B1", date: "2018" },
  { type: 'patent', title: "Method of irradiating ultraviolet light on silicon substrate surface for improving quality of native oxide layer and apparatus using the same", journalOrId: "TW Patent No. I614505", date: "2018" },
  { type: 'patent', title: "Method of fabricating composite PDMS microstructure", journalOrId: "US Patent No. 9644257", date: "2017" },
  { type: 'patent', title: "Method of manufacturing composite PDMS microstructures", journalOrId: "TW Patent No. I548643", date: "2016" },
  { type: 'patent', title: "Metamaterial Structure And The Method Of Manufacturing The Same", journalOrId: "TW Patent No. I472819", date: "2015" },
  { type: 'patent', title: "A fabrication and preparation method for hemispherical micro medicine particles and its applications", journalOrId: "TW Patent No. I442946", date: "2014" },
  { type: 'patent', title: "Polishing method for needle point of probe", journalOrId: "TW Patent No. I439696", date: "2014" },
  { type: 'patent', title: "Treatment method of applying active photocatalyst reactor to organism cultivation water", journalOrId: "TW Patent No. I426053", date: "2014" },

  // --- SCI PAPERS (19 Total) ---
  { type: 'paper', title: "Rapid fabrication of three-dimensional gold dendritic nanoforests for visible light-enhanced methanol oxidation", journalOrId: "Electrochimica Acta, 192, 15", date: "2016", authors: "C.-T. Lin, M.-N. Chang, H. J. Huang, C.-H. Chen, R.-J. Sun, B.-H. Liao, Y.-F. Chou Chau, C.-N. Hsiao, M.-H. Shiao*, F.-G. Tseng*" },
  { type: 'paper', title: "Facile preparation of a platinum silicide nanoparticle-modified tip apex for scanning Kelvin probe microscopy", journalOrId: "Nanoscale Research Letters, 10 (1), 401", date: "2015", authors: "C.-T. Lin, Y.-W. Chen, J. Su, C.-T. Wu, C.-N. Hsiao, M.-H. Shiao*, M.-N. Chang*" },
  { type: 'paper', title: "A facile approach to prepare silicon-based Pt-Ag tubular dendritic nano-forests (tDNFs) for solar-light-enhanced methanol oxidation reaction", journalOrId: "Nanoscale Research Letters, 10(1), 74", date: "2015", authors: "C.-T. Lin*, M.-H. Shiao, M.-N. Chang, N. Chu, Y.-W. Chen, Y.-H. Peng, B.-H. Liao, H. J. Huang, C.-N. Hsiao, F.-G. Tseng*" },
  { type: 'paper', title: "Localized Electroless Ag Plating at a Tip apex for Scanning Kelvin Probe Microscopy", journalOrId: "Japanese Journal of Applied Physics, 52, 06GF03", date: "2013", authors: "C.-T. Lin, M.-H. Yu, J. Su, P.-L. Chen, M.-H. Shiao, A. Nemcsics, M.-N. Chang*" },
  { type: 'paper', title: "A simple fabrication process of Pt-TiO2 hybrid electrode for photo-assisted methanol fuel cells", journalOrId: "Microelectronic Engineering, 88, 2644", date: "2011", authors: "C.-T. Lin*, H. J. Huang, J.-J. Yang, M.-H. Shiao" },
  { type: 'paper', title: "Novel gold dendritic nanoflowers deposited on titanium nitride for photoelectrochemical cells", journalOrId: "Journal of Solid State Electrochemistry, vol. 22, 3077", date: "2018", authors: "M.-H. Shiao, C.-T. Lin, H. J. Huang, P.-H. Chen, B.-H. Liao, F.-G. Tseng, Y.-S. Lin*" },
  { type: 'paper', title: "Novel Gold Dendritic Nanoforests Combined with Titanium Nitride for Visible-Light-Enhanced Chemical Degradation", journalOrId: "Nanomaterials 8(5), 282", date: "2018", authors: "M.-H. Shiao, C.-T. Lin, J.-J. Zeng and Y.-S. Lin" },
  { type: 'paper', title: "Simultaneous realization of high sensing sensitivity and tunability in plasmonic nanostructures arrays", journalOrId: "Scientific Reports 7, 16817", date: "2017", authors: "Y.-F. Chou Chau, C.-K. Wang, L. Shen, C. M. Lim, H.-P. Chiang, C.-T. Chou Chao, H. J. Huang, C.-T. Lin, N. T. R. N. Kumara and N. Y. Voo" },
  { type: 'paper', title: "Light Energy Transformation over a Few Nanometers", journalOrId: "Journal of Physics D: Applied Physics, vol. 50, 375601", date: "2017", authors: "H. J. Huang, B.-H. Liu, J. Su, P.-J. Chen, C.-T. Lin, H.-P. Chiang, T. S. Kao, Y.-F. Chou Chau, C.-C. Kei and C.-H. Hwang" },
  { type: 'paper', title: "Plasmonic effects arising from a grooved surface of a gold nanorod", journalOrId: "Journal of Physics D: Applied Physics, vol. 50, 125302", date: "2017", authors: "Y.-F. Chou Chau, C. Lee, H. J. Huang, C.-T. Lin, H.-P. Chiang, A. H. Mahadi, N. Y. Voo and C. M. Lim" },
  { type: 'paper', title: "Plasmonic spectrum on 1D and 2D periodic arrays of rod-shape metal nanoparticle pairs with different core patterns for biosensor and solar cell applications", journalOrId: "Journal of Optics, vol. 18, 115003", date: "2016", authors: "N T R N Kumara, Y.-F. Chou Chau, J.-W. Huang, H. J. Huang, C.-T. Lin, H.-P. Chiang" },
  { type: 'paper', title: "Tailoring surface plasmon resonance and dipole cavity plasmon modes of scattering cross section spectra on the single solid-gold/gold-shell nanorod", journalOrId: "Journal of Applied Physics, vol. 120, 093110", date: "2016", authors: "Y.-F. Chou Chau, C. M. Lim, C. Lee, H. J. Huang, C.-T. Lin, N. T. R. N. Kumara, V. N. Yoong, and H.-P. Chiang" },
  { type: 'paper', title: "Metal nano-particles sizing by thermal annealing for the enhancement of surface plasmon effects in thin-film solar cells application", journalOrId: "Optics Communications, 370, 85", date: "2016", authors: "L.-Z. Hsieh, Y.-F. Chou Chau*, C. M. Lim, M.-H. Lin, H. J. Huang, C.-T. Lin, M. N. M. Idris" },
  { type: 'paper', title: "Plasmonic photocatalytic reactions enhanced by hot electrons in a one-dimensional quantum well", journalOrId: "AIP Advances 5, 117224", date: "2015", authors: "H. J. Huang, B.–H. Liu, C.–T. Lin, W. S. Su" },
  { type: 'paper', title: "Active site of bimetallic heterogeneous catalyst by atomic resolution aberration-corrected STEM", journalOrId: "Applied Surface Science, 354, Part A,129", date: "2015", authors: "C.-N. Hsiao* and C.-T. Lin" },
  { type: 'paper', title: "Fabrication of High-activity Hybrid Pt@ZnO Catalyst on Carbon Cloth by Atomic Layer Deposition for Photo-assisted Electro-oxidation of Methanol", journalOrId: "Journal of Physical Chemistry C , 117, 11610", date: "2013", authors: "C.-Y. Su, Y.-C. Hsueh, C.-C. Kei, C.-T. Lin, and T.-P. Perng*" },
  { type: 'paper', title: "PMMA nanocolumn array fabricated by catalytic etching and nanomolding technique", journalOrId: "Microelectronic Engineering, 88, 2576", date: "2011", authors: "M.-J. Huang, C.-R. Yang, C.-M. Chang, C.-T. Lin, Y.-H. Tang, M.-H. Shiao, Y.-C. Chiou, R.-T. Lee" },
  { type: 'paper', title: "Highly efficient CO2 bubble removal on carbon nanotube supported nanocatalysts for direct methanol fuel cell", journalOrId: "Journal of Power Sources 195, 1640", date: "2010", authors: "S.-L. Chen, C.-T. Lin, C.-C. Chieng, f-G. Tseng*" },
  { type: 'paper', title: "Growth and detachment of chemical reaction-generated micro-bubbles on micro-textured catalyst", journalOrId: "Microfluidics and Nanofluidics 7, 807", date: "2009", authors: "S.-L. Chen, C.-T. Lin, C. Pan, C.-C. Chieng, F.-G. Tseng*" }
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