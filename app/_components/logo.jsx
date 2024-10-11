
import Link from "next/link";

const Logo = async () => {


  return (
    <div className="text-2xl">
      <Link
        href="/"
        aria-label={`Rashed Abdullah - Homepage`}
        title={`Rashed Abdullah - Homepage`}
      >
        <h2 className="flex items-center">
          <span className="text-aqua font-bold">{`</>`}</span>
          <span className="ml-2">Rashed Abdullah</span>{" "}
          {/* Adding margin for better spacing */}
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
