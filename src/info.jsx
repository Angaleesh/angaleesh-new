import albionWeb from "./assets/projects/albion-web.png";
import genieWeb from "./assets/projects/genie-web.png";
import bankWeb from "./assets/projects/bank-web.png";
import medbay from "./assets/projects/medbay.png";
import treffer from "./assets/projects/treffer.png";
import credit from "./assets/projects/credit.png";
import nike from "./assets/projects/nike.png";
import quickeat from "./assets/projects/quickeat.png";
import smileshop from "./assets/projects/smile-shop.png";
import eyeguru from "./assets/projects/eyeguru.png";
import shopeasey from "./assets/projects/shopeasey.png";
import kitstop from "./assets/projects/kitstop-web.png";
import saj from "./assets/projects/saj-mobile.jpg";
import brandmax from "./assets/projects/brandmax-mobile.jpg";
import fobes from "./assets/projects/fobes.jpg";
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
    id: "my-works",
  },
  {
    name: "Resume",
  },
  {
    name: "Contact",
  },
];
export const projectGroup = ["All", "Industrial", "Personal", "Freelance"];

export const projectList = [
  {
    key: 1,
    title: "Wall360",
    stack: [skillAssets?.codeigniter, skillAssets?.react],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Backend ", "Admin Panel"],
    image: albionWeb,
    link: "https://wall360.in",
    type: ["web", "mobile"],
  },
  {
    key: 2,
    title: "Genie Arabia",
    stack: [skillAssets?.nodejs, skillAssets?.react],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Backend ", "Admin Panel"],
    image: genieWeb,
    link: "https://geniearabia.com",
    type: ["web"],
  },
  {
    key: 3,
    title: "Albion Bank Auctions",
    stack: [skillAssets?.codeigniter, skillAssets?.laravel],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Backend "],
    image: bankWeb,
    link: "https://albionbankauctions.com",
    type: ["web", "mobile"],
  },
  {
    key: 4,
    title: "Fobes",
    stack: [skillAssets?.nodejs, skillAssets?.laravel],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Backend "],
    image: fobes,
    link: "https://fobes.in",
    type: ["web", "mobile"],
  },
  {
    key: 5,
    title: "Shopeasey",
    stack: [skillAssets?.nodejs, skillAssets?.react],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Backend "],
    image: shopeasey,
    link: "https://shopeasey.com",
    type: ["web", "mobile"],
  },
  {
    key: 6,
    title: "Saj Surveyors",
    stack: [skillAssets?.codeigniter],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Backend ", "Admin Panel"],
    image: saj,
    type: ["mobile"],
  },
  {
    key: 7,
    title: "Brandmax",
    stack: [skillAssets?.codeigniter],
    desc: "Lorem ipsum",
    about: ["Backend ", "Admin Panel"],
    image: brandmax,
    group: ["All", "Industrial"],
    link: "https://brandmax.co.in",
    type: ["mobile"],
  },
  {
    key: 8,
    title: "Medbay",
    stack: [skillAssets?.opencart, skillAssets?.php],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Maintanance"],
    image: medbay,
    link: "https://medbay.in",
    type: ["web"],
  },
  {
    key: 9,
    title: "Treffer",
    stack: [skillAssets?.opencart, skillAssets?.php],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Maintanance"],
    image: treffer,
    link: "https://catalog.treffertech.com",
    type: ["web"],
  },
  {
    key: 10,
    title: "Kitstop",
    stack: [skillAssets?.opencart, skillAssets?.php],
    desc: "Lorem ipsum",
    group: ["All", "Industrial"],
    about: ["Maintanance"],
    image: kitstop,
    link: "https://kitstop.in",
    type: ["web", "mobile"],
  },
  {
    key: 11,
    title: "Eyeguru",
    stack: [skillAssets?.nodejs, skillAssets?.react, skillAssets?.ts],
    desc: "Lorem ipsum",
    group: ["All", "Freelance"],
    about: ["Frontend ", "Backend ", "Admin Panel", "Cloud"],
    image: eyeguru,
    link: "https://eyeguru.co",
    type: ["web"],
  },
  {
    key: 12,
    title: "Smile Shop",
    stack: [skillAssets?.nodejs, skillAssets?.react, skillAssets?.ts],
    desc: "Lorem ipsum",
    group: ["Personal"],
    about: ["Frontend", "Backend", "Admin Panel"],
    image: smileshop,
    link: "",
    type: ["web"],
  },
  {
    key: 13,
    title: "QuickEat",
    stack: [skillAssets?.react, skillAssets?.tailwind],
    desc: "Lorem ipsum",
    group: ["Personal"],
    about: ["Frontend Static Site"],
    image: quickeat,
    link: "https://angaleesh-quickeat.vercel.app",
    type: ["web"],
  },
  {
    key: 14,
    title: "Credit",
    stack: [skillAssets?.react, skillAssets?.tailwind],
    desc: "Lorem ipsum",
    group: ["Personal"],
    about: ["Frontend Static Site"],
    image: credit,
    link: "https://angaleesh-credit.vercel.app",
    type: ["web"],
  },
  {
    key: 15,
    title: "Nike",
    stack: [skillAssets?.react, skillAssets?.tailwind],
    desc: "Lorem ipsum",
    group: ["Personal"],
    about: ["Frontend Static Site"],
    image: nike,
    link: "https://angaleesh-nike.vercel.app",
    type: ["web"],
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

export const serviceContent = [
  {
    key: 1,
    count: "01",
    title: "Frontend Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: <i class="fi fi-rr-display-code"></i>,
  },
  {
    key: 2,
    count: "02",
    title: "Backend Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: <i class="fi fi-ss-database"></i>,
  },
  {
    key: 3,
    count: "03",
    title: "Cloud Deployment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: <i class="fi fi-tr-cloud-back-up"></i>,
  },
  {
    key: 4,
    count: "04",
    title: "Testing and User Experience",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: <i class="fi fi-ts-quiz-alt"></i>,
  },
];
