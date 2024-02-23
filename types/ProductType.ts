export type TProduct = {
  title: string;
  id: string;
  description: string;
  mainPhoto: { url: string; height: number; width: number };
  measurements: string;
  oldPrice: number;
  onsale: boolean;
  price: number;
  slug: string;
};
