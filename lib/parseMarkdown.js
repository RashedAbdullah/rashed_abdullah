"use server";

import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";

export async function parseMarkdown() {
  const filePath = path.join(process.cwd(), "public", "insha.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const processedContent = await remark().use(html).process(fileContent);
  const contentHtml = processedContent.toString();

  return contentHtml;
}
