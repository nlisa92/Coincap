export const calculatePortfolio = (portfolioItems, currencies) => {
  let total = 0;
  let yesterdayTotal = 0;

  portfolioItems.forEach((item) => {
    const currency = currencies.find((c) => c.id === item.id);
    if (!currency) return;

    const price = Number(currency.priceUsd);
    const price24h = price / (1 + Number(currency.changePercent24Hr) / 100);

    total += item.amount * price;
    yesterdayTotal += item.amount * price24h;
  });

  const diff = total - yesterdayTotal;
  const diffPercent = yesterdayTotal ? (diff / yesterdayTotal) * 100 : 0;

  return { total, diff, diffPercent };
};
