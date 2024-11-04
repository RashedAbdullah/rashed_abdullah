import { auth } from "@/auth";
import ActiveLink from "./active-link";
import { GrDashboard } from "react-icons/gr";
import NavigationsSelection from "./navigation-selection";

const Navigations = async () => {
  const session = await auth();
  return (
    <div className="lg:flex justify-center items-center md:gap-10 gap-2">
      <div>
        <ActiveLink link="/">Home</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/blogs">Blogs</ActiveLink>
      </div>
      <div>
        <ActiveLink link="/projects">Projects</ActiveLink>
      </div>

      <NavigationsSelection user={session?.user} />
    </div>
  );
};

export default Navigations;
