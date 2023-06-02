export function getLogoPath(domain: string) {
  const domainParts = domain.split(".");
  const logoFileNames = [
    "indigo",
    "adorama",
    "bestbuy",
    "sears",
    "argos",
    "walmart",
    "rakuten",
    "newegg",
    "target",
    "brookstone",
    "pricefalls",
    "macys",
    "guitarcenter",
    "musiciansfriend",
    "onbuy",
  ];

  for (const part of domainParts) {
    if (logoFileNames.includes(part)) {
      return `/logos/${part}.png`;
    }
  }

  return ""; // return an empty string if no matching logo is found
}
