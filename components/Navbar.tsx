import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed  z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={"/icons/duo-logo.svg"}
          alt="StreamLine"
          width="32"
          height="32"
        />
        <p className="text-[26px] font-extrabold max-sm:hidden text-white">
          StreamLine
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignInButton>
          <UserButton />
        </SignInButton>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
