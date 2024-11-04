import { Tiro_Bangla } from "next/font/google";

const tiroBangla = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const BlogLayout = ({ children }) => {
  return <div className={`${tiroBangla.className}`}>{children}</div>;
};

export default BlogLayout;
