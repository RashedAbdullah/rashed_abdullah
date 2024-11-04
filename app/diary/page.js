import { getDirais } from "@/controllers/diraies";
import DiarySchemaScript from "@/meta/diray-schema-script";
import { Tiro_Bangla } from "next/font/google";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const DiaryPage = async () => {
  const diries = await getDirais();

  return (
    <div
      className={`${tiro.className} container mx-auto px-4 py-8 min-h-screen`}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-zinc-100">
        ডায়েরি
      </h1>
      <DiarySchemaScript entries={diries} />
      <div className="space-y-8">
        {diries.map((entry) => (
          <div
            key={entry?._id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold py-1 px-4 rounded-full shadow">
                {new Date(entry.date).toLocaleDateString("bn", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                ইং
              </span>
            </div>
            <div
              className="text-gray-800 dark:text-gray-200 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: entry.text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryPage;
