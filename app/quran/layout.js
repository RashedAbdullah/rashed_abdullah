export const metadata = {
  title: "Quran Kareem - Recitations and Translations",
  description:
    "Explore the Holy Quran with recitations, translations, and interpretations. Accessible, clear, and user-friendly Quranic resource.",
  keywords:
    "Quran, Quran Kareem, Recitation, Translation, Islamic Studies, Holy Quran",
  openGraph: {
    title: "Quran Kareem - Recitations and Translations",
    description:
      "Explore the Holy Quran with recitations, translations, and interpretations. Accessible, clear, and user-friendly Quranic resource.",
    type: "website",
    url: "https://rashedabdullah.com",
    images: [
      {
        url: "https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
        width: 1200,
        height: 630,
        alt: "Quran Kareem Thumbnail",
      },
    ],
  },
};

const QuranKareemLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      {children}
    </div>
  );
};

export default QuranKareemLayout;
