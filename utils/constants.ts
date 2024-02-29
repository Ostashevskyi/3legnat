export const HEADER_NAV_LINKS = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "Shop", href: "/shop" },
  { id: 2, title: "Product", href: "/product" },
  { id: 3, title: "Blog", href: "/blog" },
  { id: 4, title: "Contact Us", href: "/contact-us" },
];

export const HEADER_NAV_ICONS = [
  { id: 0, icon: "/icons/search.svg", alt: "search" },
  { id: 1, icon: "/icons/user-circle.svg", alt: "user" },
  { id: 3, icon: "/icons/shopping-bag.svg", alt: "shopping-bag" },
];

export const HEADER_OPEN_ICON = [
  {
    id: 0,
    icon: "/icons/shopping-bag.svg",
    alt: "shopping-bad",
    title: "Cart",
  },
  { id: 1, icon: "/icons/heart.svg", alt: "heart", title: "Whishlist" },
];

export const SOCIALS_ICONS = [
  { id: 0, icon: "/icons/instagram.svg", alt: "instagram" },
  { id: 1, icon: "/icons/facebook.svg", alt: "facebook" },
  { id: 3, icon: "/icons/youtube.svg", alt: "youtube" },
];

export const BUTTON_SIZES_BY_GRID = {
  item: {
    grid: "gap-6 justify-center",
  },
  row: {
    card: "flex items-center gap-20",
    grid: "grid-cols-2",
  },
  grid4: {
    grid: "grid-cols-4",
  },
  grid9: {
    grid: "grid-cols-6",
  },
};

export const PROFILE_LINKS = [
  { id: 0, title: "Account", href: "/account/details" },
  { id: 1, title: "Address", href: "/account/address" },
  { id: 2, title: "Orders", href: "/account/orders" },
  { id: 3, title: "Wishlist", href: "/account/wishlist" },
  { id: 4, title: "Log out", href: "/account/logout" },
];
