import { getManageLangs } from "@/manage-langs/manage-langs";
import Link from "next/link";

const Navigations = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <nav className="hidden md:flex justify-center md:gap-10 gap-2">
      <div>
        <Link href="/">{langs.home}</Link>
      </div>
      <div>
        <Link href="/blogs">{langs.blogs}</Link>
      </div>
    </nav>
  );
};

export default Navigations;
