const DiarySchemaScript = ({ entries }) => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Diary of Rashed Abdullah",
    description:
      "A personal diary documenting the daily life and reflections of Rashed Abdullah.",
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
        name: "Rashed Abdullah",
      },
      publisher: {
        "@type": "Organization",
        name: "Rashed Abdullah's Diray",
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
