import Link from "next/link";

const Logo = async () => {
  return (
    <div className="text-2xl">
      <Link
        href="/"
        aria-label={`Rashed Abdullah - Homepage`}
        title={`Rashed Abdullah - Homepage`}
      >
        <h1 className="flex items-center">
          <span className="text-deepAqua dark:text-aqua font-bold">{`</>`}</span>
          <span className="ml-2 font-semibold">Rashed Abdullah</span>{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
