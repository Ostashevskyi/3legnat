export const randomInRange = (min: 0, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
