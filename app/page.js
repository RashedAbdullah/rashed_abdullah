import HeaderInfo from "./_components/header-info";
import AboutMe from "./_components/aboutme/aboutme";
import Skills from "./_components/skills/skills";
import Works from "./_components/works/works";
import Contact from "./_components/contact/contact";
import HeaderNavigations from "./_components/header-navigtaions";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex flex-col">
      <HeaderNavigations />
      <HeaderInfo />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
