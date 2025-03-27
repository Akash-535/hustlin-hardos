import BackToTop from "@/common/BackToTop";
import BreakingNews from "@/components/BreakingNews";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import LatestTweets from "@/components/LatestTweets";
import Minting from "@/components/Minting";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team />
      <Faq />
      <BackToTop />
    </>
  );
}
