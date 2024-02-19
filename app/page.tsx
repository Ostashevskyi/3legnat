import Hero from "@/containers/home-page/hero-section";
import NewArrivals from "@/containers/home-page/new-arrivals";
import Values from "@/containers/home-page/values";

export default function Home() {
  return (
    <div className="max-container">
      <Hero />
      <NewArrivals />
      <Values />
    </div>
  );
}
