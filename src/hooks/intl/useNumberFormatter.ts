export default function useNumberFormatter() {
  const formatter = new Intl.NumberFormat("pt-AO");
  return (number: number) => formatter.format(number);
}
