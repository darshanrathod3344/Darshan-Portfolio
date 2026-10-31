// Portfolio Data configuration
// Edit this file to customize all personal details, projects, skills, and links!

export const portfolioData = {
  // Personal & Brand Info
  personal: {
    name: "Vivek Kumar",
    nickname: "Vivek",
    role: "Full Stack Web Developer",
    tagline: "Building sleek, responsive, and performance-driven web applications.",
    bio: "I'm a passionate developer focused on crafting beautiful user experiences and resilient web backends. I love turning complex ideas into intuitive, scalable software using modern technologies.",
    status: "Available for new projects & full-time roles",
    location: "India",
    email: "vivek.dev@example.com", // Replace with your real email
    phone: "+91 98765 43210",       // Optional: Replace or remove
    resumeUrl: "#",                 // Link to your resume PDF or Google Drive link
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", // Can be replaced with your photo
  },

  // Social Profiles
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    email: "mailto:vivek.dev@example.com",
  },

  // Key stats shown in Hero and About sections
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "GitHub Repositories", value: "25+" },
    { label: "Happy Clients & Collabs", value: "10+" },
  ],

  // About Me Section Highlights
  about: {
    heading: "Passionate About Building Products That Make An Impact",
    paragraphs: [
      "Hello! I'm a developer who enjoys solving real-world challenges through clean, maintainable code. With an eye for design and a solid foundation in frontend and backend technologies, I bridge the gap between creative visual designs and powerful technical architectures.",
      "When I'm not writing code or debugging, you can find me exploring open-source projects, learning emerging tech stacks, or tinkering with new design ideas.",
    ],
    highlights: [
      {
        title: "Clean & Maintainable Code",
        description: "Writing scalable, readable, and well-structured code adhering to industry best practices.",
        icon: "Code2",
      },
      {
        title: "Responsive & Modern UI",
        description: "Crafting fluid, accessible layouts that look pixel-perfect on any device or screen size.",
        icon: "Layout",
      },
      {
        title: "High Performance",
        description: "Optimizing web applications for blazing speed, SEO friendliness, and smooth animations.",
        icon: "Zap",
      },
      {
        title: "Collaborative Team Player",
        description: "Communicating effectively with cross-functional teams, Git workflows, and agile delivery.",
        icon: "Users",
      },
    ],
  },

  // Skills & Technologies
  skills: [
    // Frontend
    { name: "React.js", category: "Frontend", level: 90, icon: "Atom" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 92, icon: "FileCode" },
    { name: "HTML5 / CSS3", category: "Frontend", level: 95, icon: "Palette" },
    { name: "Tailwind CSS", category: "Frontend", level: 90, icon: "Sparkles" },
    { name: "TypeScript", category: "Frontend", level: 75, icon: "Code" },
    { name: "Next.js", category: "Frontend", level: 80, icon: "Globe" },

    // Backend
    { name: "Node.js", category: "Backend", level: 85, icon: "Server" },
    { name: "Express.js", category: "Backend", level: 85, icon: "Cpu" },
    { name: "REST APIs", category: "Backend", level: 88, icon: "Network" },
    { name: "MongoDB", category: "Backend", level: 80, icon: "Database" },
    { name: "PostgreSQL", category: "Backend", level: 72, icon: "Database" },

    // Tools & Cloud
    { name: "Git & GitHub", category: "Tools", level: 90, icon: "GitBranch" },
    { name: "Vite", category: "Tools", level: 90, icon: "Flame" },
    { name: "VS Code", category: "Tools", level: 95, icon: "Terminal" },
    { name: "Postman", category: "Tools", level: 85, icon: "Send" },
    { name: "Vercel / Netlify", category: "Tools", level: 88, icon: "Cloud" },
    { name: "Docker Basics", category: "Tools", level: 65, icon: "Box" },
  ],

  // Featured Projects
  projects: [
    {
      id: "project-1",
      title: "DevSpace - Developer Community Platform",
      description: "A full-stack collaborative social platform for developers to share articles, discuss coding challenges, and showcase open-source projects.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://example.com/demo1",
      repoUrl: "https://github.com/",
      featured: true,
      stats: "500+ Active Users",
    },
    {
      id: "project-2",
      title: "ShopWave - Modern E-Commerce Store",
      description: "A lightning-fast e-commerce shopping experience featuring instant search, product filtering, dynamic cart management, and seamless checkout flow.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Frontend",
      tags: ["React", "Tailwind CSS", "Redux Toolkit", "Stripe API"],
      demoUrl: "https://example.com/demo2",
      repoUrl: "https://github.com/",
      featured: true,
      stats: "99+ Lighthouse Score",
    },
    {
      id: "project-3",
      title: "TaskFlow - Real-time Project Management",
      description: "An interactive Kanban board with drag-and-drop task cards, sprint tracking, priority tags, and automated progress analytics.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      tags: ["React", "Firebase", "Tailwind CSS", "Lucide Icons"],
      demoUrl: "https://example.com/demo3",
      repoUrl: "https://github.com/",
      featured: true,
      stats: "Realtime Sync",
    },
    {
      id: "project-4",
      title: "WeatherLens - Global Forecast Dashboard",
      description: "A clean, minimalist weather app displaying 7-day hourly forecasts, interactive radar maps, and location-based air quality metrics.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
      category: "Frontend",
      tags: ["React", "OpenWeather API", "CSS Grid", "Chart.js"],
      demoUrl: "https://example.com/demo4",
      repoUrl: "https://github.com/",
      featured: false,
      stats: "Global Coverage",
    },
    {
      id: "project-5",
      title: "CryptPulse - Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency price tracker with live market charts, watchlist bookmarking, and portfolio profit/loss calculations.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
      category: "Frontend",
      tags: ["React", "CoinGecko API", "Tailwind CSS", "Vite"],
      demoUrl: "https://example.com/demo5",
      repoUrl: "https://github.com/",
      featured: false,
      stats: "Live WebSockets",
    },
    {
      id: "project-6",
      title: "RestAPI Gateway & Auth Service",
      description: "A robust JWT authentication microservice with role-based access control, rate limiting, and automated Swagger API documentation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      category: "Backend",
      tags: ["Node.js", "Express", "JWT", "PostgreSQL", "Docker"],
      demoUrl: "https://example.com/demo6",
      repoUrl: "https://github.com/",
      featured: false,
      stats: "100% Test Coverage",
    },
  ],

  // Career & Education Timeline
  timeline: [
    {
      type: "work",
      title: "Full Stack Developer",
      organization: "Freelance & Open Source",
      period: "2024 - Present",
      location: "Remote",
      description: "Designing and developing bespoke web applications for international clients, focusing on responsive frontend interfaces and reliable backend services.",
      skills: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    },
    {
      type: "work",
      title: "Frontend Developer Intern",
      organization: "Tech Innovators Lab",
      period: "2023 - 2024",
      location: "Hybrid",
      description: "Collaborated with senior engineers to implement interactive UI dashboards, improved website load speed by 35%, and wrote modular React components.",
      skills: ["React", "JavaScript", "REST APIs", "Git"],
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      organization: "University Institute of Technology",
      period: "2020 - 2024",
      location: "India",
      description: "Graduated with honors. Key coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, and Software Engineering.",
      skills: ["DSA", "DBMS", "Software Engineering"],
    },
  ],
};
