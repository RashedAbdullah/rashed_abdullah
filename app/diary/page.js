import { getDirais } from "@/controllers/diraies";
import DiarySchemaScript from "@/meta/diray-schema-script";
import { Tiro_Bangla } from "next/font/google";
import DirayCard from "./_components/diray-card";
import { auth } from "@/auth";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const DiaryPage = async () => {
  const diries = await getDirais();
  const session = await auth();

  console.log(session?.user);

  return (
    <div
      className={`${tiro.className} container mx-auto px-4 py-8 min-h-screen`}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-zinc-100">
        ডায়েরি
      </h1>

      <DiarySchemaScript entries={diries} />
      <div className="space-y-8">
        {session?.user
          ? diries.map((entry) => <DirayCard key={entry._id} diary={entry} />)
          : diries
              .filter((item) => item.visibility === true)
              .map((entry) => <DirayCard key={entry._id} diary={entry} />)}
      </div>
    </div>
  );
};

export default DiaryPage;
