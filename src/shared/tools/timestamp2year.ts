import addLeadingZero from "./addLeadingZero";

export default function timestamp2year({
  timestamp,
}: {
  timestamp: number;
}): string {
  const date = new Date(timestamp * 1000);

  const year = addLeadingZero({ num: date.getFullYear() });

  return `${year}`;
}
