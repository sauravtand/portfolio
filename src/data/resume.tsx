import { Icons } from "@/components/icons";

export const DATA = {
  name: "Saurav Tandukar",
  initials: "DV",
  url: "https://dillion.io",
  location: "Lalitpur, Nepal",
  locationLink: "https://google.com/maps/place/Gusingal/@27.689353,85.3065463,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19f7c16cfc57:0xbce879a58fb36193!8m2!3d27.689353!4d85.3091212!16s%2Fg%2F11vb4d4vhg?entry=ttu",
  description:
    "Enthusiatic Frontend Developer. I love building things and helping people. Very active on Github.",
  summary:
    " Recently, [I am pursuing my Bachelors Degree in Information Technology ](/#education), I did my intern at Luniva Tech Pvt. Ltd. , and now I am working as Frontend Developer at IGC Business Holding Company",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "PHP",
    "MS SQL SERVER",
    "MySQL",

  ],
  contact: {
    email: "sauravtand2375@gmail.com",
    tel: "+977 9869577168",
    social: {
      GitHub: {
        url: "https://github.com/sauravtand",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/saurav-tandukar-8571a4241/",
        icon: Icons.linkedin,
      },
      // X: {
      //   url: "https://x.com/dillionverma",
      //   icon: Icons.x,
      // },
      // Youtube: {
      //   url: "https://youtube.com/c/dillionverma",
      //   icon: Icons.youtube,
      // },
    },
  },

  work: [
    {
      company: "Luniva Tech Pvt. Ltd.",
      href: "https://www.lunivatech.com/",
      badges: [],
      location: "Onsite",
      title: "React Developer",
      logoUrl: "/lunivalogo.png",
      start: "May 2022",
      end: "Dec 2023",
      description:
        "Created bakery management system, contributed in ticket colleting app for sajha buses in Pokhara,handled the Hospital Managements Database",
    },
    {
      company: "IGC Business Holding",
      badges: [],
      href: "https://igc.com.np",
      location: "Hybrid",
      title: "Front End Developer",
      logoUrl: "/igc.jpg",
      start: "Dec 2023",
      end: "Present",
      description:
        "Built the web app that tracks the details and progress of the peoples that are trying for abroad studies or work mainly Japan",
    },

  ],
  education: [
    {
      school: "Purbanchal University",
      href: "https://www.puexam.edu.np/",
      degree: "BIT",
      logoUrl: "/purbanchal.png",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Bakery Management",
      href: "http://lunivacare.ddns.net:8080/lunivaproductentry/",
      dates: "",
      active: true,
      description:
        "Built this project to track the stocks required for the bakery items with its bills and chalans",
      technologies: [
        "React",
        "Antd",
        ".Net"
      ],
      links: [
        {
          type: "Website",
          href: "http://lunivacare.ddns.net:8080/lunivaproductentry/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },

  ],

} as const;
