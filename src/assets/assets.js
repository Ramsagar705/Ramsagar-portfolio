import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';


import profileImg from '../assets/profile1.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Problem Solver',
      description: 'I enjoy solving real-world problems by building practical and scalable web applications.'
    },
    {
      icon: FaPaintBrush,
      title: 'Full-Stack Development',
      description: 'Building modern web applications using the MERN stack from frontend to backend.'
    },
    {
      icon: FaCode,
      title: 'Clean & Scalable Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML5', 'CSS3', 'Javascript(ES6+)','Ract.js','Tailwind CSS', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT Authentication','Middleware', 'bcrypt.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'Mongoose', 'MongoDB Atlas']
  },
  
  {
    title: 'Deployment & Cloud',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Render', 'Vercel', 'Netlify', 'Cloudinary']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS code ', 'Postman', 'npm','Vite']
  },
  {
    title: 'AI and Integrations',
    icon: FaRobot,
    description: 'Building AI-powered applications by integrating language models and third-party services.',
    tags: ['Google Gemini API', 'OpenRouter API', 'Nodemailer', 'Razorpay']
  }
];



export const projects = [
  {
  title: "Kanhaiya Mobile E-Commerce",
  description: "Developed and deployed a live e-commerce website for a real mobile retail business as a paid client project, featuring new and second-hand smartphones, product search and filtering, admin product management, Cloudinary image uploads, phone booking, delivery tracking, and Razorpay integration in testing mode.",
  image: projectImg1,
  tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Cloudinary", "Razorpay"],
  icons: [FaReact, FaNodeJs, FaDatabase],
  demo: "https://kanhaiyamobile.online",
  code: "https://github.com/Ramsagar705/Kanhaiya-Mobile",
},
  {
    title: "AI Habit Tracker",
    description: "Built a full-stack MERN application that helps users build better habits using AI-powered suggestions. Features include JWT authentication, habit tracking, progress analytics, reminders, and responsive UI.",
    image: projectImg3,
    tech: ["React", "Node.js", "MongoDB", "Express.js","JWT","OpenAI API"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://ai-habit-tracker-psi.vercel.app",
    code: "https://github.com/Ramsagar705/AI-HABIT-TRACKER.git",
  },
  {
    title: "Aqua Blue Hydropack",
    description: "A modern and responsive water delivery website built with React, featuring product listings,online ordering, easy-to-use  customer inquiries, and a clean user-friendly interface.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://aqua-blue-hydropack.onrender.com/",
    code: "https://github.com/Ramsagar705/aqua-blue-hydropack.git",
  },
  
  {
    title: "Portfolio Website",
    description: "A modern and fully responsive personal portfolio website built to showcase my projects, technical skills, experience, and achievements with smooth animations and an intuitive user interface.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Harvestify",
    description: "Harvestify is a full-stack MERN agriculture platform that helps farmers manage crops, monitor farm activities, receive AI-powered recommendations, and improve productivity through an intuitive dashboard.",
    image: projectImg5,
    tech: ["AI", "React", "Node.js", "MongoDB","Weather API"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "https://github.com/Ramsagar705/Harvestify.git",
  },
  {
    title: "AI Flow Builder",
    description: "Created a drag-and-drop AI workflow builder using React Flow and OpenRouter API. Users can visually connect AI nodes, execute workflows, and store configurations in MongoDB.",
    image: projectImg6,
    tech: ["React", "React Flow", "Node.js", "OpenRouter API"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://mern-ai-flow-2.onrender.com",
    code: "https://github.com/Ramsagar705/Mern-Ai-Flow.git",
  }
];


export const workData = [
  {
    role: "Softaware Development Engineer Intern",
    company: "Bluestock Finteck",
    duration: "2025",
    description:
      "Worked on React-based frontend development, implemented reusable UI components, integrated backend APIs, fixed bugs, and improved application performance and responsiveness.",
    color: "purple"
  },
  {
     role: "Open Source Contributor",
    company: "GitHub",
    duration: "2025 - Present",
    description:
      "Built personal projects, improved existing applications, fixed bugs, and continuously practiced modern web development using React, Node.js, Express, and MongoDB.",
    color: "blue",
  }
  
];
