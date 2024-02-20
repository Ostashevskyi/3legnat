import Banner from "@/containers/home-page/banner";
import Hero from "@/containers/home-page/hero-section";
import NewArrivals from "@/containers/home-page/new-arrivals";
import Values from "@/containers/home-page/values";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <Values />
      <Banner />
    </div>
  );
}
