export function formatCurrency(value) {
  const num = Number(value);
  if (isNaN(num)) return "_";
  if (num >= 1_000_000_000) {
    const billions = num / 1_000_000_000;
    return `${billions.toFixed(1)} млрд $`;
  }
  return `${num.toFixed(2)} $`;
}
