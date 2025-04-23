import addLeadingZero from "./addLeadingZero";

export default function timestamp2dm({
  timestamp,
}: {
  timestamp: number;
}): string {
  const date = new Date(timestamp * 1000);

  const day = addLeadingZero({ num: date.getDate() });
  const month = addLeadingZero({ num: date.getMonth() });
  const year = addLeadingZero({ num: date.getFullYear() });

  return `${day}.${month}`;
}
