import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="h-[35px] w-[150px] relative hidden md:block ">
      <Image
        src="/images/logo.png"
        alt="logo"
        object-contain
        sizes="90px"
        priority
      />
    </Link>
  );
};

export default Logo;