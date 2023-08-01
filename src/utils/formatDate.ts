export function formatDate(date: string): string {
  const d: Date = new Date(date);
  const dtf: Intl.DateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: mo }, , { value: da }, , { value: ye }] =
    dtf.formatToParts(d);

  return `${da} ${mo} ${ye}`;
}
