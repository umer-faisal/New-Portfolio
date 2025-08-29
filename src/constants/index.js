
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
  usability,
  material,
  abdulrab,
  newwheels,
  artzia,
  nic,
  iedu,
  servomotors,

} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "experience",
    title: "Experince",
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
    title: "Front-End Developer",
    company_name: "Unicorn Digital",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2025 - present",
    points: [
      "Worked on React.js and Next.js projects, focusing on building dynamic, SEO-friendly, and scalable web applications.",
      "Implemented modern UI components using Tailwind CSS and optimized user experience with responsive, clean design.",
      "Collaborated on Git/GitHub based workflows, applying best practices in frontend development and improving problem-solving skills through real-world projects.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Amazing work! You turned my ideas into a sleek, responsive portfolio that fits my graphics profile perfectly. Highly recommended!",
    name: "Abdul Rab",
    designation: "portfolio",
    company: "Graphics Designer",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Umer developed our business website, newwheels.pk, in an impressively short period. He perfectly captured our vision with a modern, clean, and highly functional design. His work is professional, detail-oriented and exceeded all our expectations. I highly recommend Umer for his expertise, efficiency and valuable insight. Thank you for delivering an outstanding platform for our online growth.",
    name: "Muneeb Ahmed",
    designation: "Co-founder",
    company: "NewWheels",
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
    name: "New Wheels",
    description:
      "",
    tags: [
      {
        name: "ReactJs",
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
    image: newwheels, 
    source_code_link: "https://newwheels.pk/",
  },
  {
    name: "Unicorn Digital",
    description:
      "",
    tags: [
      {
        name: "Nextjs",
        color: "text-gray-500",
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
    name: "Styleways",
    description:
      "",
    tags: [
      {
        name: "ReactJs",
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
    name: "AbdulRab-Portfoilio",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "text-red-600",
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
    image: abdulrab,
    source_code_link: "https://abdulrab.netlify.app/",
  },
  {
    name: "Norrbottens Islamic Center",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
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
    image: nic,
    source_code_link: "https://nic-clone.netlify.app/",
  },
  {
    name: "Inventory Mangement System",
    description:
      "",
    tags: [
      {
        name: "Nextjs",
        color: "text-gray-500",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      
    ],
    image: servomotors,
    source_code_link: "https://servomotors.vercel.app/",
  },
  {
    name: "Artizia",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "text-red-600",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      
    ],
    image: artzia,
    source_code_link: "https://artziaclone.netlify.app/",
  },
  {
    name: "Usablity Hub",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "text-red-600",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    
    ],
    image: usability,
    source_code_link: "https://usability-hub-clones.netlify.app/",
  },
  {
    name: "Maaterial Dashboard",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "text-red-500",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "text-yellow-500",
      },
    ],
    image: material,
    source_code_link: "https://materialdashboard.netlify.app/",
  },
  {
    name: "IEduction ",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "text-red-600",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      
    ],
    image: iedu,
    source_code_link: "https://iedu-clone.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
