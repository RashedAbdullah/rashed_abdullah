import Link from "next/link";
import Image from "next/image";

const Logo = async () => {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <Link
        href="/"
        aria-label="Rashed Abdullah - Homepage"
        title="Rashed Abdullah - Homepage"
      >
        <Image
          src="/logo.png"
          alt="Rashed Abdullah Logo"
          width={100}
          height={100}
          className="w-12 h-12 object-contain rounded-full"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
