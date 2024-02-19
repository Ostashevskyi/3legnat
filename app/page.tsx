import Hero from "@/containers/home-page/hero-section";
import NewArrivals from "@/containers/home-page/new-arrivals";

export default function Home() {
  return (
    <div className="max-container">
      <Hero />
      <NewArrivals />
    </div>
  );
}
