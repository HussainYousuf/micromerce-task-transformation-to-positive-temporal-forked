type PositiveTemporal =
  | { days: string; }
  | { weeks: string; }
  | { months: string; }
  | { years: string; }
  | { hours: string; }
  | { minutes: string; };

const unitMap = {
  "d": "days",
  "day": "days",
  "month": "months",
  "m": "months",
  "y": "years",
  "year": "years"
};

type toPositiveTemporal = (amount: string, unit: string, nonNegative?: boolean | string) => PositiveTemporal | string;

export const toPositiveTemporal: toPositiveTemporal = (amount, unit, nonNegative) => {
  // your code here
  // @ts-ignore
  const key: string = unitMap[unit.toLowerCase()];
  if (!nonNegative && amount === "0") {
    return `amount zero in toPositiveTemporal is invalid, unit: ${unit}`;
  } else {
    return {
      [key]: amount
    } as PositiveTemporal;
  }

};
