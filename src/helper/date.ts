export default function getFormattedDateTime() {
  const now = new Date();

  const date =
    (now.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    now.getDate().toString().padStart(2, "0") +
    "/" +
    now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;

  return `${date}, ${time}`;
}
