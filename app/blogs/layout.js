import { Hind_Siliguri } from "next/font/google";

const hindFont = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

const BlogLayout = ({ children }) => {
  return <div className={`${hindFont.className}`}>{children}</div>;
};

export default BlogLayout;
