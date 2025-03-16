import { auth } from "@/auth";
import ActiveLink from "./active-link";

const Navigations = async () => {
  const session = await auth();
  return (
    <div className="lg:flex justify-center items-center md:gap-10 gap-2">
      <div>
        <ActiveLink link="/">Works</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/articles">Diary</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/projects">Youtube</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/diary">Contact</ActiveLink>
      </div>
    </div>
  );
};

export default Navigations;
