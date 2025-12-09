import { format } from "date-fns";

export const formatDate = (date: string) => {
  const _date = new Date(date);

  return format(_date, "MMM d, y");
};
