import { CardItem } from "./component/CardItem";
import Carrier from "./component/Carrier";
import { DiscoverMoreSection } from "./component/DiscoverMoreSection";
import { Hero } from "./component/Hero";
import LatestNewsSection from "./component/LatestNewsSection";
import NewArticlesSection from "./component/NewArticlesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CardItem />
      <NewArticlesSection />
      <LatestNewsSection />
      <DiscoverMoreSection />
      <Carrier />
    </>
  );
}
