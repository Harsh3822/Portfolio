// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/unnamed.webp';
import bsaLogo from './assets/education_logo/images.png';
import vpsLogo from './assets/education_logo/deep-darshan-vidhya-sankul-deladva-surat-schools-6bbsxz2sv9.avif';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/home1.png';
import csprepLogo from './assets/work_logo/Ice Cream-1.png';
import movierecLogo from './assets/work_logo/Bestide-Web.png';
import taskremLogo from './assets/work_logo/Ajio.png';
import npmLogo from './assets/work_logo/Travel_com.png';
import webverLogo from './assets/work_logo/Home-Page.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
];
export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "𝐌𝐚𝐭𝐫𝐮𝐛𝐡𝐮𝐦𝐢 𝐕𝐢𝐝𝐲𝐚 𝐒𝐚𝐧𝐤𝐮𝐥",
    date: "Sept 2019 - July 2020",
    grade: "46.56 %",
    desc: "I have completed my 12th (H.S.C) in Deep Darshan Vidhya Sankul , Surat.",
    degree: "10th (SSC)",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "Deep Darshan Vidhya Sankul",
    date: "Sept 2020 - July 2022",
    grade: "60.56 %",
    desc: "I have completed my 12th (H.S.C) in Deep Darshan Vidhya Sankul , Surat.",
    degree: "12th (H.S.C)",
  },
  {
    id: 2,
    img: bsaLogo,
    school: "Red & White Multimedia Education",
    date: "Sept 2024 - Aug 2025",
    desc: "I have completed my Web Development course from Red & White Multimedia Education Pvt Ltd.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Real Estate Website UI",
    description:
      "House_web ek clean aur modern real estate listing website frontend hai, banaya gaya hai sirf HTML, CSS, Bootstrap, aur Media Queries ka use karke. Iska design responsive hai aur har device par sahi se kaam karta hai. Ye project frontend design aur layouting skills dikhane ke liye perfect hai.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "Bootstrap",'Responsive'],
    github: "https://github.com/Harsh3822/House_web?tab=readme-ov-file",
    webapp: "https://house-web-sable.vercel.app/",
  },
  {
    id: 1,
    title: " Ice Cream Website UI",
    description:"Romky Ice Cream ek attractive, modern aur fully responsive ice cream brand website ka frontend hai. Yeh project sirf HTML, CSS, Bootstrap, aur Media Queries ka use karta hai, aur visually engaging layout ke saath design kiya gaya hai jo real ice cream websites jaise feel deta hai.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "Bootstrap", "Responsive"],
    github: "https://github.com/Harsh3822/Romky_Ice-Cream",
    webapp: "https://romky-ice-cream.vercel.app/",
  },
  {
    id: 2,
    title: "Bastide-Web",
    description:
      "A JavaScript-based web application that provides Ambre Soir Collection Website A front-end project showcasing the luxurious Ambre Soir collection of scented products inspired by the Bastide official site. Built using HTML, CSS, and JavaScript.",
    image: movierecLogo,
    tags: ["HTML", "CSS", "JavaScript","Responsive"],
    github: "https://github.com/Harsh3822/Bastide_Fe?tab=readme-ov-file",
    webapp: "https://bastide-fe.vercel.app/",
  },
  {
    id: 3,
    title: "🌍 Travel.Com",
    description:
      "🌍 Travel.Com - Popular Tour Packages A simple, responsive travel website showcasing various tour packages such as Manali, Goa, and Delhi. Built using HTML, CSS,Re, and JavaScript.",
    image: npmLogo,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/Harsh3822/Tour_-_Travel",
    webapp: "https://tour-travel-pi.vercel.app/",
  },
  {
    id: 4,
    title: "🛍️ AJIO - React E-commerce Website",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["HTML", "CSS","Responsive", "JavaScript","React", ],
    github: "https://github.com/Harsh3822/Ajio_Fe-main",
    webapp: "https://ajio-fe-main.vercel.app/",
  },
  {
    id: 5,
    title: "🛍️ Westside E-Commerce Website Clone",
    description:
      "A fully responsive and interactive Westside fashion e-commerce website clone built using React.js, HTML, CSS, and JavaScript. This project replicates core functionalities of a modern online shopping platform, offering a seamless user experience and clean UI.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Harsh3822/Westside_Fe/tree/main?tab=readme-ov-file#%EF%B8%8F-westside-e-commerce-website-clone",
    webapp: "https://westside-fe-delta.vercel.app/",
  },
]