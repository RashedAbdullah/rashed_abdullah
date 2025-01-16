const DiarySchemaScript = ({ entries }) => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "রাশেদ আব্দুল্লাহ’র দিনলিপি।",
    description:
      "রাশেদ আব্দুল্লাহ’র দিনলিপি। শিক্ষাদিক্ষা। ভাবনার আদানপ্রদান। প্রভৃতি।",
    author: {
      "@type": "Person",
      name: "Rashed Abdullah",
      url: "https://rashedabdullah.com",
    },
    blogPost: entries.map((entry) => ({
      "@type": "BlogPosting",
      headline: `Diary Entry for ${entry.date}`,
      datePublished: new Date(entry.date).toISOString(),
      articleBody: entry.text,
      author: {
        "@type": "Person",
        name: "রাশেদ আব্দুল্লাহ",
      },
      publisher: {
        "@type": "Organization",
        name: "রাশেদ আব্দুল্লাহ’র দিনলিপি।",
        logo: {
          "@type": "ImageObject",
          url: "https://i.ibb.co/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      />
    </>
  );
};

export default DiarySchemaScript;
