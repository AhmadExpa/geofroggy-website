import HomeHero from "@/components/homeComponents/HomeHero";
import HomeStories from "@/components/homeComponents/HomeStories";
import WhatWeOffer from "@/components/homeComponents/WhatWeOffer";
import TopContributors from "@/components/homeComponents/TopContributors";
import GlobalStories from "@/components/homeComponents/GlobalStories";
import GlobalExplorer from "@/components/homeComponents/GlobalExplorer";
import GlobalNews from "@/components/homeComponents/GlobalNews";
import GetInvolved from "@/components/homeComponents/GetInvolved";
import CultureInbox from "@/components/homeComponents/CultureInbox";
import ShareYourWorld from "@/components/homeComponents/ShareYourWorld";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeStories />
      <WhatWeOffer />
      <TopContributors />
      <GlobalStories />
      <GlobalExplorer />
      <GlobalNews />
      <GetInvolved />
      <CultureInbox />
      <ShareYourWorld />
    </main>
  );
};

export default Home;
