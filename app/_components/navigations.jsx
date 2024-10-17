import Link from "next/link";

const Navigations = async () => {
  return (
    <div className="lg:flex justify-center md:gap-10 gap-2">
      <div>
        <Link
          href="/"
          className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          href="/blogs"
          className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
        >
          Blogs
        </Link>
      </div>
      <div>
        <Link
          href="/projects"
          className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
        >
          Works
        </Link>
      </div>
      <div>
        <Link
          href="/diary"
          className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
        >
          Diary
        </Link>
      </div>
      <div>
        <Link
          href="/youtube"
          className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
        >
          Youtube
        </Link>
      </div>
    </div>
  );
};

export default Navigations;
