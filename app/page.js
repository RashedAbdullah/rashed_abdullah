import HeaderInfo from "./_components/header-info";
import AboutMe from "./_components/aboutme/aboutme";
import Works from "./_components/works/works";
import ServicesAndExp from "./_components/services/services";

export default async function Home() {
  return (
    <main className="container space-y-20 pb-60">
      <HeaderInfo />
      <Works />
      <AboutMe />
      <ServicesAndExp />
    </main>
  );
}
