import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Briefcase,
  HomeIcon,
  MessagesSquare,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import SearchInput from "./SearchInput";


const buttergone = localFont({ src: "../fonts/Buttergone.otf" });

function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">

      <div className={buttergone.className}>
        <div className="min-w-[175px] sm:min-w-[240px]">
          <Link href='/'>
            <h1 className="text-[20px] sm:text-2xl text-[#ffe34f] pl-2 pr-2 sm:pl-4 sm:pr-4 p-2 ">
              Culinary Crossroads
            </h1>
          </Link>
        </div>
      </div>
    
      <SignedIn>
        <div className="sm:w-[470px]">
          <SearchInput />
        </div>
      </SignedIn>
      
      <div className="px-2 space-x-4 flex flex-1 items-center sm:space-x-5 sm:px-7 justify-end">
        <Link href="/" className="hidden icon sm:block">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </Link>

        <Link href="/" className="icon hidden md:flex">
          <MessagesSquare className="h-5" />
          <p>Messaging</p>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button className="text-[#152039] bg-[#d7df23] hover:bg-[#0048e8] hover:text-[#F4F2ED]">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
