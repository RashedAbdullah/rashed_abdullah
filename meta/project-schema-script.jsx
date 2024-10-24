const ProjectSchemaScript = ({ project }) => {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project?.title,
    description: project?.description,
    image: project?.image
      ? project?.image
      : "https://i.ibb.co.com/kHSHKLx/code-image.webp",
    url: project?.link,
    creator: {
      "@type": "Person",
      name: "Rashed Abdullah",
      url: "https://rashedabdullah.com",
    },
    datePublished: project?.publishedAt || "2024-01-01", // If the date is available
    keywords: project?.tags?.join(", ") || "Web Development, React, Next.js", // Add project tags if available
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(projectSchema, null, 2),
      }}
    />
  );
};

export default ProjectSchemaScript;
