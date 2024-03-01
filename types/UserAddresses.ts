export type TUserBillingAddress = {
  id: number;
  preset_name: string;
  first_name: string;
  last_name: string;
  card_number: string;
  cvv: string;
  expiration_date: string;
  user_id: string;
};

export type TUserShippingAddress = {
  id: number;
};
