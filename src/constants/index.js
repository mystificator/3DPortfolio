export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Outouring - Portal for collaborative tourism',
    desc: 'A rate and review website built using Node.js and Express.js which allows users to sign-in and rate their place of interest. Website also features an interactive map which further improves the user experience.',
    subdesc:
      'The inspiration behind Outouring stemmed from my love for hiking during the monsoon season. My friends and I often relied on recommendations from local residents to discover the best spots. This sparked the idea of creating a platform where people can submit their favorite locations and others can review and rate them.',
    href: 'https://outouring.onrender.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    alt: "<a href='https://pngtree.com/freepng/cartoon-hand-painted-cartoon-backpack-hand-painted-backpack_3896897.html'>png image from pngtree.com/</a>",
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: 'assets/expressjs.png',
      },
      {
        id: 3,
        name: 'Bootstrap',
        path: '/assets/bootstrap.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'TKB',
    desc: "TKB is a freelance project where I created a website for a restaurant. The objective was to develop a simple and user-friendly landing page that effectively showcased the restaurant's offerings. The website offers several key functionalities to enhance the user experience. Users can easily view the restaurant's menu card, or explore the gallery section that seamlessly connects to the restaurant's Instagram profile, providing a visual representation of their culinary creations and ambience.",
    subdesc:
      'Fully responsive landing page for a restaurant built using React.js',
    href: 'https://mystificator.github.io/Tomars-Kitchen-Biryani/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    alt: "<a href='https://pngtree.com/freepng/restaurant-logo_8330101.html'>png image from pngtree.com/</a>",
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Javascript',
        path: 'assets/javascript.png',
      },
      {
        id: 3,
        name: 'Material UI',
        path: '/assets/materialui.png',
      }
    ],
  },
  // {
  //   title: 'LiveDoc - Real-Time Google Docs Clone',
  //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
  //   subdesc:
  //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
  //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
  //   texture: '/textures/project/project2.mp4',
  //   logo: '/assets/project-logo2.png',
  //   logoStyle: {
  //     backgroundColor: '#13202F',
  //     border: '0.2px solid #17293E',
  //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
  //   },
  //   spotlight: '/assets/spotlight2.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];