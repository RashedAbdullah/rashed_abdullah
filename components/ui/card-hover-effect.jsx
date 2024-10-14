import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import ItemCard from "@/app/blogs/_components/blog-card";

export const ItemsCard = ({ items }) => {
  return <ItemCard key={idx} item={item} />;
};
