import { getManageLangs } from "@/manage-langs/manage-langs";

const Logo = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <div className="text-2xl">
      <h2>
        <span className="text-aqua font-bold">{`</>`}</span> {langs.name}
      </h2>
    </div>
  );
};

export default Logo;
