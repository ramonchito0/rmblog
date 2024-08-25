export default function DateFormat(date) {
  const dateFormat = new Date(date);
  return dateFormat.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
