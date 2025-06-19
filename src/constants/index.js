
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
    name: "NIC-Clone",
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
      //   name: "node",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
 
    ],
    image: project2,
    source_code_link: "https://nic-clone.netlify.app/",
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
    name: "Artizia-clone",
    description:
      "Artzia Clone is a MERN stack practice project simulating an NFT marketplace. Users can connect wallets, create and browse digital art collections.It features a clean, responsive UI with basic NFT listing and interaction. Deployed on Netlify,it demonstrates full-stack development skills.The project is inspired by real NFT platforms.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      // {
      //   name: "node",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: project3,
    source_code_link: "https://artziaclone.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
