import type { ReactNode, ComponentType } from "react";
import { Icons } from "@/components/icons";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { OpenAI } from "@/components/ui/svgs/openai";
import { Anthropic } from "@/components/ui/svgs/anthropic";
import { ZAI } from "@/components/ui/svgs/z-ai";
import { OpenCode } from "@/components/ui/svgs/opencode";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { SQL } from "@/components/ui/svgs/sql";

export const DATA = {
  name: "Matias Godoy",
  initials: "MG",
  url: "https://matiasgodoy.dev",
  location: "Córdoba, Argentina",
  locationLink: "https://www.google.com/maps/place/Cordoba,+Argentina/",
  description: "Come in and get to know me a little.",
  summary:
    "Software engineer focused on building scalable systems and AI-powered products. Co-founded [Eclipta](https://www.linkedin.com/company/eclipta-argentina) to build intelligent messaging and automation solutions. Previously a Software Engineer at [Mercado Libre](/#work) in the checkout team using Java/Spring Boot and hexagonal architecture. Spent 2+ years at [Bitsion](/#work) developing Angular/.NET systems for universities and telcos, and also [taught Angular](/#work) at Universidad Blas Pascal.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "C# / .NET", icon: Csharp },
    { name: "Docker", icon: Docker },
    { name: "OpenAI", icon: OpenAI },
    { name: "Claude", icon: Anthropic },
    { name: "z.AI", icon: ZAI },
    { name: "OpenCode", icon: OpenCode },
    { name: "MongoDB", icon: MongoDB },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "SQL", icon: SQL },
  ],
  navbar: [] as { href: string; icon: ComponentType; label: string }[],
  contact: {
    email: "mati_godoy@outlook.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/matigodoy/portfolio",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matigodoy",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:mati_godoy@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mercado Libre",
      href: "https://mercadolibre.com",
      badges: [],
      location: "Córdoba, Argentina · Hybrid",
      title: "Software Engineer",
      logoUrl: "/mercadolibre_logo.jpeg",
      start: "Mar 2025",
      end: "Jun 2026",
      description:
        "Software Engineer in the **checkout team**. Built and maintained services using **Java** with **Spring Boot** in **hexagonal architecture**, following clean code practices and code review workflows. Used **Datadog**, **Grafana**, **Kibana**, and **New Relic** for observability. Leveraged AI-assisted development with **Cursor**, **Windsurf**, **GitHub Copilot**, and **Claude**.",
    },
    {
      company: "Eclipta",
      href: "https://www.linkedin.com/company/eclipta-argentina",
      badges: ["Founder"],
      location: "Córdoba, Argentina · Remote",
      title: "Co-founder & Software Engineer",
      logoUrl: "/eclipta_argentina_logo.jpeg",
      start: "Jan 2025",
      end: "Present",
      description:
        "Co-founded **Eclipta** and lead development of **Chadbot**, an **AI-powered** messaging platform. Design, develop and ship software with a modern tech stack including **AI services**, **observability** tooling, **automated deployments**, and **workflow automation** to help businesses scale their operations.",
    },
    {
      company: "Universidad Blas Pascal",
      href: "https://ubp.edu.ar",
      badges: [],
      location: "Córdoba, Argentina · Hybrid",
      title: "Software Development Professor",
      logoUrl: "/universidad_blas_pascal_logo.jpeg",
      start: "Jan 2024",
      end: "Sep 2024",
      description:
        "Taught an **Angular** frontend development course at the **Digital Skill Academy**, preparing students with the knowledge and skills required by the software development job market.",
    },
    {
      company: "Bitsion",
      href: "https://bitsion.com",
      badges: [],
      location: "Argentina · Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/bitsion_logo.jpeg",
      start: "Aug 2022",
      end: "Mar 2025",
      description:
        "Full stack development across multiple roles and projects. Built **tucarpeta+®** using **Atomic Design** for Universidad Siglo 21, Universidad Kennedy, and other clients using **Angular 15–18**, **.NET Framework**, **MongoDB**, and **Jenkins**/**Azure DevOps**. Developed **Paycloud**, a mobile wallet app published on **iOS** and **Android** using **FlutterFlow**. Earlier project: **tucarpeta©** for **Claro Argentina** with **AngularJS**, **.NET**, **Razor**, and **MongoDB**.",
    },
    {
      company: "CEDI Tech Consulting",
      href: "",
      badges: [],
      location: "Córdoba, Argentina · Hybrid",
      title: "Business Application Developer",
      logoUrl: "/cedi_tech_consulting_logo.jpeg",
      start: "Jan 2022",
      end: "Aug 2022",
      description:
        "Developed business applications using **.NET**, **Oracle SQL**, **Microsoft Azure**, **Dynamics 365**, **Power BI**, **Power Automate**, and **Power Apps**. Worked with **Agile/Scrum** methodology. Team recognized as a **Microsoft Inspire 2022** Latin America success case.",
    },
    {
      company: "Encode S.A.",
      href: "",
      badges: [],
      location: "Córdoba, Argentina · On-site",
      title: "Full Stack Developer",
      logoUrl: "/encode_s_a__logo.jpeg",
      start: "2021",
      end: "2022",
      description:
        "Developed software for two major projects: **CIDREL** for the Government of Santa Fe Province and **SAE** for Encode SA. Tech stack: **ASP.NET** (.NET Framework 4.7.2), **VB.NET**, **SOAP Web Services**, **MS SQL Server** (stored procedures), **Agile/Scrum**, **GitLab**.",
    },
    {
      company: "datSolutions",
      href: "",
      badges: [],
      location: "Córdoba, Argentina · On-site",
      title: "IT Support Technician",
      logoUrl: "/datsolutions_logo.jpeg",
      start: "2019",
      end: "2021",
      description:
        "Provided technical support to Colegio de Escribanos de la Provincia de Córdoba and PROMA SSA. Managed infrastructure using **VMware ESXi**, **vSphere**, **UniFi**, **MikroTik**, **Cisco**, **Linux**, **FreeBSD**, and **Windows**. Also served as **HP**-authorized service center technician performing hardware and software repairs.",
    },
  ],
  education: [
    {
      school: "Universidad Blas Pascal",
      href: "https://ubp.edu.ar",
      degree: "Bachelor's Degree in Computer Science Engineering",
      logoUrl: "/universidad_blas_pascal_logo.jpeg",
      start: "2019",
      end: "Present",
    },
    {
      school: "Universidad Nacional de Córdoba",
      href: "https://unc.edu.ar",
      degree: "Intensive English Course",
      logoUrl: "/universidad_nacional_cordoba_logo.jpeg",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Chadbot",
      href: "https://chadbot.eclipta.ar/app",
      dates: "Jan 2025 - Present",
      active: true,
      description: {
        en: "AI-powered messaging platform built at Eclipta. Combines intelligent automation, real-time messaging, and observability to help businesses scale their communication workflows.",
        es: "Plataforma de mensajería con IA construida en Eclipta. Combina automatización inteligente, mensajería en tiempo real y observabilidad para ayudar a las empresas a escalar sus flujos de comunicación.",
      },
      technologies: [
        "Java",
        "Docker",
        "Postgres",
        "TypeScript",
        "React",
        "OpenAI",
        "Grok",
        "Grafana",
        "Google Cloud",
      ],
      links: [
        {
          type: "webapp",
          href: "https://chadbot.eclipta.ar/app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chadbot_logo.jpg",
      video: "/jobs/chadbot_app.mp4",
    },
    {
      title: "Chadbot Landing",
      href: "https://chadbot.eclipta.ar/",
      dates: "Jan 2026 - Present",
      active: true,
      description: {
        en: "Landing page for Chadbot, the AI-powered messaging platform by Eclipta.",
        es: "Landing page de Chadbot, la plataforma de mensajería con IA de Eclipta.",
      },
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "website",
          href: "https://chadbot.eclipta.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chadbot-landing.png",
      video: "/jobs/chadbot_landing.mp4",
    },
    {
      title: "MD Equipamientos",
      href: "https://md-equipamientos.com/",
      dates: "2026",
      active: true,
      description: {
        en: "Institutional website and product catalog for a furniture factory.",
        es: "Sitio institucional y catálogo de productos para una fábrica de muebles.",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "website",
          href: "https://md-equipamientos.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/md-equipamientos.jpeg",
      video: "/jobs/md-equipamientos.mp4",
    },
    {
      title: "Mundosegur",
      href: "https://mundosegur.com/",
      dates: "2026",
      active: true,
      description: {
        en: "Institutional website for a private security company.",
        es: "Sitio institucional para una empresa de seguridad privada.",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "website",
          href: "https://mundosegur.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mundosegur.jpg",
      video: "/jobs/mundosegur.mp4",
    },
    {
      title: "Barbarie",
      href: "https://barbarie.com.ar/",
      dates: "2026",
      active: true,
      description: {
        en: "Website for a barbershop.",
        es: "Sitio web para una barbería.",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "website",
          href: "https://barbarie.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/barbarie.jpg",
      video: "",
    },
  ] as {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: { en: string; es: string };
    technologies: string[];
    links: { type: string; href: string; icon: ReactNode }[];
    image: string;
    video: string;
  }[],
  certifications: [
    {
      name: "AI Fundamentals",
      issuer: "Google",
      logoUrl: "/google_logo.jpeg",
      date: "Jul 2026",
      href: "https://www.credly.com/badges/5a39f7fe-f415-4b4f-8308-fd5833bb69a0/whatsapp",
    },
    {
      name: "Java High Performance",
      issuer: "Mercado Libre",
      logoUrl: "/mercadolibre_logo.jpeg",
      date: "Jul 2025",
      href: "",
    },
    {
      name: "MongoDB: The Complete Developer's Guide",
      issuer: "Platzi",
      logoUrl: "/platzi_inc_logo.jpeg",
      date: "Aug 2022",
      href: "",
    },
    {
      name: "Code Review: Best Practices",
      issuer: "Pluralsight",
      logoUrl: "/pluralsight_logo.jpeg",
      date: "Aug 2022",
      href: "",
    },
    {
      name: "EF SET English Certificate 62/100 (C1 Advanced)",
      issuer: "EF SET",
      logoUrl: "/efset_logo.jpeg",
      date: "Jun 2022",
      href: "",
    },
    {
      name: "Curso de C# .NET desde cero hasta lo mas avanzado full stack",
      issuer: "Udemy",
      logoUrl: "/udemy_logo.jpeg",
      date: "2021",
      href: "",
    },
    {
      name: "JavaScript - Basics to Advanced [step by step (2021)]",
      issuer: "Udemy",
      logoUrl: "/udemy_logo.jpeg",
      date: "2021",
      href: "",
    },
    {
      name: "Visual Basic .NET Programming",
      issuer: "Udemy",
      logoUrl: "/udemy_logo.jpeg",
      date: "2021",
      href: "",
    },
  ] as {
    name: string;
    issuer: string;
    logoUrl: string;
    date: string;
    href: string;
  }[],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    win?: string;
    icon?: string;
    links: { title: string; icon: ReactNode; href: string }[];
  }[],
} as const;
