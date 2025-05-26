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
          src="/white-bg-transparent.png"
          alt="Rashed Abdullah Logo"
          width={100}
          height={100}
          className="h-12 object-cover hidden dark:block"
          priority
        />
        <Image
          src="/black-bg-transparent.png"
          alt="Rashed Abdullah Logo"
          width={100}
          height={100}
          className="h-12 object-cover block dark:hidden"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
