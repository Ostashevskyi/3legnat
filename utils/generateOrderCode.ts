export const generateOrderCode = (): string => {
  const randomNumber1 = Math.floor(Math.random() * 10000);
  const randomNumber2 = Math.floor(Math.random() * 100000);

  const formattedNumber1 = randomNumber1.toString().padStart(4, "0");
  const formattedNumber2 = randomNumber2.toString().padStart(5, "0");

  const orderCode = `#${formattedNumber1}_${formattedNumber2}`;

  return orderCode;
};
