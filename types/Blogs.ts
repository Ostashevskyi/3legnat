type Image = {
  url: string;
  width: number;
  height: number;
};

export type TBlog = {
  blogData: string;
  date: string;
  id: string;
  slug: string;
  smallImage: Image;
  title: string;
  author: { name: string };
};
