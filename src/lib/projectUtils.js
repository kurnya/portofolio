const LIVE_STATUSES = ["Online", "Aktif"];
const RELEASE_STATUSES = ["Release Tersedia", "Open Source"];

export function statusClass(status) {
  if (LIVE_STATUSES.includes(status)) return "live";
  if (RELEASE_STATUSES.includes(status)) return "rel";
  return "";
}

export function gallerySetOf(project) {
  const actions = [...(project.links ?? []), project.secondaryAction, project.tertiaryAction];
  return actions.find((a) => a?.action === "gallery")?.gallerySet ?? null;
}

export function isPrivate(project) {
  return (project.links ?? []).length === 0;
}
