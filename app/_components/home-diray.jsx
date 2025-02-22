import Link from "next/link";
import { getDirais } from "@/controllers/diraies";
import { Tiro_Bangla } from "next/font/google";
import HomeDirayCard from "./home-diray-card";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const HomeDiarySection = async () => {
  const diries = await getDirais();
  const latestDiries = diries.slice(0, 3);

  return (
    <div
      id="diray"
      className={`${tiro.className} container mx-auto px-4 py-12`}
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-zinc-100">
        ডায়েরি 📑
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {latestDiries.map((entry) => (
        <HomeDirayCard key={entry._id} diary={entry}/>
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
