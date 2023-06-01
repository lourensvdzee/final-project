export function getAverageDurability(durability) {
  const count = durability.length;
  if (count > 0) {
    const totalMonths = durability.reduce((total, item) => {
      const startDate = new Date(item.start);
      const endDate = new Date(item.end);
      const months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        endDate.getMonth() -
        startDate.getMonth();
      return total + months;
    }, 0);
    const averageMonths = totalMonths / count;
    const years = Math.floor(averageMonths / 12);
    const months = Math.round(averageMonths % 12);
    return `${years}.${months} years`;
  }
  return 0;
}
