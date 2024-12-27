import { parseMarkdown } from "@/lib/parseMarkdown";
import { Noto_Naskh_Arabic, Scheherazade_New } from "next/font/google";

const arbic = Scheherazade_New({
  weight: ["400", "500", "600"],
  subsets: ["arabic"],
});
export default async function Insha3thPage() {
  const content = await parseMarkdown();

  return (
    <div
      dir="rtl"
      className={` ${arbic.className} flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 min-h-screen`}
    >
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg max-w-3xl w-full p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-6">
          الطريق إلى الإنشاء
        </h1>
        <div
          className="prose prose-lg dark:prose-invert prose-p:leading-relaxed prose-h1:text-center prose-h2:text-center prose-h3:text-center"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </div>
  );
}
