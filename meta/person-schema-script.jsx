const PersonSchemaScript = ({ person }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person?.name || "রাশেদ আব্দুল্লাহ",
    alternateName: person?.alternateName || "Rashed Abdullah",
    url: person?.website || "https://rashedabdullah.com",
    image:
      person?.image || "https://i.ibb.co/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
    jobTitle: person?.jobTitle || "সফটওয়্যার ডেভেলপার, শিক্ষক",
    worksFor: {
      "@type": "Organization",
      name: person?.worksFor?.name || "জামিয়াতুল লতিফ রূপগঞ্জ, নারায়ণগঞ্জ।",
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
      name: person?.location?.name || "ফেনী, বাংলাদেশ",
      address: {
        "@type": "PostalAddress",
        addressLocality: person?.location?.addressLocality || "ফেনী",
        addressCountry: person?.location?.addressCountry || "বাংলাদেশ",
      },
    },
    email: person?.email || "abdulahad4rashed@gmail.com",
    telephone: person?.telephone || "+8801603443214",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: person?.alumni || "জামিয়া শারইয়্যাহ মালিগাব, ঢাকা।",
    },
    birthDate: person?.birthDate || "1999-11-30",
    nationality: person?.nationality || "বাংলাদেশী",
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
