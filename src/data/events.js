const events = [
  {
    id: 1,
    title: "OSCode CIT Inauguration",
    date: "01 Oct 2025",
    location: "SMV Block Auditorium, OSCode CIT, Bengaluru, Karnataka",
    images: ["/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-1.webp",
      "/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-2.webp",
      "/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-3.webp",
      "/images/events/oscodecit-inauguration-2025/oscodecit-inauguration-2025-4.webp",
    ],
    description:
      "The event marked the formal inauguration of OSCode CIT, a student club established to promote open-source development and technical learning among students. The inauguration introduced the club to the student community, outlining its objectives, planned activities, and its focus on fostering a culture of collaborative and open-source-driven technical growth.",
  },
  {
    id: 2,
    title: "GIT and GITHUB Session",
    date: "30 Oct 2025",
    location: "Online Event",
    images: ["/images/events/github-session-2025/github-session-2025-1.webp"
    ],
    description:
      "An online educational session focused on Git and GitHub, two of the most widely used tools in modern software development. The session introduced participants to the fundamentals of version control, repository management, and the core workflows used by developers to track and manage changes in code. Students of OSCode CIT attended the online session to build a foundational understanding of Git and GitHub.",
  },
  {
    id: 3,
    title: "Bengaluru Tech Summit",
    date: "20 Nov 2025",
    location: "Bangalore International Exhibition Centre (BIEC)",
    images: ["/images/events/bengaluru-tech-summit-2025/bts25-1.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-2.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-3.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-4.webp",
      "/images/events/bengaluru-tech-summit-2025/bts25-5.webp",
    ],
    description:
      "Merging innovation with investment, featuring multi-track conferences, startup pitch sessions, and global exhibition pavilions.",
  },
  {
    id: 4,
    title: "GSoC Roadmap",
    date: "20 Nov 2025",
    location: "CIT Bangalore, SMV Auditorium",
    images: ["/images/events/gsoc-roadmap-2026/GSOC.jpg",
      "/images/events/gsoc-roadmap-2026/gsoc-1.webp",
      "/images/events/gsoc-roadmap-2026/gsoc-2.webp",],
    description:
      "OSCode CIT presents: Your Path to GSoC 2026. Get clarity on preparation, open source contributions, and cracking GSoC 💡",
  },
  {
    id: 5,
    title: "Microsoft TechSync: OSCode × GitHub Education",
    date: "31 Jan 2026",
    location: "Microsoft Research Office, Ashok Nagar, Bengaluru",
    images: [
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-1.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-2.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-3.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-4.webp",
      "/images/events/microsoft-techsync-2026/microsoft-techsync-2026-5.webp",
    ],
    description:
      "TechSync was an event associated with Microsoft and OSCode, providing participants with exposure to technology, innovation, and industry-oriented ideas. Students of OSCode CIT participated in the TechSync event and received recognition for Best Lab Idea.",
  },
  {
    id: 6,
    title: "IISc Open Day 2026",
    date: "7 March 2026",
    location: "IISc Bengaluru",
    images: [
      "/images/events/iisc-open-day-2026/iisc26-1.webp",
      "/images/events/iisc-open-day-2026/iisc26-2.webp",
      "/images/events/iisc-open-day-2026/iisc26-3.webp",
      "/images/events/iisc-open-day-2026/iisc26-4.webp",
      "/images/events/iisc-open-day-2026/iisc26-5.webp",
      "/images/events/iisc-open-day-2026/iisc26-6.webp",
    ],
    description:
      "This major campus-wide event opened the institute's gates to students, science enthusiasts, and the general public to showcase its cutting-edge research, facilities, and innovations.",
  },
  {
    id: 7,
    title: "Build Your First Drone Workshop",
    date: "26 March 2026",
    location: "NMIT, BSF Campus, Yelahanka",
    images: [
      "/images/events/first-drone-workshop-2026/drone-workshop-1.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-2.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-3.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-4.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-5.webp",
      "/images/events/first-drone-workshop-2026/drone-workshop-6.webp",
    ],
    description:
      "A complete hands-on experience covering the core of drone technology from understanding components and assembling the system to simulation, calibration and achieving stable flight",
  },
  {
    id: 8,
    title: "James Dyson Session",
    date: "26 April 2026",
    location: "Online Event",
    images: [
      "/images/events/james-dyson-2026/james-dyson-2026-1.webp",
      "/images/events/james-dyson-2026/james-dyson-2026-2.webp",
    ],
    description:
      "An online, educational and innovation-focused session that gave students exposure to engineering, design thinking, and the process of translating ideas into practical solutions for real-world problems.",
  },
  {
    id: 9,
    title: "DEF-TECH Bharat 2026",
    date: "22 May 2026",
    location: "KTPO, Whitefield",
    images: [
      "/images/events/deftech-2026/deftech26-1.webp",
      "/images/events/deftech-2026/deftech26-2.webp",
      "/images/events/deftech-2026/deftech26-3.webp",
      "/images/events/deftech-2026/deftech26-4.webp",
      "/images/events/deftech-2026/deftech26-5.webp",
      "/images/events/deftech-2026/deftech26-6.webp",
      "/images/events/deftech-2026/deftech26-7.webp",
      "/images/events/deftech-2026/deftech26-8.webp",
    ],
    description:
      "Cutting-edge defense research, development, system integration, and advanced manufacturing across air, land, sea, and space domains.",
  },

];

export default events;