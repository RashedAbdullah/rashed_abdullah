import Link from "next/link";

const Logo = async () => {
  return (
    <div className="hidden lg:flex items-center justify-center text-3xl">
      <Link href="/">
        <h3>Rashed Abdullah</h3>
      </Link>
    </div>
  );
};

export default Logo;
