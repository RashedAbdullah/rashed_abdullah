export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
