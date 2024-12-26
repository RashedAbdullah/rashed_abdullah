"use client";

import { parseMarkdown } from "@/lib/parseMarkdown";
import React, { useEffect, useState } from "react";

const Insha3thPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      const contentHtml = await parseMarkdown();
      setContent(contentHtml);
    };
    fetchMarkdownContent();
  }, []);

  return (
    <div>
      <h1>Insha3thPage</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
};

export default Insha3thPage;
