import { Tiro_Bangla } from "next/font/google";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const BlogLayout = ({ children }) => {
  return <div className={`${tiro.className}`}>{children}</div>;
};

export default BlogLayout;
