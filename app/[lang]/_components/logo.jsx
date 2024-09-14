import { getManageLangs } from "@/manage-langs/manage-langs";
import Link from "next/link";

const Logo = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <div className="text-2xl">
      <Link href="/">
        <h2>
          <span className="text-aqua font-bold">{`</>`}</span> {langs.name}
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
