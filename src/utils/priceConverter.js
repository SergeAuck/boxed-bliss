export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    //minimumFractionDigits: 0,
    //maximumFractionDigits: 0,
  }).format(number / 100);
  return newNumber;
};
