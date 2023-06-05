type RelativeTimeFormatUnit =
  | "year"
  | "years"
  | "quarter"
  | "quarters"
  | "month"
  | "months"
  | "week"
  | "weeks"
  | "day"
  | "days"
  | "hour"
  | "hours"
  | "minute"
  | "minutes"
  | "second"
  | "seconds";

type DivisionType = {
  amount: number;
  name: RelativeTimeFormatUnit;
};

const LOCALE = "pt-AO";
const DIVISIONS: ReadonlyArray<Readonly<DivisionType>> = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export function formatToCompactNumber(value: number): string {
  const formatter = new Intl.NumberFormat(LOCALE, {
    notation: "compact",
    compactDisplay: "long",
  });

  return formatter.format(value);
}

export function formatToCurrency(value: number): string {
  const formatter = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: "AOA",
  });

  return formatter.format(value);
}

export function formatToNumber(value: number) {
  const formatter = new Intl.NumberFormat(LOCALE);
  return formatter.format(value);
}

export function formatToRelativeDate(date: Date) {
  const formatter = new Intl.RelativeTimeFormat(LOCALE, {
    numeric: "auto",
  });

  let duration = (date.getTime() - Date.now()) / 1000;
  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}
