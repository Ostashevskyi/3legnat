export type TProduct = {
  title: string;
  id: string;
  description: string;
  mainPhoto: { url: string; height: number; width: number };
  additionalPhoto: [{ url: string; height: number; width: number }];
  colors: [
    {
      url: string;
      height: number;
      width: number;
      alt: string;
      customData: { color: string };
    }
  ];
  additionalInfo: string;
  measurements: string;
  oldPrice?: number;
  onsale: boolean;
  discountNumber?: number;
  price: number;
  category: {
    category: string;
  };
  slug: string;
  sku: number;
};
