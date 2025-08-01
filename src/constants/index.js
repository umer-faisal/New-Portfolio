
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
   
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  // New project images
  styleways,
  unicorn,
  inventory,
  usability,
  material,
  education,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  {
    name: "framer",
    icon: framer,
  },
  
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "MySql",
  //   icon: mysql,
  // },

  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Unicorn Digital",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2025 - present",
    points: [
      "As a MERN Stack Developer, I specialize in building and maintaining dynamic web applications using MongoDB, Express.js, React.js, and Node.js",
      "I work closely with cross-functional teams—including designers, product managers, and fellow developers—to deliver high-quality, scalable products.",
      "My responsibilities include implementing responsive, user-friendly interfaces, ensuring seamless performance across all major browsers, and actively participating in code reviews to promote clean, efficient, and maintainable code.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Amazing work! You turned my ideas into a sleek, responsive portfolio that fits my graphics profile perfectly. Highly recommended!",
    name: "Abdul Rab",
    designation: "Portfolio",
    company: "AbdulRab",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with you was a fantastic experience.The site is fast, responsive, and beautifully designed.Everything functions exactly as we needed.Truly professional work from start to finish.",
    name: "Alan Walker",
    designation: "Block-Chain",
    company: "Artizia",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Clean code, great design, and clear communication.You delivered a functional and elegant product.The user experience is top-notch.Definitely working with you again!",
    name: "Abdullah",
    designation: "NORRBOTTENS",
    company: "ISLAMISKA CENTER",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Unicorn Digital",
    description:
      "A responsive Web Application built with Next.js for UnicornDigital, delivered as a sleek and modern web solution tailored to their digital agency needs.",
    tags: [
      {
        name: "Nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      }
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
 
    ],
    image: unicorn, 
    source_code_link: "https://unicorndigital1.vercel.app/",
  },
  {
    name: "AbdulRab-Portfoilio",
    description:
      "Abdul Rab's portfolio website is a modern, responsive platform built to showcase his skills, projects, and professional background as a graphic designer. The site features a clean layout with animated transitions, project previews, and an intuitive user experience powered by HTML and Css3.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "text-yellow-500",
      },
    ],
    image: gearXpert,
    source_code_link: "https://abdulrab.netlify.app/",
  },
  {
    name: "Styleways",
    description:
      "Styleways is a responsive web application built with React and Tailwind CSS, featuring a clean, modern design and smooth animations. It showcases a collection of products with detailed information and a user-friendly interface for easy navigation.",
    tags: [
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: styleways,
    source_code_link: "https://style-ways.vercel.app/",
  },
  {
    name: "Norrbottens Islamic Center",
    description:
      "The NIC-Clone is a full-stack web application built using the MERN stack.It replicates a Norrbottens Islamic Center application portal with a clean, responsive UI.Users can fill out and submit forms, with data securely managed in MongoDB.Deployed on Netlify, it showcases seamless frontend-backend integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "express",
      //   color: "pink-text-gradient",
      // },
    ],
    image: project2,
    source_code_link: "https://nic-clone.netlify.app/",
  },
  {
    name: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, TypeScript, and Firebase for real-time data synchronization. Includes user roles, project boards, and progress tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: unicorn,
    source_code_link: "https://github.com/yourusername/task-manager",
  },
  {
    name: "Weather Dashboard",
    description:
      "A modern weather application that displays current weather conditions and forecasts for multiple locations. Features include interactive maps, weather alerts, and historical data visualization. Built with React, Chart.js for data visualization, and integrates with multiple weather APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/yourusername/weather-dashboard",
  },
  {
    name: "Social Media Clone",
    description:
      "A social media platform clone with features like user profiles, posts, comments, likes, and real-time messaging. Built with React, Node.js, and Socket.io for real-time communication. Includes image upload, user authentication, and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: usability,
    source_code_link: "https://github.com/yourusername/social-media-clone",
  },
  {
    name: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Three.js for 3D animations. Features include interactive 3D elements, smooth scrolling animations, project showcase, and contact forms. Deployed on Vercel with optimized performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "purple-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: material,
    source_code_link: "https://github.com/yourusername/portfolio-3d",
  },
  {
    name: "AI Chat Application",
    description:
      "An AI-powered chat application that integrates with OpenAI's GPT API. Features include conversation history, multiple AI models, code syntax highlighting, and export functionality. Built with React, Node.js, and includes user authentication and conversation management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: education,
    source_code_link: "https://github.com/yourusername/ai-chat-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
