import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Azeem Rafique",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "MERN Stack Developer. I love building Websites and helping people. Very active on LinkedIn.",
  summary:
    "Highly motivated and skilled software developer graduated with a Bachelor's degree in Computer Science and a strong foundation in JavaScript | React.JS | React Native. Eager to contribute my technical expertise and collaborative mindset to drive impactful projects in a dynamic team environment.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Unit Testing With Jest",
    "REST APIS",
    "MongoDB",
    "FireBase",
    "Android Studio",
    "Git",
    "Tailwind CSS",
    "BootStrap",
    "Material UI",
    "Postman",
    "HTML & CSS",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "azeemrafique47@gmail.com",
    tel: "+923338737779",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Jamz47",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/azeem-rafique-856970194/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/azeemrafique471",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@urbancrime9212",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Trade Tracker Company",
      href: "https://tradetracker.com.pk/",
      badges: [],
      location: "On-Site",
      title: "Frontend Engineer",
      logoUrl: "/tt.png",
      start: "April 2024",
      end: "July 2024",
      description:
        `Currently working at Trade Tracker. My responsibilities include fixing bugs, updating UI, and implementing new logic across three websites, including Nestle, Intradoors.com, and Trade Tracker's own site. Additionally, monitor and resolve issues in database service requests.`,
    },
    {
      company: "Freelancer",
      badges: [],
      href: "https://fiverr.com",
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/fiverr.png",
      start: "January 2023",
      end: "Current",
      description:
        "React Native Developer & MERN stack developer. Work as junior Developer build components and fix bugs with team members. Works on Authentication",
    },
    {
      company: "CodSoft",
      href: "https://www.codsoft.in/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/codsoft.jpg",
      start: "February 2024",
      end: "March 2024",
      description:
        "React Developer Implemented features using React, React Bootstrap and versal hosting HTML/CSS Work on main projects Portfolio Landing Page Calculator ",
    },
    {
      company: "Final Year Project",
      href: "https://splunk.com",
      badges: [],
      location: "University",
      title: "University Social Application",
      logoUrl: "/rn.png",
      start: "December 2022",
      end: "August 2023",
      description:
        "Mobile Version (React Native) Social Media App: University Project Mobile Version (React Native)",
    },
    {
      company: "FreeCodeCamp",
      href: "https://www.freecodecamp.org/fccbbc007f0-2d3c-4b1f-8dbb-ba7cc7a2e27a",
      badges: [],
      location: "Learning",
      title: "Certificate",
      logoUrl: "/fcc.png",
      start: "600 hours work",
      end: "August 2023 - 2024",
      description:
        "Certificate in JavaScript Algorithms and Data Structures & \nCertificate in Responsive Web Design ",
    },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Lahore Garrison University",
      href: "https://lgu.edu.pk/",
      degree: "Bachelor's in ( Computer Science )",
      logoUrl: "/lgu.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Govt.College of Technology",
      href: "https://tevta.gop.pk/",
      degree: "DAE ( Electrical )",
      logoUrl: "/gct.jpg",
      start: "2015",
      end: "2019",
    },
    {
      school: "The International School System",
      // href: "https://wlu.ca",
      degree: "Matriculation ( Science )",
      logoUrl: "/waterloo.png",
      start: "2013",
      end: "2015",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Alkazi Traders",
      href: "https://intradoors.com/",
      dates: "March 2024",
      active: true,
      description:
        "Develope Website with Angular V14, [Intradoors](https://intradoors.com/), ",
      technologies: [
        "React.JS",
        "Typescript",
        "Node.JS",
        "Mertial UI",
        "Sass",
        "HTML",
        "FontAwesome",
        "BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://intradoors.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/video1.mp4",
    },
    {
      title: "Nestle Merchandiser",
      href: "http://mmaplus.concavetech.com/dist/#/dashboard/tableau",
      dates: "June 2024",
      active: true,
      description:
        "Fix Bugs, design 3 components, Update, make more Secure",
      technologies: [
        "Angular.JS",
        "Typescript",
        "Node.JS",
        "Mertial UI",
        "Sass",
        "HTML",
        "FontAwesome",
        "BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "http://mmaplus.concavetech.com/dist/#/dashboard/tableau",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jamz47",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/mmaplus.mp4",
    },
    {
      title: "Landing Page",
      href: "https://landing-page-alpha-five-88.vercel.app/",
      dates: "February 2024",
      active: true,
      description:
        "Make landing page With React during Internship",
      technologies: [
        "React.JS",
        "JavaScript",
        "Node.JS",
        "TailwindCSS",
        "FontAwesome Icon",
        "HTML & CSS",
        "JSX",
        "React BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://landing-page-alpha-five-88.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jamz47/Landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video2.mp4",
    },
    {
      title: "React Calculator",
      href: "https://calculator-react-raqt1di2d-jamz47s-projects.vercel.app/",
      dates: "February 2024",
      active: true,
      description:
        "Make Calculator With React.JS during Internship",
      technologies: [
        "React.JS",
        "JavaScript",
        "Node.JS",
        "TailwindCSS",
        "FontAwesome Icon",
        "HTML & CSS",
        "JSX",
        "React BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://calculator-react-raqt1di2d-jamz47s-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/video3.mp4",
    },
    {
      title: "Final Year Project University Social Application",
      href: "https://calculator-react-raqt1di2d-jamz47s-projects.vercel.app/",
      dates: "February 2024",
      active: true,
      description:
        "This Social Applicaion I develope and Submit on FYP",
      technologies: [
        "React Native",
        "JavaScript",
        "Node.JS",
        "TailwindCSS",
        "FontAwesome Icon",
        "HTML & CSS",
        "JSX",
        "React BootStrap",
        "FireBase",
        "Navigation",
        "React BootStrap"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Jamz47",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/public/fcc.png",
    },
  ],
  hackathons: [
    {
      title: "Lego Robot",
      dates: "November 2020",
      location: "University Project",
      description:
        "Developed a Lego Robot and Program it in Python that do the Lane Following",
      image:
        "https://pybricks.com/ev3-micropython/_images/robot_educator_line.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Street Light Sensors",
      dates: "December 2021",
      location: "University Project",
      description:
        "Develope project in Python at in dark automatically Turn-on lights and Turn-off when there will be at Day time",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/ky3b0y80/outdoor-lamp/t/c/s/10-5-36-watt-automatic-sensor-system-led-street-light-grey-body-original-imagae8ygey6ffzx.jpeg?q=90&crop=false",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Freelance project Fix Authentication",
      dates: "March 2022",
      location: "Remote",
      description:
        "React Native Project there was some issues i have resolve it. Login & SignUp issues",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Jamz47",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
  ],
} as const;
