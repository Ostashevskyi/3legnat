export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  const formattedDate: string = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
