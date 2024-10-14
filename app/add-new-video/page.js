import { createNewVideo } from "@/controllers/videos";
import { redirect } from "next/navigation";

const AddNewVideo = () => {
  const handleNewVideoId = async (formData) => {
    "use server";
    try {
      const newData = {
        videoId: formData.get("videoId"),
        category: formData.get("category"),
      };
      await createNewVideo(newData);
      redirect("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center my-32 bg-gray-100 dark:bg-gray-900 container">
      <h2
        className="text-2xl font-bold mb-6 text-gray-800 dark:text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        Add New Video
      </h2>
      <form
        action={handleNewVideoId}
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-8"
      >
        <div className="mb-4">
          <label
            htmlFor="videoId"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Video ID:
          </label>
          <input
            type="text"
            id="videoId"
            name="videoId"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter Video ID"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Category:
          </label>
          <select
            id="category"
            name="category"
        
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          >
            <option value="">Select Category</option>
            <option value="quran">Quran</option>
            <option value="nasheed">Nasheed</option>
            <option value="lecture">Lecture</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Video
        </button>
      </form>
    </div>
  );
};

export default AddNewVideo;
