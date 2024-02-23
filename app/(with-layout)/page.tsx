import Banner from "@/containers/home-page/banner";
import Values from "@/containers/home-page/values";
import Article from "@/containers/home-page/article";
import Hero from "@/containers/home-page/hero-section";
import Newsletter from "@/containers/home-page/newsletter";
import NewArrivals from "@/containers/home-page/new-arrivals";

export default function Home() {
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