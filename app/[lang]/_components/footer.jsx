import { getManageLangs } from "@/manage-langs/manage-langs";
import FooterSocial from "./social";

const Footer = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);

  return (
    <footer className="border-t container py-5 flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 gap-3">
      <div>
        <p>
          &copy; {langs.name}. {langs.allright}
        </p>
      </div>
      <nav aria-label="Social Links">
        <FooterSocial lang={lang} />
      </nav>
    </footer>
  );
};

export default Footer;
