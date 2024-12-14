export const navLinks = [
  {
    id: 1,
    name: 'About',
    href: '#about',
    target: ""
  },
  {
    id: 2,
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1x1ABZKuN7_UnZADeFYtdOlsvPdLoEjy2/view?usp=sharing',
    target: "_blank"
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
    target: ""
  },
  {
    id: 4,
    name: 'Experience',
    href: '#work',
    target: ""
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
    target: ""
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
    title: 'Dream-AI',
    desc: "A full stack app using OpenAI's DALL·E API to generate images from text, allowing users to share, view, and download creations in a community.",
    subdesc:
      "The app is a MERN stack project that integrates OpenAI's DALL·E API to generate images from user-provided text descriptions. Users can share their generated images with a community, where others can browse, view, and download the shared creations. It combines creative AI capabilities with social sharing features for an engaging user experience.",
    href: 'https://dream-ai-umber.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    alt: "a dreamy moon and a star",
    logoStyle: {
      backgroundColor: '#a476ff',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight5.png',
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
        name: 'React.js',
        path: '/assets/react.svg',
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
  }
];

export const workExperiences = [
  {
    id: 1,
    name: 'Metafic',
    pos: 'Software Engineer',
    duration: 'Jan 2024 - Present',
    title: "I worked extensively with the backend team, focusing on Ruby on Rails development. My responsibilities included building and optimizing server-side logic, integrating third-party APIs, and ensuring code quality by following clean code principles.",
    icon: '/assets/metafic.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'HaTa Bevtech',
    pos: 'Web Development Intern',
    duration: 'April 2023 - June 2023',
    title: "I focused on optimizing website responsiveness using CSS, and I used Google Apps Script to develop an automation solution for pdf generation. I helped in enhancing user experience through data-driven improvements using Google Analytics, resulting in increased user engagement and conversion rates.",
    icon: '/assets/hatabevtech.png',
    animation: 'clapping',
  }
];