import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const BlogFilterDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("blog-filter", category);
    } else {
      params.delete("blog-filter");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="">
      <select
        name="rooms"
        defaultValue={searchParams.get("blog-filter")?.toString()}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value={""} hidden>
          Sort by
        </option>
        <option value={"A-Z"}>Alphabetically A-Z</option>
        <option value={"Z-A"}>Alphabetically Z-A</option>
      </select>
    </div>
  );
};

export default BlogFilterDropdown;
