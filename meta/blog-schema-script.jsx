const BlogSchemaScript = ({ blog }) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog?.title,
    image: blog?.image
      ? blog?.image
      : "https://i.ibb.co.com/kHSHKLx/code-image.webp",
    author: {
      "@type": "Person",
      name: blog?.author || "Rashed Abdullah",
      url: "https://rashedabdullah.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Rashed Abdullah",
      logo: {
        "@type": "ImageObject",
        url: "https://i.ibb.co/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
      },
    },
    datePublished: blog?.createdAt || new Date().toISOString(),
    description: blog?.description || "No description available",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rashedabdullah.com/blogs/${blog.title
        .replaceAll(" ", "-")
        .toLowerCase()}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogSchema, null, 2),
      }}
    />
  );
};

export default BlogSchemaScript;
