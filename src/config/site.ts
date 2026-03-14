import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Astro Starter Pro",
  description: "Just another Astro blog",
  url: "https://thuanbui.me",
  lang: "vi",
  locale: "vi_VN",
  author: "Thuan Bui",
  twitter: "@10h30",
  ogImage: ogImage,
  socialLinks: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ],
};
