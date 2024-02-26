import Banner from "@/containers/home-page/banner";
import Values from "@/containers/home-page/values";
import Article from "@/containers/home-page/article";
import Hero from "@/containers/home-page/hero-section";
import Newsletter from "@/components/Newsletter";

import NewArrivals from "@/containers/home-page/new-arrivals";

export default async function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <Values />
      <Banner />
      <Article />
      <Newsletter />
    </div>
  );
}
