export const getPackagePrice = (
  price: Record<string, string>,
  target: string,
) => {
  if (typeof price === "undefined" || typeof price[target] === "undefined")
    return "0";

  return price[target];
};
