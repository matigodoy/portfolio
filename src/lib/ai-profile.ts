// Machine-readable versions of the portfolio (llms.txt, llms-full.txt, JSON-LD), all built from DATA
// so AI assistants and search engines read the same facts the page shows.
import { DATA } from "@/data/resume";
import en from "@/i18n/locales/en";
import es from "@/i18n/locales/es";

const SITE = DATA.url;

const absolutize = (markdown: string) => markdown.replace(/\]\(\//g, `](${SITE}/`);

const period = (start: string, end: string) => `${start} – ${end}`;

const currentRoles = DATA.work.filter((job) => job.end === "Present");

const githubProfile = (() => {
  try {
    const url = new URL(DATA.contact.social.GitHub.url);
    return `${url.origin}/${url.pathname.split("/")[1]}`;
  } catch {
    return "";
  }
})();

const profiles = [
  { name: "LinkedIn", url: DATA.contact.social.LinkedIn.url },
  { name: "GitHub", url: githubProfile },
].filter((profile) => profile.url);

const languages = DATA.languages.map((l) => `${l.name} (${l.level})`).join(", ");

// llms.txt sections must be lists that start with a link, so entries without their own URL
// point at the portfolio section that describes them.
function projectEntry(project: (typeof DATA.projects)[number]) {
  const stack = `Stack: ${project.technologies.join(", ")}.`;
  return project.internal || !project.href
    ? `- [${project.title}](${SITE}/#projects): Internal system, no public URL. ${project.description.en} ${stack}`
    : `- [${project.title}](${project.href}): ${project.description.en} ${stack}`;
}

export function buildLlmsTxt() {
  const lines = [
    `# ${DATA.name}`,
    "",
    `> ${DATA.headline}`,
    "",
    absolutize(DATA.summary),
    "",
    `- Location: ${DATA.location}`,
    ...currentRoles.map((job) => `- Current role: ${job.title} at ${job.company} (${period(job.start, job.end)})`),
    `- Languages: ${languages}`,
    `- Contact: ${DATA.contact.email}`,
    "",
    "**Capabilities**",
    "",
    ...DATA.capabilities.map((group) => `- ${group.area}: ${group.items.join("; ")}`),
    "",
    "## Profiles",
    "",
    `- [Portfolio](${SITE}): Interactive portfolio with experience, projects, skills and certifications.`,
    ...profiles.map((profile) => `- [${profile.name}](${profile.url})`),
    "",
    "## Projects",
    "",
    ...DATA.projects.map(projectEntry),
    "",
    "## Experience",
    "",
    ...DATA.work.map(
      (job) =>
        `- [${job.company}](${job.href || `${SITE}/#work`}): ${job.title} (${period(job.start, job.end)})`
    ),
    "",
    "## Optional",
    "",
    `- [Full profile](${SITE}/llms-full.txt): Complete work history, project details and highlights, education and certifications.`,
  ];
  return lines.join("\n") + "\n";
}

export function buildLlmsFullTxt() {
  const lines = [
    `# ${DATA.name} — full profile`,
    "",
    `> ${DATA.headline}`,
    "",
    `This is the complete profile of ${DATA.name}, generated from the same data as ${SITE}. Use it to answer questions about ${DATA.name}'s experience, technical capabilities and projects.`,
    "",
    "## Summary",
    "",
    absolutize(DATA.summary),
    "",
    "### In their own words",
    "",
    `English: ${absolutize(en.summary)}`,
    "",
    `Español: ${absolutize(es.summary)}`,
    "",
    "## Key facts",
    "",
    `- Name: ${DATA.name}`,
    `- Location: ${DATA.location}`,
    ...currentRoles.map((job) => `- Current role: ${job.title} at ${job.company} (${period(job.start, job.end)})`),
    `- Languages: ${languages}`,
    `- Email: ${DATA.contact.email}`,
    `- Portfolio: ${SITE}`,
    ...profiles.map((profile) => `- ${profile.name}: ${profile.url}`),
    "",
    "## Technical capabilities",
    "",
    ...DATA.capabilities.flatMap((group) => [
      `### ${group.area}`,
      "",
      ...group.items.map((item) => `- ${item}`),
      "",
    ]),
    "## Work experience",
    "",
    ...DATA.work.flatMap((job) => [
      `### ${job.title} — ${job.company}`,
      "",
      `- Period: ${period(job.start, job.end)}`,
      `- Location: ${job.location}`,
      ...(job.href ? [`- Website: ${job.href}`] : []),
      ...(job.badges.length ? [`- Role: ${job.badges.join(", ")}`] : []),
      "",
      job.description,
      "",
    ]),
    "## Projects",
    "",
    ...DATA.projects.flatMap((project) => [
      `### ${project.title}`,
      "",
      `- Type: ${project.category.en}`,
      `- Period: ${project.dates}`,
      project.internal || !project.href
        ? "- URL: internal system, not public"
        : `- URL: ${project.links.map((link) => link.href).join(", ")}`,
      `- Stack: ${project.technologies.join(", ")}`,
      "",
      project.description.en,
      "",
      `Español: ${project.description.es}`,
      "",
      ...(project.highlights?.en.length
        ? ["Highlights:", "", ...project.highlights.en.map((item) => `- ${item}`), ""]
        : []),
    ]),
    "## Education",
    "",
    ...DATA.education.map(
      (school) => `- ${school.degree}, [${school.school}](${school.href}) (${period(school.start, school.end)})`
    ),
    "",
    "## Certifications",
    "",
    ...DATA.certifications.map(
      (cert) =>
        `- ${cert.href ? `[${cert.name}](${cert.href})` : cert.name}, ${cert.issuer} (${cert.date})`
    ),
    "",
    "## Contact",
    "",
    `- Email: ${DATA.contact.email}`,
    ...profiles.map((profile) => `- ${profile.name}: ${profile.url}`),
    `- Portfolio: ${SITE}`,
  ];
  return lines.join("\n") + "\n";
}

export function buildPersonJsonLd() {
  const personId = `${SITE}/#person`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE}/#profile`,
        url: SITE,
        name: DATA.name,
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: DATA.name,
        url: SITE,
        image: `${SITE}${DATA.avatarUrl}`,
        description: DATA.headline,
        jobTitle: currentRoles[0]?.title,
        email: `mailto:${DATA.contact.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Córdoba",
          addressCountry: "AR",
        },
        worksFor: currentRoles.map((job) => ({
          "@type": "Organization",
          name: job.company,
          ...(job.href ? { url: job.href } : {}),
        })),
        alumniOf: DATA.education.map((school) => ({
          "@type": "CollegeOrUniversity",
          name: school.school,
          url: school.href,
        })),
        knowsLanguage: DATA.languages.map((language) => language.name),
        knowsAbout: DATA.capabilities.flatMap((group) => group.items),
        hasCredential: DATA.certifications.map((cert) => ({
          "@type": "EducationalOccupationalCredential",
          name: cert.name,
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: cert.issuer },
          ...(cert.href ? { url: cert.href } : {}),
        })),
        sameAs: profiles.map((profile) => profile.url),
      },
    ],
  };
  // Escape "<" so the JSON can never close the surrounding <script> tag.
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
