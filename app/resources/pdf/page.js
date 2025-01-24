"use client";

import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LearningResourcePDF from "@/components/pdf";

const PDFPage = () => {
  // Example resources data
  const [resources, setResources] = useState([
    {
      title: "ورقة الأسئلة لامتحان الفترة الأولى",
      description: "The official React documentation.",
      url: "https://reactjs.org",
    },
    {
      title: "Next.js Documentation",
      description: "The official Next.js documentation.",
      url: "https://nextjs.org/docs",
    },
    {
      title: "MDN Web Docs",
      description: "Comprehensive documentation for web developers.",
      url: "https://developer.mozilla.org",
    },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Download Learning Resources as PDF
      </h1>
      <PDFDownloadLink
        document={<LearningResourcePDF resources={resources} />}
        fileName="Learning_Resources.pdf"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFPage;
