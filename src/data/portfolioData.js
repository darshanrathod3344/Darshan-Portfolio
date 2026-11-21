// Portfolio Data Configuration for Darshan Rathod
// Unity Developer | 2D, 3D & VR Applications

export const portfolioData = {
  personal: {
    firstName: 'Darshan',
    lastName: 'Rathod',
    fullName: 'Darshan Rathod',
    roleTag: 'Unity 3D & VR Developer',
    availabilityBadge: 'Available for Unity & VR Roles',
    heroTitlePrefix: 'Engineering Immersive',
    heroTitleHighlight: 'VR Experiences & 2D/3D Solutions',
    heroSubtitle:
      'Unity Developer with 4+ years of experience at Moxmind Games building Virtual Reality (VR) applications, synchronized multiscreen setups, and high-performance 2D/3D apps for Oculus Quest, PICO, Android, and Windows.',
    location: 'Rajkot, Gujarat, India',
    email: 'darshan.live0205@gmail.com',
    roleAvailability: 'Unity 3D & VR Developer',
    company: 'Moxmind Games',
    resumeUrl: './Darshan_Rathod_CV.docx',
    featuredProject: {
      title: 'Tool Spin VR – Puzzle Park',
      category: 'Featured VR Experience',
      image: './projects/tool-spin-vr.jpg',
    },
    heroChips: ['Oculus Quest', 'PICO SDK', 'XR Toolkit', 'Multiscreen Sync'],
    languages: ['Gujarati', 'English', 'Hindi'],
  },

  socials: {
    linkedin: 'https://www.linkedin.com/in/darshan-rathod-856a6b1aa',
    email: 'mailto:darshan.live0205@gmail.com',
  },

  heroStats: [
    { value: '4+ Years', label: 'Unity & VR Experience' },
    { value: '7+ Projects', label: 'VR & Multiscreen Apps' },
    { value: '100+ Levels', label: 'VR Puzzle Park Built' },
  ],

  about: {
    tag: 'Professional Overview',
    titlePrefix: 'Immersive',
    titleHighlight: 'VR & Interactive Development',
    subtitle:
      'Delivering smooth, intuitive, and high-performance Virtual Reality apps, multiscreen setups, and 2D/3D simulations.',
    paragraphs: [
      {
        text: "Hello! I'm ",
        strong1: 'Darshan Rathod',
        mid: ', a dedicated ',
        strong2: 'Unity Developer',
        rest: ' with 4+ years of hands-on experience building Virtual Reality (VR) applications, multiscreen installations, and interactive 2D/3D experiences at ',
        strong3: 'Moxmind Games',
        end: ' in Rajkot, India.',
      },
      {
        text: 'I have engineered diverse production projects ranging from physics-driven VR games like ',
        strong1: 'Tool Spin VR – Puzzle Park',
        mid: ' and hand-tracked cultural experiences like ',
        strong2: 'Vadya Sangeet VR',
        rest: ', to dual-screen interactive installations such as ',
        strong3: 'Mars Terraforming',
        end: ', Make Your Planet, TopsoeVR Safety Training, Chemistry Atom Structure VR, and KEC Virtual Tour.',
      },
      {
        text: 'My core strength lies in clean ',
        strong1: 'C# architecture',
        mid: ', ',
        strong2: 'XR Interaction Toolkit',
        rest: ', responsive 2D Canvas & 3D world-space VR menus, multiscreen synchronization, and seamless integration of SDKs like ',
        strong3: 'AVPro Video, PICO SDK, Upano, DOTween, and Photon PUN',
        end: '.',
      },
    ],
    pillars: [
      {
        icon: 'Glasses',
        title: 'VR & XR Engineering',
        description:
          'XR Interaction Toolkit, VR hand tracking, locomotion, teleportation, Oculus Quest & PICO SDK.',
      },
      {
        icon: 'MonitorSmartphone',
        title: 'Multiscreen & Shaders',
        description:
          'Synchronized dual and multi-display Unity setups with touch interfaces and custom real-time shaders.',
      },
      {
        icon: 'Boxes',
        title: '2D/3D UI & Physics',
        description:
          'Canvas & 3D world-space VR menus, physics-based gameplay, DOTween animations, and Scriptable Objects.',
      },
      {
        icon: 'Network',
        title: 'Multiplayer & SDKs',
        description:
          'Photon PUN multiplayer features plus AVPro Video, Upano 360° hotspots, and cross-platform tuning.',
      },
    ],
  },

  skillCategories: [
    {
      title: 'Unity Engine & Core Tech',
      icon: 'Code2',
      skills: [
        { name: 'Unity 3D & 2D Engine', level: 95 },
        { name: 'C# Scripting & Architecture', level: 94 },
        { name: 'Unity UI (Canvas & World-Space)', level: 92 },
      ],
      badges: ['Scriptable Objects', 'Animation', 'Particle Systems', 'DOTween'],
    },
    {
      title: 'VR & XR Development',
      icon: 'Glasses',
      skills: [
        { name: 'XR Interaction Toolkit', level: 95 },
        { name: 'VR Hand Tracking & Physics', level: 92 },
        { name: 'Oculus Quest & PICO SDK', level: 92 },
      ],
      badges: ['Teleportation', 'Object Grabbing', 'Climbing Mechanics', 'VR Optimization'],
    },
    {
      title: 'Multiscreen, Network & SDKs',
      icon: 'Network',
      skills: [
        { name: 'Multiscreen Display Sync', level: 90 },
        { name: 'AVPro Video & Upano 360°', level: 90 },
        { name: 'Photon PUN Multiplayer', level: 85 },
      ],
      badges: ['Windows & Android', 'Git & GitHub', 'Plastic SCM', 'Performance Tuning'],
    },
  ],

  experience: [
    {
      role: 'Unity Developer',
      company: 'Moxmind Games · Rajkot, Gujarat, India',
      period: 'May 2022 – Present (4+ Years · Current Role)',
      bullets: [
        'Worked as a Unity Developer for 4+ years, building Virtual Reality (VR) applications, interactive simulations, and multiscreen setups.',
        'Built 2D (Canvas-based) and 3D world-space UI, including VR-friendly menus and custom interaction systems.',
        'Developed immersive VR experiences using XR Interaction Toolkit, supporting both controller and natural hand-tracking input across Oculus Quest and PICO headsets.',
        'Engineered and managed multiscreen Unity setups, keeping real-time visual content synchronized across multiple displays and screen resolutions.',
        'Created smooth animations, particle effects, and interactions optimized across VR headsets, mobile devices, touch screens, and Windows.',
        'Integrated third-party SDKs and plugins including AVPro Video, PICO SDK, Upano 360° plugin, DOTween, and multiplayer networking via Photon PUN.',
      ],
    },
  ],

  projectFilters: [
    { id: 'all', label: 'All Projects' },
    { id: 'vr-game', label: 'VR Games & Music' },
    { id: 'multiscreen', label: 'Multiscreen & Sim' },
    { id: 'training', label: 'Training, Edu & Tour' },
  ],

  projects: [
    {
      id: 'tool-spin-vr',
      filter: 'vr-game',
      category: 'VR Puzzle & Arcade Game',
      title: 'Tool Spin VR – Puzzle Park',
      stat: '100+ Levels',
      image: './projects/tool-spin-vr.jpg',
      shortDesc:
        'Immersive VR puzzle game with physics-based gameplay, simple one-tap controls, 100+ dynamic levels, coin rewards, and VR amusement-park rides.',
      fullDesc:
        'An engaging Virtual Reality puzzle experience designed around intuitive one-tap physics mechanics. Players progress through over 100 handcrafted stages packed with dynamic obstacles, precision timing challenges, coin reward unlocks, and thrilling VR amusement-park-style rides.',
      tags: ['Unity 3D', 'XR Toolkit', 'VR Physics'],
      highlights: [
        'Built physics-based VR puzzle gameplay with effortless one-tap controls',
        'Designed and implemented 100+ progressive levels with dynamic obstacles and precision mechanics',
        'Added coin reward economy, level unlocking flow, and VR amusement-park rides for high player engagement',
        'Optimized draw calls and frame pacing for comfortable standalone VR headset play',
      ],
    },
    {
      id: 'mars-terraforming',
      filter: 'multiscreen',
      category: 'Dual-Screen Interactive Simulation',
      title: 'Mars Terraforming',
      stat: 'Dual-Screen Sync',
      image: './projects/mars-terraforming.jpg',
      shortDesc:
        'Dual-screen interactive Mars terraforming simulation in Unity with custom shader effects and a touch interface synced live to a projected Mars globe.',
      fullDesc:
        'An interactive museum-grade dual-screen installation built in Unity. Users adjust planetary atmosphere, temperature, and biosphere parameters on a touch control station while watching real-time custom shader transformations synchronize live across a projected Mars globe.',
      tags: ['Multiscreen Sync', 'Custom Shaders', 'Touch UI'],
      highlights: [
        'Built a synchronized dual-screen Unity architecture driving touch UI and projected globe displays in real time',
        'Created custom shader effects visualizing live atmospheric, water, and vegetation shifts on Mars',
        'Implemented interactive game mechanics including parameter balancing, hints, quick resets, and result visuals',
        'Engineered reliable continuous-run stability for exhibition and public interactive setups',
      ],
    },
    {
      id: 'make-your-planet',
      filter: 'multiscreen',
      category: 'Dual-Screen Educational Experience',
      title: 'Make Your Planet',
      stat: 'Live Shaders',
      image: './projects/make-your-planet.jpg',
      shortDesc:
        'Dual-screen educational planet-design experience with interactive touch sliders, real-time shader visual feedback, and habitability outcome animations.',
      fullDesc:
        'A hands-on dual-screen educational experience letting learners design their own custom planet. Interactive sliders dynamically reshape surface and atmospheric properties through real-time shaders, validating planetary habitability with responsive success and failure feedback animations.',
      tags: ['Unity 3D', 'Shaders', 'Touch Controls'],
      highlights: [
        'Built a dual-screen educational planet builder in Unity with approachable touch controls',
        'Developed responsive interactive sliders tied directly to real-time shader-based surface and sky visuals',
        'Implemented habitability rule engine with clear success and failure feedback animations',
        'Tuned UI readability and tactile feedback for multi-user educational environments',
      ],
    },
    {
      id: 'topsoe-vr',
      filter: 'training',
      category: 'Enterprise VR & Windows Training',
      title: 'TopsoeVR – Safety Training',
      stat: '5 VR Modules',
      image: './projects/topsoe-vr.jpg',
      shortDesc:
        'Full industrial site safety training application for VR & Windows featuring 5 interactive modules, hazard detection, highlighting, teleportation, and climbing.',
      fullDesc:
        'A comprehensive industrial safety training simulator deployed on both VR headsets and Windows desktops. Comprises 5 scenario-based training modules where trainees inspect industrial environments, identify safety hazards, climb structures, and follow guided safety protocols.',
      tags: ['Oculus Quest', 'XR Toolkit', 'Windows'],
      highlights: [
        'Engineered 5 complete interactive industrial site safety training modules for VR and Windows',
        'Implemented core XR interactions: hazard detection, interactive object highlighting, teleportation, and climbing mechanics',
        'Built scenario-based workflows guiding trainees to spot hazards and execute proper safety procedures',
        'Designed intuitive 3D world-space inspection checklists and responsive feedback systems',
      ],
    },
    {
      id: 'chemistry-atom-vr',
      filter: 'training',
      category: 'Educational VR Science App',
      title: 'Chemistry Atom Structure VR',
      stat: '3D Atom Lab',
      image: './projects/chemistry-atom-vr.jpg',
      shortDesc:
        'Immersive VR chemistry app for exploring atomic structures with grab-based element selection, 3D proton/neutron/electron inspection, and Scriptable Objects.',
      fullDesc:
        'An interactive Virtual Reality chemistry laboratory built to help students visualize atomic theory in 3D space. Learners grab and select chemical elements to inspect orbiting electrons, protons, and neutrons up close, backed by clean Scriptable Object data architecture.',
      tags: ['Unity VR', 'Scriptable Objects', 'Grab Mechanics'],
      highlights: [
        'Designed grab-based VR element selection to explore 3D atomic models interactively',
        'Visualized proton, neutron, and electron shell details clearly inside immersive 3D space',
        'Added smooth teleportation locomotion for comfortable movement across the virtual lab',
        'Structured element datasets using Unity Scriptable Objects for clean, scalable data management',
      ],
    },
    {
      id: 'vadya-sangeet-vr',
      filter: 'vr-game',
      category: 'VR Music & Hand Tracking',
      title: 'Vadya Sangeet VR Application',
      stat: '7 Instruments',
      image: './projects/vadya-sangeet-vr.jpg',
      shortDesc:
        'Immersive VR music application showcasing 7 traditional Indian classical instruments with natural VR hand tracking and realistic physics-based audio interaction.',
      fullDesc:
        'A cultural Virtual Reality music experience celebrating traditional Indian classical instruments. Powered by VR hand tracking and realistic physics collision response, users naturally hold, strike, and pluck 7 authentic instruments with real-world playing techniques and sound fidelity.',
      tags: ['VR Hand Tracking', 'Physics Audio', 'Unity 3D'],
      highlights: [
        'Integrated natural VR hand tracking allowing users to hold and play 7 traditional Indian classical instruments',
        'Built realistic physics-driven strike and pluck detection mimicking authentic playing techniques',
        'Synchronized responsive acoustic sound systems with hand velocity and contact points',
        'Crafted an atmospheric, culturally rich virtual concert environment optimized for VR headsets',
      ],
    },
    {
      id: 'kec-virtual-tour',
      filter: 'training',
      category: '360° VR Campus Tour',
      title: 'KEC Virtual Tour',
      stat: '360° Hotspots',
      image: './projects/kec-virtual-tour.jpg',
      shortDesc:
        'Immersive VR campus tour application powered by the Upano plugin for smooth 360° hotspot transitions, interactive maps, and simple controller navigation.',
      fullDesc:
        'An intuitive 360-degree Virtual Reality campus tour designed for effortless exploration across campus locations. Built using the Upano plugin, it provides crisp panoramic transitions, interactive mini-maps, informative location hotspots, and accessible VR controller navigation.',
      tags: ['Upano Plugin', '360° VR', 'Interactive Maps'],
      highlights: [
        'Integrated the Upano plugin for seamless 360° panoramic scenes and interactive VR hotspots',
        'Built smooth controller-based point-and-select navigation suitable for first-time VR visitors',
        'Designed interactive campus maps and detailed location info views linked directly to hotspots',
        'Optimized panoramic media streaming for fast transitions and crisp visual clarity',
      ],
    },
  ],

  education: [
    {
      tag: "Bachelor's Degree",
      degree: 'B.E. in Computer Engineering',
      institution: 'Darshan Institute of Engineering and Technology, Rajkot, India',
      status: 'Graduated · Computer Engineering',
      description:
        'Bachelor of Engineering degree covering software engineering, object-oriented programming, data structures, algorithms, and interactive computer graphics.',
    },
    {
      tag: 'Higher Secondary',
      degree: 'Higher Secondary Education (HSC)',
      institution: 'Shree Shubham Higher Secondary School, Rajkot, India',
      status: 'Completed · Science Stream',
      description:
        'Completed Higher Secondary schooling with focus on Mathematics, Physics, and foundational Computer Science principles.',
    },
    {
      tag: 'Secondary School',
      degree: 'Secondary Education (SSC)',
      institution: 'Shree Shubham School, Rajkot, India',
      status: 'Completed · Secondary Certificate',
      description:
        'Completed Secondary School Certificate curriculum building strong analytical, mathematical, and problem-solving foundations.',
    },
  ],
};
