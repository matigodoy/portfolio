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

export type Localized = { en: string; es: string };
export type ProjectImage = { src: string; alt: Localized; frame: "browser" | "phone" };
export type ProjectLink = { type: string; href: string; icon: ReactNode };

export const DATA = {
  name: "Matias Godoy",
  initials: "MG",
  url: "https://www.matigodoy.com.ar",
  location: "Córdoba, Argentina",
  locationLink: "https://www.google.com/maps/place/Cordoba,+Argentina/",
  description: "Come in and get to know me a little.",
  headline:
    "Software Engineer and co-founder of Eclipta in Córdoba, Argentina. Builds SaaS products, ERPs and AI-powered systems with Java/Spring Boot, TypeScript/React, React Native and .NET. Ex-Mercado Libre checkout team.",
  summary:
    "Software engineer focused on building scalable systems and AI-powered products. Co-founded [Eclipta](https://eclipta.com.ar) to build SaaS products, management systems and AI automation for businesses. Previously a Software Engineer at [Mercado Libre](/#work) in the checkout team using Java/Spring Boot and hexagonal architecture. Spent 2+ years at [Bitsion](/#work) developing Angular/.NET systems for universities and telcos, and also [taught Angular](/#work) at Universidad Blas Pascal.",
  avatarUrl: "/me.png",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1 Advanced (EF SET 62/100)" },
  ] as { name: string; level: string }[],
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
  capabilities: [
    {
      area: "Backend & architecture",
      items: [
        "Java 21",
        "Spring Boot (WebFlux, Security, R2DBC)",
        "Reactive programming with Project Reactor",
        "Hexagonal architecture",
        "REST APIs and webhooks",
        "C# / .NET Framework, ASP.NET, VB.NET",
        "SOAP web services",
        "Node.js",
      ],
    },
    {
      area: "Frontend",
      items: [
        "TypeScript",
        "React 19",
        "Next.js",
        "Vite",
        "Tailwind CSS",
        "HeroUI",
        "TanStack Query and Zustand",
        "Angular 15–18 and AngularJS",
        "Atomic Design",
        "Progressive Web Apps",
      ],
    },
    {
      area: "Mobile",
      items: [
        "React Native with Expo (Expo Router, EAS, push notifications)",
        "FlutterFlow (iOS and Android wallet app)",
      ],
    },
    {
      area: "Data",
      items: [
        "PostgreSQL (R2DBC, Cloud SQL)",
        "MongoDB",
        "Microsoft SQL Server (stored procedures)",
        "Oracle SQL",
      ],
    },
    {
      area: "AI",
      items: [
        "OpenAI (Responses API, structured outputs, tool calling, audio transcription)",
        "Google Gemini",
        "LLM agents with human handoff",
        "AI-assisted development (Claude, Cursor, Windsurf, GitHub Copilot, OpenCode, z.AI)",
      ],
    },
    {
      area: "Payments & integrations",
      items: [
        "Mercado Pago (Checkout Pro, in-store QR, subscriptions, split payments, marketplace OAuth)",
        "WhatsApp, Instagram and Telegram messaging APIs",
        "Google Calendar API",
        "Firebase Authentication",
        "Web push notifications",
      ],
    },
    {
      area: "Cloud & DevOps",
      items: [
        "Google Cloud (Cloud Run, Cloud SQL, Cloud Storage, Artifact Registry, Workload Identity Federation)",
        "Firebase Hosting",
        "Docker and Cloud Native Buildpacks",
        "GitHub Actions CI/CD",
        "Jenkins, Azure DevOps and GitLab",
        "Microsoft Azure",
      ],
    },
    {
      area: "Observability",
      items: ["OpenTelemetry", "Datadog", "Grafana", "Kibana", "New Relic"],
    },
    {
      area: "Microsoft business apps",
      items: ["Dynamics 365", "Power BI", "Power Automate", "Power Apps"],
    },
    {
      area: "Infrastructure & networking",
      items: [
        "VMware ESXi and vSphere",
        "Linux, FreeBSD and Windows",
        "UniFi, MikroTik and Cisco networking",
        "Hardware repair (HP-authorized service center)",
      ],
    },
    {
      area: "Practices",
      items: [
        "Agile / Scrum",
        "Clean code and code review",
        "Technical SEO (JSON-LD, Open Graph, sitemaps)",
        "Teaching and mentoring",
      ],
    },
  ] as { area: string; items: string[] }[],
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
      href: "https://eclipta.com.ar",
      badges: ["Founder"],
      location: "Córdoba, Argentina · Remote",
      title: "Co-founder & Software Engineer",
      logoUrl: "/eclipta_argentina_logo.jpeg",
      start: "Jan 2025",
      end: "Present",
      description:
        "Co-founded **Eclipta**, a software lab that builds its own SaaS products and custom systems for businesses. Lead development of **Chadbot**, an **AI** messaging platform for WhatsApp, Instagram and Telegram, and **Jugador**, a booking and payments platform for sports venues with web and **iOS/Android** apps. Also build **ERPs** and websites for clients. Stack: **Java/Spring Boot** (WebFlux, hexagonal architecture), **PostgreSQL**, **React/Next.js**, **React Native**, **OpenAI**, **Mercado Pago**, **Google Cloud Run** and **Firebase**, with **OpenTelemetry** observability and **GitHub Actions** deployments.",
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
      href: "https://www.bitsion.com/",
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
      title: "Jugador",
      href: "https://jugador.com.ar/",
      dates: "Jul 2026 - Present",
      active: true,
      category: { en: "Own product · SaaS", es: "Producto propio · SaaS" },
      description: {
        en: "Booking and management platform for sports venues: players book and split the payment without an account, while venues run their schedule, Mercado Pago payments and stats.",
        es: "Plataforma de reservas y gestión para predios deportivos: los jugadores reservan y dividen el pago sin crear cuenta, y el predio maneja agenda, cobros con Mercado Pago y estadísticas.",
      },
      highlights: {
        en: [
          "Guest booking with split payment via Mercado Pago",
          "Owner panel: schedule, cash registers and stats",
          "Companion iOS/Android app with push notifications",
          "AI assistant for venue staff, built on OpenAI",
        ],
        es: [
          "Reserva sin cuenta y pago dividido con Mercado Pago",
          "Panel del predio: agenda, cajas y estadísticas",
          "App iOS/Android complementaria con avisos push",
          "Asistente de IA para el equipo del predio, con OpenAI",
        ],
      },
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React",
        "React Native",
        "TypeScript",
        "Mercado Pago",
        "OpenAI",
        "Firebase",
        "Google Cloud",
      ],
      links: [
        {
          type: "webapp",
          href: "https://jugador.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [
        { src: "/projects/jugador-panel.webp", alt: { en: "Jugador venue dashboard", es: "Panel del predio en Jugador" }, frame: "browser" },
        { src: "/projects/jugador-reserva.webp", alt: { en: "Jugador court booking on mobile", es: "Reserva de cancha en la app de Jugador" }, frame: "phone" },
        { src: "/projects/jugador-confirmada.webp", alt: { en: "Jugador booking confirmation on mobile", es: "Confirmación de reserva en la app de Jugador" }, frame: "phone" },
      ],
    },
    {
      title: "Chadbot",
      href: "https://chadbot.eclipta.com.ar/",
      dates: "Jan 2025 - Present",
      active: true,
      category: { en: "Own product · AI SaaS", es: "Producto propio · SaaS con IA" },
      description: {
        en: "AI messaging platform for small businesses and sales teams: it answers leads on WhatsApp, Instagram and Telegram and hands the conversation off to the right person.",
        es: "Plataforma de mensajería con IA para emprendedores y equipos comerciales: responde leads en WhatsApp, Instagram y Telegram y deriva la conversación a la persona indicada.",
      },
      highlights: {
        en: [
          "Unified inbox for WhatsApp, Instagram and Telegram",
          "AI replies with handoff to human agents",
          "AI appointment booking synced to Google Calendar",
          "Subscription billing with Mercado Pago",
        ],
        es: [
          "Bandeja unificada de WhatsApp, Instagram y Telegram",
          "Respuestas con IA y derivación a agentes humanos",
          "Turnos agendados por IA en Google Calendar",
          "Suscripciones y cobros con Mercado Pago",
        ],
      },
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Next.js",
        "TypeScript",
        "OpenAI",
        "Mercado Pago",
        "Firebase",
        "Docker",
        "Google Cloud",
      ],
      links: [
        {
          type: "webapp",
          href: "https://chadbot.eclipta.com.ar/app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "landing",
          href: "https://chadbot.eclipta.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [
        { src: "/projects/chadbot-inbox.webp", alt: { en: "Chadbot unified inbox", es: "Bandeja unificada de Chadbot" }, frame: "browser" },
        { src: "/projects/chadbot-landing.png", alt: { en: "Chadbot landing page", es: "Landing page de Chadbot" }, frame: "browser" },
      ],
    },
    {
      title: "Marinic",
      href: "",
      dates: "Oct 2026 - Present",
      active: true,
      internal: true,
      category: { en: "ERP + point of sale", es: "ERP + punto de venta" },
      description: {
        en: "ERP and point-of-sale system for a clothing brand: checkout with Mercado Pago QR, inventory, exchanges and customers. Currently in development.",
        es: "ERP y punto de venta para una marca de ropa: caja con QR de Mercado Pago, inventario, cambios y clientes. Actualmente en desarrollo.",
      },
      highlights: {
        en: [
          "Mercado Pago checkout with in-store QR and payment link",
          "Inventory with stock counts, transfers and barcode labels",
          "Cash register with blind count and PIN approvals",
          "Exchanges, returns and PDF receipts with QR",
        ],
        es: [
          "Cobro con QR en caja y link de pago de Mercado Pago",
          "Inventario con conteos, traslados y códigos de barras",
          "Caja con arqueo ciego y autorizaciones con PIN",
          "Cambios, devoluciones y comprobantes PDF con QR",
        ],
      },
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Mercado Pago",
        "Firebase",
        "Google Cloud",
      ],
      links: [],
      images: [
        { src: "/projects/marinic-ventas.webp", alt: { en: "Marinic point of sale", es: "Punto de venta de Marinic" }, frame: "browser" },
        { src: "/projects/marinic-inventario.webp", alt: { en: "Marinic inventory", es: "Inventario de Marinic" }, frame: "browser" },
      ],
    },
    {
      title: "MD Equipamientos",
      href: "https://md-equipamientos.com/",
      dates: "2026",
      active: true,
      category: { en: "Website + catalog", es: "Sitio + catálogo" },
      description: {
        en: "Website and online catalog of custom furniture for a furniture factory, showing products by category and completed home and commercial projects.",
        es: "Sitio web y catálogo online de muebles a medida para una fábrica de muebles, con productos por categoría y trabajos realizados para hogares y comercios.",
      },
      highlights: {
        en: [
          "Product catalog by category with full-screen photo viewer",
          "Project gallery split by home and commercial work",
          "Per-route SEO with Open Graph and JSON-LD",
          "Image pipeline with AVIF/WebP variants and WhatsApp CTA",
        ],
        es: [
          "Catálogo por categoría con fotos ampliables",
          "Galería de trabajos separada en hogar y comercio",
          "SEO por ruta con Open Graph y JSON-LD",
          "Imágenes optimizadas en AVIF/WebP y botón de WhatsApp",
        ],
      },
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
      links: [
        {
          type: "website",
          href: "https://md-equipamientos.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [{ src: "/projects/md.webp", alt: { en: "MD Equipamientos website", es: "Sitio web de MD Equipamientos" }, frame: "browser" }],
    },
    {
      title: "Warrior",
      href: "https://www.warriorargentina.com/",
      dates: "2026",
      active: true,
      category: { en: "Website redesign", es: "Rediseño web" },
      description: {
        en: "Redesigned marketing website for a fleet satellite-tracking company in Córdoba, Argentina, presenting its services, plans and client login.",
        es: "Rediseño del sitio institucional de una empresa de seguimiento satelital de flotas de Córdoba, con sus servicios, planes y acceso para clientes.",
      },
      highlights: {
        en: [
          "Animated fleet map hero with vehicle cards",
          "Plan comparison: Standard, Pro and Total",
          "Animated stat counters and client logo carousel",
          "Light/dark theme with persisted preference",
        ],
        es: [
          "Hero con mapa de flota animado y fichas de vehículos",
          "Comparativa de planes Standard, Pro y Total",
          "Contadores animados y carrusel de logos de clientes",
          "Tema claro/oscuro con preferencia guardada",
        ],
      },
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
      ],
      links: [
        {
          type: "website",
          href: "https://www.warriorargentina.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [{ src: "/projects/warrior.webp", alt: { en: "Warrior website", es: "Sitio web de Warrior" }, frame: "browser" }],
    },
    {
      title: "Docta Steel",
      href: "https://doctasteel.com/",
      dates: "2026",
      active: true,
      category: { en: "Website redesign", es: "Rediseño web" },
      description: {
        en: "Website redesign for a steel framing construction company in Córdoba, with services, a coverage map, a project gallery and a technical service page.",
        es: "Rediseño del sitio web de una constructora de steel framing en Córdoba, con servicios, mapa de zonas de cobertura, galería de obras y página de servicio técnico.",
      },
      highlights: {
        en: [
          "Animated before/after image slider in the hero",
          "Interactive coverage map with GeoJSON zones",
          "Filterable gallery of photos, YouTube and Instagram",
          "Quote form that opens a prefilled WhatsApp message",
        ],
        es: [
          "Slider antes/después animado en el hero",
          "Mapa interactivo de zonas de cobertura con GeoJSON",
          "Galería filtrable de fotos, YouTube e Instagram",
          "Formulario de presupuesto que abre WhatsApp precargado",
        ],
      },
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "Leaflet",
      ],
      links: [
        {
          type: "website",
          href: "https://doctasteel.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [{ src: "/projects/docta.webp", alt: { en: "Docta Steel website", es: "Sitio web de Docta Steel" }, frame: "browser" }],
    },
    {
      title: "Mundosegur",
      href: "https://mundosegur.com/",
      dates: "2026",
      active: true,
      category: { en: "Institutional website", es: "Sitio institucional" },
      description: {
        en: "Institutional website for a private security company in Córdoba, with a printable service brochure and WhatsApp contact.",
        es: "Sitio institucional para una empresa de seguridad privada de Córdoba, con cartilla de servicios imprimible y contacto por WhatsApp.",
      },
      highlights: {
        en: [
          "Printable service brochure",
          "WhatsApp quote CTA and embedded map",
          "Auto-advancing hero slider",
          "AVIF/WebP images with picture fallbacks",
        ],
        es: [
          "Cartilla de servicios imprimible",
          "CTA de presupuesto por WhatsApp y mapa embebido",
          "Slider de portada con avance automático",
          "Imágenes AVIF/WebP con fallback",
        ],
      },
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Apache"],
      links: [
        {
          type: "website",
          href: "https://mundosegur.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [{ src: "/projects/mundosegur.webp", alt: { en: "Mundosegur website", es: "Sitio web de Mundosegur" }, frame: "browser" }],
    },
    {
      title: "Barbarie",
      href: "https://barbarie.com.ar/",
      dates: "2026",
      active: true,
      category: { en: "Institutional website", es: "Sitio institucional" },
      description: {
        en: "Website for a premium barbershop in Córdoba, presenting its story, photo gallery, team, client reviews and opening hours.",
        es: "Sitio para una barbería premium en Córdoba, con su historia, galería de fotos, equipo, opiniones de clientes y horarios de atención.",
      },
      highlights: {
        en: [
          "Story, gallery, team and reviews sections",
          "Masonry photo gallery with hover effects",
          "Floating WhatsApp button for booking inquiries",
        ],
        es: [
          "Secciones de historia, galería, equipo y opiniones",
          "Galería de fotos tipo masonry con efectos hover",
          "Botón flotante de WhatsApp para consultas de turnos",
        ],
      },
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      links: [
        {
          type: "website",
          href: "https://barbarie.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      images: [{ src: "/projects/barbarie.webp", alt: { en: "Barbarie website", es: "Sitio web de Barbarie" }, frame: "browser" }],
    },
  ] as {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    internal?: boolean;
    category: Localized;
    description: Localized;
    highlights?: { en: string[]; es: string[] };
    technologies: string[];
    links: ProjectLink[];
    images: ProjectImage[];
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
