import albionWeb from "./assets/projects/albion-web.png";
import genieWeb from "./assets/projects/genie-web.png";
import bankWeb from "./assets/projects/bank-web.png";
import medbay from "./assets/projects/medbay.png";
import kitstop from "./assets/projects/kitstop-web.png";
import saj from "./assets/projects/saj-mobile.jpg";
import brandmax from "./assets/projects/brandmax-mobile.jpg";
import skillAssets from "./assets/skills";
export const sidebarContents = [
  {
    name: "About me",
    id: "about",
  },
  {
    name: "Portfolio",
    id: "portfolio",
  },
  {
    name: "Services",
  },
  {
    name: "My Works",
  },
  {
    name: "Resume",
  },
  {
    name: "Contact",
  },
];

export const projectList = [
  {
    key: 1,
    title: "Albion Property hub",
    stack: [skillAssets?.codeigniter, skillAssets?.react],
    desc: "Lorem ipsum",
    about: ["Backend Development", "Admin Panel"],
    image: albionWeb,
    link: "https://albionpropertyhub.com",
    type: ["web", "mobile"],
  },
  {
    key: 2,
    title: "Genie Arabia",
    stack: [skillAssets?.node, skillAssets?.react],
    desc: "Lorem ipsum",
    about: ["Backend Development", "Admin Panel"],
    image: genieWeb,
    link: "https://geniearabia.com",
    type: ["web"],
  },
  {
    key: 3,
    title: "Albion Bank Auctions",
    stack: [skillAssets?.codeigniter, skillAssets?.laravel],
    desc: "Lorem ipsum",
    about: ["Backend Development"],
    image: bankWeb,
    link: "https://albionbankauctions.com",
    type: ["web", "mobile"],
  },
  {
    key: 4,
    title: "Saj Surveyors",
    stack: [skillAssets?.codeigniter],
    desc: "Lorem ipsum",
    about: ["Backend Development", "Admin Panel"],
    image: saj,
    type: ["mobile"],
  },
  {
    key: 5,
    title: "Brandmax",
    stack: [skillAssets?.codeigniter],
    desc: "Lorem ipsum",
    about: ["Backend Development", "Admin Panel"],
    image: brandmax,
    link: "https://brandmax.co.in",
    type: ["mobile"],
  },
  {
    key: 6,
    title: "Medbay",
    stack: [skillAssets?.opencart],
    desc: "Lorem ipsum",
    about: ["Ecommerce Development"],
    image: medbay,
    link: "https://medbay.in",
    type: ["web"],
  },
  {
    key: 7,
    title: "Kitstop",
    stack: [skillAssets?.opencart],
    desc: "Lorem ipsum",
    about: ["Ecommerce Development"],
    image: kitstop,
    link: "https://kitstop.in",
    type: ["web", "mobile"],
  },
];

export const major = [
  {
    name: "React",
    icon: <i className="fi fi-ts-react"></i>,
  },
  {
    name: "Node JS",
    icon: <i className="fi fi-brands-node-js"></i>,
  },
  {
    name: "PHP",
    icon: <i className="fi fi-brands-php"></i>,
  },
  {
    name: "AWS",
    icon: <i className="fi fi-rr-cloud-upload-alt"></i>,
  },
];

export const badges = [
  {
    count: 1,
    unit: "+",
    content: "Year of Experience",
  },
  {
    count: 10,
    unit: "+",
    content: "Projects Done",
  },
  {
    count: 20,
    unit: "+",
    content: "Skills Achieved",
  },
];

export const skillGroup = [
  "All",
  "Client",
  "Server",
  "Databases",
  "UI Libraries",
  "Cloud",
  "Languages",
];

export const skillicons = [
  {
    key: 1,
    name: "HTML",
    icon: skillAssets?.html,
    group: ["Client", "All"],
  },
  {
    key: 2,
    name: "CSS",
    icon: skillAssets?.css,
    group: ["Client", "All"],
  },
  {
    key: 3,
    name: "JavaScript",
    icon: skillAssets?.js,
    group: ["Client", "All", "Server", "Languages"],
  },
  {
    key: 4,
    name: "Typescript",
    icon: skillAssets?.ts,
    group: ["Client", "All", "Server", "Languages"],
  },
  {
    key: 5,
    name: "React",
    icon: skillAssets?.react,
    group: ["Client", "All"],
  },
  {
    key: 6,
    name: "Redux",
    icon: skillAssets?.redux,
    group: ["Client", "All"],
  },
  {
    key: 7,
    name: "NodeJS",
    icon: skillAssets?.nodejs,
    group: ["Server", "All"],
  },
  {
    key: 8,
    name: "TSOA",
    icon: skillAssets?.tsoa,
    group: ["Server", "All"],
  },
  {
    key: 9,
    name: "ExpressJs",
    icon: skillAssets?.express,
    group: ["Server", "All"],
  },
  {
    key: 10,
    name: "PHP",
    icon: skillAssets?.php,
    group: ["Server", "All"],
  },
  {
    key: 11,
    name: "CodeIgniter",
    icon: skillAssets?.codeigniter,
    group: ["Server", "All"],
  },
  {
    key: 12,
    name: "Laravel",
    icon: skillAssets?.laravel,
    group: ["Server", "All"],
  },
  {
    key: 13,
    name: "MySQL",
    icon: skillAssets?.mysql,
    group: ["Databases", "All"],
  },
  {
    key: 14,
    name: "MongoDB",
    icon: skillAssets?.mongodb,
    group: ["Databases", "All"],
  },
  {
    key: 15,
    name: "PostgresQL",
    icon: skillAssets?.postgresql,
    group: ["Databases", "All"],
  },
  {
    key: 16,
    name: "Redis",
    icon: skillAssets?.redis,
    group: ["Databases", "All"],
  },
  {
    key: 17,
    name: "Tailwind CSS",
    icon: skillAssets?.tailwind,
    group: ["All", "UI Libraries"],
  },
  {
    key: 18,
    name: "Sass",
    icon: skillAssets?.sass,
    group: ["All", "UI Libraries"],
  },
  {
    key: 19,
    name: "Ant Design",
    icon: skillAssets?.antd,
    group: ["All", "UI Libraries"],
  },
  {
    key: 20,
    name: "Bootstrap",
    icon: skillAssets?.bootstrap,
    group: ["All", "UI Libraries"],
  },
  {
    key: 21,
    name: "Opencart",
    icon: skillAssets?.opencart,
    group: ["All"],
  },
  {
    key: 22,
    name: "JAVA",
    icon: skillAssets?.java,
    group: ["All", "Languages"],
  },
  {
    key: 23,
    name: "Python",
    icon: skillAssets?.python,
    group: ["All", "Languages"],
  },
  {
    key: 24,
    name: "AWS",
    icon: skillAssets?.aws,
    group: ["All", "Cloud"],
  },
];
