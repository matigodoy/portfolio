export const LINK_LABEL_KEYS: Record<string, string> = {
  webapp: "projectTypeWebapp",
  website: "projectTypeWebsite",
  landing: "projectTypeLanding",
  appstore: "projectTypeAppStore",
  playstore: "projectTypePlayStore",
};

export function displayHost(href?: string) {
  if (!href) return "";
  try {
    return new URL(href).host.replace(/^www\./, "");
  } catch {
    return href;
  }
}
