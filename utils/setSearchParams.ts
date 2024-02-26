import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const pathname = usePathname();
const { replace } = useRouter();

type SearchParamsProps = {
  searchParams: string;
  title: string;
};

export const setSearchParams = ({ searchParams, title }: SearchParamsProps) => {
  console.log(searchParams, title);

  const params = new URLSearchParams(searchParams);

  if (searchParams) {
    params.set(title, searchParams);
  } else {
    params.delete(title);
  }

  replace(`${pathname}?${params.toString()}`);
};
