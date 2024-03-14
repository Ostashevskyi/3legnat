export type TReview = {
  id: number;
  product: string;
  review: string;
  username: string;
  email: string;
  user_id: string | undefined;
  rating: number;
  date: string;
  user_image: string;
};
