export default function useCurrencyFormatter() {
  const formatter = new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA",
  });
  return (number: number) => formatter.format(number);
}
