import type { MetadataRoute } from "next";

const BASE = "https://highlanderbuyshomes.com";

const spanishCities = [
  "scottsdale-arizona","mesa-arizona","chandler-arizona","gilbert-arizona",
  "glendale-arizona","tempe-arizona","peoria-arizona","avondale-arizona",
  "surprise-arizona","goodyear-arizona","fort-worth-texas","arlington-texas",
  "garland-texas","irving-texas","plano-texas","frisco-texas",
  "mckinney-texas","mesquite-texas","denton-texas","carrollton-texas",
];

const englishCities = [
  "phoenix-az","scottsdale-az","mesa-az","chandler-az","gilbert-az",
  "glendale-az","tempe-az","peoria-az","avondale-az","surprise-az","goodyear-az",
  "dallas-tx","fort-worth-tx","arlington-tx","garland-tx","irving-tx",
  "plano-tx","frisco-tx","mckinney-tx","mesquite-tx","denton-tx","carrollton-tx",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: BASE,                                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/cash-offer`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/vender-mi-casa-rapido`,         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/sell`,                          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for-agents`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`,                         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const spanishPages: MetadataRoute.Sitemap = spanishCities.map((slug) => ({
    url: `${BASE}/compramos-casas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const englishPages: MetadataRoute.Sitemap = englishCities.map((slug) => ({
    url: `${BASE}/we-buy-houses/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...core, ...spanishPages, ...englishPages];
}
