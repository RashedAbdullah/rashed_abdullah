const DashboardPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Sections */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Projects Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              প্রোজেক্টস
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              মোট প্রোজেক্ট সংখ্যা: ৫
            </p>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 mt-3">
              <li>আরবি শেখার প্রোজেক্ট</li>
              <li>কোরআন পড়ার প্রোজেক্ট</li>
              <li>মাদ্রাসা ডাটাবেজ প্রোজেক্ট</li>
              <li>ফাউন্ডেশনের সদস্য ডাটাবেজ প্রোজেক্ট</li>
              <li>পর্টফোলিও সাইট প্রোজেক্ট</li>
            </ul>
            <a
              href="#"
              className="text-slate-600 hover:underline dark:text-slate-300"
            >
              সব প্রোজেক্ট দেখুন
            </a>
          </div>

          {/* YouTube Videos Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              ইউটিউব ভিডিওস (নাশিদ এবং কোরআন)
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              সর্বমোট ভিডিও সংখ্যা: ১০
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                নাশিদ
              </h3>
              <p className="text-gray-600 dark:text-gray-300">মোট: ৫</p>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-3">
                কোরআন
              </h3>
              <p className="text-gray-600 dark:text-gray-300">মোট: ৫</p>
            </div>
            <a
              href="#"
              className="text-slate-600 hover:underline dark:text-slate-300 mt-3 block"
            >
              সব ভিডিও দেখুন
            </a>
          </div>

          {/* Diary Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              ডায়েরি
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              মোট ডায়েরি এন্ট্রি সংখ্যা: ১২
            </p>
            <a
              href="#"
              className="text-slate-600 hover:underline dark:text-slate-300 mt-3 block"
            >
              ডায়েরি দেখুন
            </a>
          </div>

          {/* Blogs Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              ব্লগস
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              মোট ব্লগ পোস্ট সংখ্যা: ৮
            </p>
            <a
              href="#"
              className="text-slate-600 hover:underline dark:text-slate-300 mt-3 block"
            >
              সব ব্লগ পোস্ট দেখুন
            </a>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              সাম্প্রতিক কার্যক্রম
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              সম্প্রতি যোগ করা এন্ট্রি: &quot;আজকে নতুন কিছু শিখলাম!&quot;
            </p>
            <a
              href="#"
              className="text-slate-600 hover:underline dark:text-slate-300 mt-3 block"
            >
              বিস্তারিত দেখুন
            </a>
          </div>
        </div>

        {/* Future Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            অন্যান্য কার্যক্রম
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            এখানে আরও ফিচার বা কার্যক্রম যোগ করা হবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
