import project1 from "../assets/projects/zestora.png"
import project4 from "../assets/projects/airbnc.png"
import project5 from "../assets/projects/saranFarm.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like Reactjs TailwindCSS, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React,NextJs, Node.js, Postgresql, MySQL,and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 - May 2026",
    role: "Frontend Developer",
    company: "Radiansys (Client: Simpplr)",
    description: `Building scalable enterprise features across communication and HR service desk platforms for large B2B customers. Developing responsive UI with React 18, TypeScript, and REST APIs integrated via React Query for optimized data handling. Working with micro-frontend architecture using Webpack Module Federation and feature flag systems. Implemented cache invalidation and optimistic UI updates with React Query mutations. Integrated WebSocket-based real-time workflows for AI streaming updates, status synchronization, and low-latency interactions.`,
    technologies: [
      "React 18",
      "TypeScript",
      "React Query",
      "Module Federation",
      "WebSockets",
      "AG Grid",
    ],
  },
  {
    year: "Feb 2024 - July 2024",
    role: "Full Stack Intern",
    company: "SGRS Academic Private Limited",
    description: `Developed reusable components using React.js and optimized backend SQL queries to improve performance. Improved page load time and enhanced overall UI performance and SEO.`,
    technologies: ["JavaScript", "React.js", "SQL", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Comms Planner & Comms AI",
    company: "Simpplr",
    period: "July 2025 - Present",
    description:
      "AI-powered campaign planner with chat and canvas UI for multi-channel publishing workflows. Built an advanced scheduling system with drag-and-drop calendar and dynamic table views using FullCalendar and TanStack Table. Integrated WebSocket streaming for real-time AI responses with reconnect handling and connection status monitoring. Managed complex server-state with React Query—caching, invalidation, optimistic updates, and background refetching. Developed file upload and attachment flows with template-based content generation and validation.",
    technologies: [
      "React",
      "React Query",
      "TanStack Table",
      "FullCalendar",
      "WebSockets",
      "TypeScript",
    ],
  },
  {
    title: "HR Service Desk",
    company: "Simpplr",
    period: "Nov 2024 - July 2025",
    description:
      "Micro-frontend employee portal built with Webpack Module Federation for scalable, independent deployments. Delivered enterprise-grade data tables with AG Grid—sorting, filtering, pagination, and dynamic rendering. Implemented permission-based routing and feature flag integrations for controlled rollouts and access management. Integrated REST APIs and optimized async data handling for improved responsiveness.",
    technologies: [
      "React 18",
      "TypeScript",
      "Module Federation",
      "AG Grid",
      "React Query",
    ],
  },
];

export const MINOR_PROJECTS = [
  {
    title: "Saran Farm",
    image: project5,
    description:
      "Agrotourism platform built with Next.js that connects visitors with local farms. Users can browse listed farms, view details and galleries, book farm visits, explore events, and submit agrotourism suggestions. Farmers can register farms and events through dedicated flows, with forms powered by React Hook Form and data stored in Supabase.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS", "MUI"],
    link:"https://indianfarm.vercel.app/"
  },
  {
    title: "Zestora Website",
    image: project1,
    description:
      "Swiggy-inspired food delivery web app built with React and TypeScript. Browse and search restaurants, filter listings, view menus, manage a Redux-powered cart, and sign in with Firebase Auth. Includes shimmer loading states, protected routes, Instamart-style grocery browsing, and a responsive layout styled with Tailwind CSS.",
    technologies: ["React", "TypeScript", "Redux", "React Query", "Firebase", "Tailwind CSS"],
    link:"https://food-villa-nine.vercel.app/"
  },
  {
    title: "AirBnc",
    image: project4,
    description:
      "Airbnb-style property rental UI built with React and Vite. Explore listings by category, open listing detail pages with image galleries, search stays, manage wishlists and trips, and navigate hosting, booking, and account flows. Responsive design with Tailwind CSS and Material UI components.",
    technologies: ["React", "Vite", "React Router", "Tailwind CSS", "MUI"],
    link:"https://air-bnb-app-nu.vercel.app/"
  },
];

export const CONTACT = {
  address: `Shyamnagar,
  Kolkata, West Bengal,
  India`,
  phoneNo: "+91-7059219618",
  email: "uddeshy.mca21.du@gmail.com"
};

