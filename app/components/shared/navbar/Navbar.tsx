import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200  shadow-light-300 fixed z-50 w-full gap-5 p-6  sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevFlow Logo"
          width={23}
          height={23}
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-400 max-sm:hidden">
          Dev <span className="text-primary-500"> Flow </span>
        </p>
      </Link>
      Search
      <div className="flex-between gap-5">
        Theme
        <SignedIn>
          <UserButton
            afterSignOutUrl=""
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        Mobilenav
      </div>
    </nav>
  );
};

export default Navbar;
