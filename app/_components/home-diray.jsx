import Link from "next/link";
import { getDirais } from "@/controllers/diraies";
import { Tiro_Bangla } from "next/font/google";
import HomeDirayCard from "./home-diray-card";
import { MotionDiv } from "@/components/motion-div";
import { Icons } from "@/components/icons";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const HomeDiarySection = async () => {
  const diries = await getDirais();
  const latestDiries = diries.slice(0, 3);

  return (
    <section
      id="diary"
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
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            ডায়েরি <span className="text-primary">📖</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমার দৈনন্দিন চিন্তা, অভিজ্ঞতা এবং শিক্ষার গল্প
          </p>
        </MotionDiv>

        {/* Diary Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {latestDiries.map((entry, index) => (
            <MotionDiv
              key={entry._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <HomeDirayCard diary={entry} />
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
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-colors hover:shadow-primary/20"
          >
            সব ডায়েরি দেখুন
            <Icons.arrowRight className="ml-2 h-5 w-5" />
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HomeDiarySection;