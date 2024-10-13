export default function sitemap() {
  return [
    {
      url: "https://rashedabdullah.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rashedabdullah.vercel.app/youtube",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://rashedabdullah.vercel.app/youtube/quran",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://rashedabdullah.vercel.app/youtube/nasheed",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
