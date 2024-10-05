import { getManageLangs } from "@/manage-langs/manage-langs";
import Link from "next/link";

const Logo = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);

  return (
    <div className="text-2xl">
      <Link
        href="/"
        aria-label={`${langs.name} - Homepage`}
        title={`${langs.name} - Homepage`}
      >
        <h2 className="flex items-center">
          <span className="text-aqua font-bold">{`</>`}</span>
          <span className="ml-2">{langs.name}</span>{" "}
          {/* Adding margin for better spacing */}
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
