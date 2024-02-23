import Banner from "@/containers/home-page/banner";
import Values from "@/containers/home-page/values";
import Article from "@/containers/home-page/article";
import Hero from "@/containers/home-page/hero-section";
import Newsletter from "@/containers/home-page/newsletter";
import NewArrivals from "@/containers/home-page/new-arrivals";

import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query HOME {
    allProducts {
      title
      id
    }
  }
`;

export default async function Home() {
  const {
    data: { allProducts },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });
  console.log(allProducts);

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
