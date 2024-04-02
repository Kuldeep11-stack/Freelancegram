"use client";
import Image from "next/image";
import React from "react";
import {
  Bell,
  HomeIcon,
  Search,
  Settings,
  StickyNote,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddPosts from "../posts/AddPosts";
import { User as SupabaseUser} from "@supabase/supabase-js";
const AppNav = ({user} : {user:SupabaseUser}) =>  {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex justify-between items-center p-2 ">
      <Image src={"/images/logo_512.png"} width={40} height={40} alt="logo" />

      <div className="flex space-x-12">
        <Link
          href="/"
          className={`hover:text-foreground ${
            pathname === "/" ? "text-foreground" : "text-gray-500"
          }`}
        >
          <HomeIcon size={30} />
        </Link>
        <Link
          href="/search"
          className={`hover:text-foreground ${
            pathname === "/search" ? "text-foreground" : "text-gray-500"
          }`}
        >
          <Search size={30} />
        </Link>
        <AddPosts
        user ={user}
          children={
            <StickyNote
              size={30}
              className="text-gray-500 cursor-pointer hover:text-foreground"
            />
          }
        />

        <Link
          href="/notifications"
          className={`hover:text-foreground ${
            pathname === "/notifications" ? "text-foreground" : "text-gray-500"
          }`}
        >
          <Bell size={30} />
        </Link>
        <Link
          href="/profile"
          className={`hover:text-foreground ${
            pathname === "/profile" ? "text-foreground" : "text-gray-500"
          }`}
        >
          <User size={30} />
        </Link>
      </div>

      <div>
        <Settings />
      </div>
    </nav>
  );
};

export default AppNav;
