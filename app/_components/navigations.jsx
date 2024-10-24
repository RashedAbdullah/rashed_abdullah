import Link from "next/link";
import ActiveLink from "./active-link";

const Navigations = async () => {
  return (
    <div className="lg:flex justify-center md:gap-10 gap-2">
      <div>
        <ActiveLink link="/">Home</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/blogs">Blogs</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/projects">Works</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/diary">Diary</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/youtube">Youtube</ActiveLink>
      </div>
    </div>
  );
};

export default Navigations;
