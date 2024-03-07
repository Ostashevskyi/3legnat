type TProducts = {
  image: string;
  quantity: number;
};

export type TOrderCode = {
  id: number;
  order_code: string;
  date: string;
  total: number;
  products: TProducts[];
  user_id: string;
  status: string;
};
