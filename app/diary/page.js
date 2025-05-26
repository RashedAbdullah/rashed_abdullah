import { getDirais } from "@/controllers/diraies";
import { Tiro_Bangla } from "next/font/google";
import { MotionDiv } from "@/components/motion-div";
import { Badge } from "@/components/ui/badge";
import DiaryCard from "../diary/_components/diray-card";
import { auth } from "@/auth";
import DiarySchemaScript from "@/meta/diray-schema-script";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const DiaryPage = async () => {
  const diries = await getDirais();
  const session = await auth();

  return (
    <div
      className={`${tiro.className} py-10 min-h-screen bg-gradient-to-b from-background to-accent/10`}
    >
      <DiarySchemaScript entries={diries} />
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200 dark:border-blue-800"
          >
            দিনলিপি
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent py-4">
            ডায়েরি
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমার দৈনন্দিন চিন্তা, অভিজ্ঞতা এবং শেখার গল্প
          </p>
        </MotionDiv>

        {/* Diary Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {session?.user
            ? diries.map((entry, index) => (
                <MotionDiv
                  key={entry._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <DiaryCard diary={entry} />
                </MotionDiv>
              ))
            : diries
                .filter((item) => item.visibility === true)
                .map((entry, index) => (
                  <MotionDiv
                    key={entry._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <DiaryCard diary={entry} />
                  </MotionDiv>
                ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
