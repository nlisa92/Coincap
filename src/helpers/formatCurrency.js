export const formatCurrency = (value) =>
  value !== "null" && value !== "undefined"
    ? Number(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      })
    : "—";
