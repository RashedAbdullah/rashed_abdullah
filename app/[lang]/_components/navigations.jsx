import { getManageLangs } from "@/manage-langs/manage-langs";
import Link from "next/link";

const Navigations = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <nav className="lg:flex justify-center md:gap-10 gap-2">
      <div>
        <Link
          href="/"
          className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
        >
          {langs.home}
        </Link>
      </div>
      <div>
        <Link
          href="/blogs"
          className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
        >
          {langs.blogs}
        </Link>
      </div>
    </nav>
  );
};

export default Navigations;
