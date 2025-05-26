import Link from "next/link";
import { getDirais } from "@/controllers/diraies";
import { Tiro_Bangla } from "next/font/google";
import { MotionDiv } from "@/components/motion-div";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DiaryCard from "../diary/_components/diray-card";
import { auth } from "@/auth";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const HomeDiarySection = async () => {
  const diries = await getDirais();
  const session = await auth();

  return (
    <section
      className={`${tiro.className} py-20 bg-gradient-to-b from-background to-accent/10`}
    >
      <div className="container">
        {/* Animated Header */}
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent py-4">
            ডায়েরি
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমার দৈনন্দিন চিন্তা, অভিজ্ঞতা এবং শেখার গল্প
          </p>
        </MotionDiv>

        {/* Diary Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {session?.user
            ? diries.slice(-3).map((entry, index) => (
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
                .slice(-3)
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

        {/* View All Button */}
        <MotionDiv
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/diary"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 transition-colors hover:shadow-primary/20"
          >
            সব ডায়েরি দেখুন
            <ArrowRight className="ml-2 h-5 w-5 text-black dark:text-white" />
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HomeDiarySection;
