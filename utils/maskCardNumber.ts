export const maskCardNumber = (cardNumber: string): string => {
  if (!/^\d{4,}$/.test(cardNumber)) {
    throw new Error("Invalid card number");
  }

  const lastFourDigits = cardNumber.slice(-4);

  const maskedNumber = cardNumber.slice(0, -4).replace(/\d/g, "*");

  return maskedNumber + lastFourDigits;
};
