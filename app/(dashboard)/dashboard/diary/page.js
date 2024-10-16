import markdownToHtml from "@/utils/mark-down-to-html";
import { Tiro_Bangla } from "next/font/google";

const tiroBangla = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });
const DashDiaryPage = async () => {
  const handleTextArea = async (formData) => {
    "use server";
    try {
      const thougts = formData.get("texts");
      const date = formData.get("date");
      const texts = await markdownToHtml(thougts);
      const data = {
        texts,
        date,
      };
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      className={`${tiroBangla.className} min-h-screen flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-xl w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          ডায়েরি লিখুন
        </h2>
        <form
          action={handleTextArea}
          className="mt-8 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              তারিখ নির্বাচন করুন
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
          </div>

          <div>
            <label
              htmlFor="texts"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              আপনার ডায়েরি লিখুন
            </label>
            <textarea
              name="texts"
              id="texts"
              rows="20"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="এখানে আপনার ডায়েরির কথা লিখুন..."
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:bg-slate-700 dark:hover:bg-slate-800"
            >
              সাবমিট করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashDiaryPage;
