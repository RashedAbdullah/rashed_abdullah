import Link from "next/link";

const Navigations = () => {
  return (
    <nav className="flex justify-center md:gap-10 gap-2">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/blogs">Blogs</Link>
      </div>
    </nav>
  );
};

export default Navigations;
