import Link from "next/link";
import { getDirais } from "@/controllers/diraies";
import { Tiro_Bangla } from "next/font/google";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const HomeDiarySection = async () => {
  const diries = await getDirais();
  const latestDiries = diries.slice(0, 3); // সর্বশেষ ৩টি এন্ট্রি দেখানো হবে

  return (
    <div
      id="diray"
      className={`${tiro.className} container mx-auto px-4 py-12`}
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-zinc-100">
        ✍️ দিনলিপি
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {latestDiries.map((entry) => (
          <div
            key={entry?._id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <span className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 text-sm font-semibold py-1 px-4 rounded-full shadow">
                {new Date(entry.date).toLocaleDateString("bn", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                ইং
              </span>
            </div>
            <p
              className="text-gray-800 dark:text-gray-300 text-[15px] leading-relaxed line-clamp-3"
              dangerouslySetInnerHTML={{ __html: entry.text }}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/diary"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition-all"
        >
          ✨ সব ডায়েরি দেখুন
        </Link>
      </div>
    </div>
  );
};

export default HomeDiarySection;
