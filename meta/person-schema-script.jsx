const PersonSchemaScript = ({ person }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person?.name || "Rashed Abdullah",
    alternateName: person?.alternateName || "রাশেদ আব্দুল্লাহ",
    url: person?.website || "https://rashedabdullah.com",
    image:
      person?.image || "https://i.ibb.co/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
    jobTitle: person?.jobTitle || "Web Developer, Teacher",
    worksFor: {
      "@type": "Organization",
      name: person?.worksFor?.name || "Jamiatul Latif Rupganj Madrasha",
      url: person?.worksFor?.url || "https://jamiatullatif.com",
    },
    sameAs: person?.sameAs || [
      "https://www.facebook.com/Rashed4Abdullah",
      "https://www.linkedin.com/in/rashed4abdullah/",
      "https://github.com/RashedAbdullah",
      "https://www.instagram.com/rashed4abdullah",
    ],
    knowsAbout: person?.skills || [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "TaliwndCSS",
      "HTML",
      "CSS",
      "Teaching",
    ],
    homeLocation: {
      "@type": "Place",
      name: person?.location?.name || "Feni, Bangladesh",
      address: {
        "@type": "PostalAddress",
        addressLocality: person?.location?.addressLocality || "Feni",
        addressCountry: person?.location?.addressCountry || "Bangladesh",
      },
    },
    email: person?.email || "abdulahad4rashed@gmail.com",
    telephone: person?.telephone || "+8801603443214",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: person?.alumni || "Jamia Shariyyah Malibagh, Dhaka",
    },
    birthDate: person?.birthDate ||  "1999-11-30",
    nationality: person?.nationality || "Bangladeshi",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
    />
  );
};

export default PersonSchemaScript;
