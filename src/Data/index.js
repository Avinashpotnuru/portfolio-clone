import { AiFillHtml5 } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";

import { DiCss3, DiReact } from "react-icons/di";
import { FaFigma, FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import {
  TbBrandTailwind,
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandJavascript,
} from "react-icons/tb";

export const tabs = [
  { id: 1, tab: "All", category: "" },
  { id: 2, tab: "Java Script", category: "javascript" },
  { id: 3, tab: "React", category: "react" },
];

export const projectsData = [
  {
    id: 1,
    imgUrl: "/resturaant.webp",
    title: "Restaurant Website",
    description: `It is a restaurant's website. Along with the ability to reserve a table, this app allows users to view the meal menu,`,
    category: "react",
    Link: "/projects/restaurant",
    deploylink: "",
  },
  {
    id: 2,
    imgUrl: "/portfolio.png",
    title: "Personal Portfolio",
    description: `Developed In this project, which uses HTML, CSS, JavaScript, and React, I have contributed
    information `,
    category: "react",
    Link: "/projects/portfolio",
    deploylink: "https://avinashpotnuruportfolio.netlify.app/",
  },
  {
    id: 3,
    imgUrl: "/moviesapp.png",
    title: "Movies App",
    description: `Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies ,
    `,
    category: "react",
    Link: "/projects/movies-app",
    deploylink: "https://avinashmovieapp.ccbp.tech/",
  },

  {
    id: 4,
    imgUrl: "/foodmuch.png",
    title: "Food Munch",
    description: `Developed a responsive website for a Food Store where users can see a list of food items, detailed information`,
    category: "",
    Link: "/projects/food-munch",
    deploylink: "https://avinashfood1.ccbp.tech/",
  },
  {
    id: 5,
    imgUrl: "/typemaster.png",
    title: "Typing Speed Test",
    description: `Developed an application that measured the time he took to complete a given paragraph
    `,
    category: "javascript",
    Link: "/projects/type-master",
    deploylink: "https://avinashspeed.ccbp.tech/",
  },
  {
    id: 6,
    imgUrl: "/todo.png",
    title: "Todo App",
    description: `A comprehensive todo management tool designed to enhance productivity .
    `,
    link: "",
    category: "javascript",
    Link: "/projects/todo-list",
    deploylink: "https://avi1todolist.ccbp.tech/",
  },
  {
    id: 7,
    imgUrl: "/reacttodolist.png",
    title: "React Todo App",
    description: `A comprehensive todo management tool designed to enhance productivity .
    `,
    link: "",
    category: "react",
    Link: "/projects/react-todolist",
    deploylink: "https://avinashtodolist.netlify.app/",
  },
];

export const contactDetails = [
  {
    id: 1,
    title: "Avinash Potnuru",
  },
  {
    id: 2,
    title: "phone number",
  },
];

const portfolio = {
  imgUrl: "/portfolio.png",
  title: "Personal Portfolio",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <TbBrandTailwind /> },
    { icon: <DiReact /> },
    { icon: <TbBrandNextjs /> },
    { icon: <SiMongodb /> },
    { icon: <TbBrandRedux /> },
  ],

  description: `Developed In this project, which uses HTML, CSS, JavaScript,  Next.js and Mongo db .I have contributed
    information about myself, my education, and my projects. Users can view this information in the app. This app
    also has responsive features..`,
  projectLink: "https://avinashpotnuruportfolio.netlify.app/",
  githubLink: "",
  category: "react",
};

const todolist = {
  imgUrl: "/todo.png",
  title: "Todo App",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
    { icon: <TbBrandJavascript /> },
  ],
  description: `User-friendly interface with HTML, CSS, and Bootstrap for ease of use.
    Effortless task management through JavaScript-based CRUD operations with dynamic UI updates.
    Your tasks are always safe with local storage methods to ensure task persistence
    `,
  projectLink: "https://avi1todolist.ccbp.tech/",
  githubLink: "",
  category: "javascript",
};

const moviesApp = {
  imgUrl: "/moviesapp.png",
  title: "Movies App",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
    { icon: <TbBrandJavascript /> },
    { icon: <DiReact /> },
    { icon: <FaFigma /> },
  ],
  description: `Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular,
    trending, top-rated, and also can search movies and view specific movie details.`,
  projectLink: "https://avinashmovieapp.ccbp.tech/",
  githubLink: "",
  category: "react",
};

const RestaurantWebsite = {
  imgUrl: "/resturaant.webp",
  title: "Restaurant Website",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <TbBrandTailwind /> },
    { icon: <DiReact /> },
    { icon: <TbBrandNextjs /> },
    { icon: <TbBrandRedux /> },
    { icon: <FaFigma /> },
  ],

  description: `It is a restaurant's website. Along with the ability to reserve a table, this app allows users to view the meal
  menu, chef information, restaurant information, and daily activity at the restaurant. With This Website, users
  can access everything easily`,
  projectLink: "",
  githubLink: "",
  category: "react",
};

const FoodMunch = {
  imgUrl: "/foodmuch.png",
  title: "Food Munch",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
  ],
  description: `Developed a responsive website for Food Store where users can see a list of food items, detailed information
  about a food item, and offers.`,
  projectLink: "https://avinashfood1.ccbp.tech/",
  githubLink: "",
  category: "",
};

const typeMaster = {
  imgUrl: "/typemaster.png",
  title: "Typing Speed Test",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
  ],
  description: ` Developed an application that measured the time he took to complete a given paragraph`,
  projectLink: "https://avinashspeed.ccbp.tech/",
  githubLink: "",
  category: "javascript",
};

const reacttodolist = {
  imgUrl: "/reacttodolist.png",
  title: "React Todo App",
  // technologies: "HTML, CSS, JavaScript, React",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },

    { icon: <TbBrandJavascript /> },
    { icon: <DiReact /> },
  ],
  description: `User-friendly interface with HTML, CSS, and React for ease of use.
    Effortless task management through JavaScript-based CRUD operations with dynamic UI updates.
    
    `,
  projectLink: "https://avinashtodolist.netlify.app/",
  githubLink: "",
  category: "react",
};

export const pages = {
  todolist: todolist,
  moviesApp: moviesApp,
  RestaurantWebsite: RestaurantWebsite,
  FoodMunch: FoodMunch,
  typeMaster: typeMaster,
  portfolio: portfolio,
  reacttodolist: reacttodolist,
};

export const experienceData = [
  {
    id: 1,
    role: "Junior React Js Developer",
    company: "Tech Arion",
    duration: "December 2022 - May 2023",
    description: [
      "Create a user interface specification of application in an Agile environment.",
      "Implemented end-to-end UI design to provide user-friendly websites for the company and its clients.",
      "Implemented Websites using Html, Tailwind CSS, Next JS, and Redux Toolkit with Responsive",
      "Extensively used Git for version controlling and regularly pushed the code.",
    ],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Internship Alerts ",
    duration: "August 2022 - September 2022",
    description: [
      "Create a user interface specification of application in an Agile environment.",
      "Implemented end-to-end UI design to provide user-friendly websites for the company ",
      "Implemented Websites using Html,CSS,JavaScript with Responsive",
      "It's is a one-month internship .in this internship I completed whatever tasks the company gave.",
    ],
  },
];

export const skillsData = [
  "HTML",
  "Css",
  "Bootstrap",
  "Javascript",
  "ReactJs",
  "Python",
  "MySql",
  "Tailwind CSS",
  "Redux Toolkit",
  "Figma",
  "Mongo Db",
  "Git",
];

export const educationDetails = [
  {
    id: 1,
    name: "Nxtwave Disruptive Technologies",
    duration: "2022 - 2023",
    course: "Industry Ready Certification in Full-stack Development",
    location: "Hyderabad, Telangana, India",
  },
  {
    id: 2,
    name: "Sri Sivani College of Engineering",
    duration: "2012 - 2016",
    course: "Bachelor of Technology (Mechanical Engineering)   ",
    location: "Chilkapalem,Srikakulam, Andhra Pradesh",
  },
  {
    id: 3,
    name: "Sri Chaitanya Junior Kalasala",
    duration: "2010 - 2012",
    course: "Intermediate(M.P.C)   ",
    location: "Srikakulam, Andhra Pradesh",
  },
];

export const certificateData = [
  {
    name: "Certificate of Completion",
    link: "https://certificate.givemycertificate.com/c/2f5ede0f-b267-40d0-924f-8289ef628a47",
  },
  {
    name: "Industry Ready Certificate",
    link: "https://certificates.ccbp.in/intensive/irc?id=N8KSBCC3DC",
  },
  {
    name: "React",
    link: "https://certificates.ccbp.in/intensive/react-js?id=AAGOMGFUGD",
  },
  {
    name: "Build your own Dynamic Web Application",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=SZQMJZPYZE",
  },
  {
    name: "Build Your Own Responsive Website",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=NWABGNGVOQ",
  },
  {
    name: "Build Your Own Static Website",
    link: "https://certificates.ccbp.in/intensive/static-website?id=VMRRFPCHYQC",
  },

  {
    name: "Developer Foundations",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=NRZEPVASZL",
  },
  {
    name: "Introduction to Databases",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=ZNJJAIKWKU",
  },
  {
    name: "JavaScript Essentials",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=USSRDIXIFR",
  },
  {
    name: "Programming Foundations with Python",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=AZLJQDUBBR",
  },
  {
    name: "Responsive Web Design using Flex box",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=DBPXFIMNPQ",
  },
];
