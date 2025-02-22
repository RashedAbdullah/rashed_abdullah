import HeaderInfo from "./_components/header-info";
import AboutMe from "./_components/aboutme/aboutme";
import Skills from "./_components/skills/skills";
import Works from "./_components/works/works";
import Contact from "./_components/contact/contact";
import HeaderNavigations from "./_components/header-navigtaions";
import HomeDiarySection from "./_components/home-diray";
import HomeLearningResources from "./_components/home-learing";
import LatestVideos from "./youtube/_components/latest-videos";
import SubscribeSection from "./_components/subscribe-section";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <HeaderNavigations />
      <HeaderInfo />
      <AboutMe />
      <Skills />
      <Works />
      <HomeDiarySection />
      <HomeLearningResources />
      <SubscribeSection />
      <div className="container">
        <LatestVideos />
      </div>
      <Contact />
    </main>
  );
}
