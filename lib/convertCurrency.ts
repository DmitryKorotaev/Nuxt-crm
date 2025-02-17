export const converCurrency = (amount: string | number) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(Number(amount));
};
