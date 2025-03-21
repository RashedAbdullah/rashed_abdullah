import { Tiro_Bangla } from "next/font/google";
const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const info = {
  title: "হালাকাহ - ইলমের উন্মুক্ত দ্বার",
  intro: `হালাকাহ হলো একটি একাডেমিক এবং গবেষণাভিত্তিক অনলাইন প্ল্যাটফর্ম, যা কওমি মাদ্রাসা শিক্ষাব্যবস্থার সমস্ত কিতাব (পাঠ্যপুস্তক) একত্রে সহজ ও প্রযুক্তি-উপযোগী রূপে শিক্ষার্থীদের সামনে উপস্থাপনের প্রয়াস হাতে নিয়েছে।`,
  features: [
    "কওমি সিলেবাসভুক্ত সকল বই: ইবতেদাইয়্যাহ থেকে দাওরায়ে হাদীস পর্যন্ত সকল শ্রেণীর সকল কিতাব একসাথে শিক্ষাবোর্ড ভিত্তিক কিতাব ও জামাত সাজানো হয়েছে।",
    "আরবি, অনুবাদ ও ব্যাখ্যাসহ পাঠ: মূল আরবি ইবারতের পাশাপাশি আপনি চাইলে বাংলা অনুবাদ পড়তে পারবেন। আবার কেউ চাইলে শুধুমাত্র মূল টেক্সট পড়তে পারবেন। ‘তাশকীল’সহ ও তাশকীল ছাড়া —উভয় ব্যবস্থা থাকবে৷ ক্রমপর্যায়ে ব্যাখ্যা-বিশ্লেষণও সংযুক্ত করা হবে৷",
    "ব্যক্তিগত নোট ফিচার: পাঠক প্রত্যেক অধ্যায়ে ব্যক্তিগত নোট সংরক্ষণ করতে পারবেন। পড়াশোনার শেষে নিজ প্রোফাইলে সব নোট একসাথে রিভিউ করতে পারবেন।",
    "বোর্ড ও ক্লাস ভিত্তিক ফিল্টারিং: শিক্ষার্থীরা তাদের বোর্ড ও ক্লাস অনুযায়ী কিতাবগুলো সাজানো দেখতে পারবেন। নির্দিষ্ট বোর্ড অনুযায়ী জামাত ও কিতাব আলাদা করে সাজানো হয়েছে।",
    "সহজ ব্যবহারযোগ্য ইন্টারফেস: শিক্ষার্থীদের পড়াশোনা সহজ করতে মোবাইল এবং ডেস্কটপ-উপযোগী সহজ ও চমৎকার ইন্টারফেস।",
  ],
  goal: `কওমি মাদ্রাসার হাজার হাজার ছাত্র, শিক্ষক ও তালিবে ইলমদের জন্য এক ছাতার নিচে সকল দরকারী কিতাব সহজে উপস্থাপন করা। প্রিন্ট ভার্সনের সীমাবদ্ধতা দূর করে, অনলাইন ও অফলাইনে পড়াশোনার উপযোগী ডিজিটাল কিতাবখানা গড়ে তোলা।`,
};

const HalaqahInfo = () => {
  return (
    <div className={`${tiro.className} max-w-3xl mx-auto py-10 px-4 space-y-6`}>
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        {info.title}
      </h1>

      <section className="space-y-3">
        <p className="text-gray-600 dark:text-gray-400">{info.intro}</p>

        <ul className="list-disc pl-5 space-y-2">
          {info.features.map((feature, idx) => (
            <li key={idx} className="text-gray-600 dark:text-gray-400">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          আমাদের লক্ষ্য
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{info.goal}</p>
      </section>

      <div className="text-center pt-6">
        <p className="italic text-gray-500 dark:text-gray-400">
          হালাকাহ - ইলমদের উন্মুক্ত দ্বার
        </p>
      </div>
    </div>
  );
};

export default HalaqahInfo;
