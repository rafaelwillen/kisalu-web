export default function useCompactNumber() {
  const formatter = new Intl.NumberFormat("pt-AO", {
    notation: "compact",
    compactDisplay: "long",
  });

  return (value: number) => formatter.format(value);
}
