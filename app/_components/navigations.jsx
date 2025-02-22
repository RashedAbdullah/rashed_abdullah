import { auth } from "@/auth";
import ActiveLink from "./active-link";

const Navigations = async () => {
  const session = await auth();
  return (
    <div className="lg:flex justify-center items-center md:gap-10 gap-2">
      <div>
        <ActiveLink link="/">Home</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/blogs">Articles</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/projects">Projects</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/diary">Diary</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/quran/surah">Quran</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/youtube">Youtube</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/resources">Resources</ActiveLink>
      </div>
    </div>
  );
};

export default Navigations;
