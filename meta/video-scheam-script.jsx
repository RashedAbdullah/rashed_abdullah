const VideoScheamScript = ({ video }) => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video?.title,
    description: video?.description,
    thumbnailUrl: [video?.thumbnailUrl],
    contentUrl: `https://www.youtube.com/watch?v=${video?.id}`,
    embedUrl: `https://www.youtube.com/embed/${video?.embedCode}`,
    uploadDate: video?.publishedAt,
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/WatchAction",
        userInteractionCount: video?.totalView,
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/LikeAction",
        userInteractionCount: video?.likes,
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/CommentAction",
        userInteractionCount: video?.comments,
      },
    ],
    keywords: video?.tags?.join(", "),
    creator: {
      "@type": "Person",
      name: "Rashed Abdullah",
      url: "https://rashedabdullah.vercel.app",
    },
    contentLocation: {
      "@type": "Place",
      name: "Bangladesh",
    },
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

export default VideoScheamScript;
