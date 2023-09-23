"use client";

import React from "react";
import SideList from "./SideList";
import Image from "next/image";
import { useTheme } from "next-themes";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const {theme} = useTheme()



  return (
    <nav className="hidden md:flex flex-col w-[16rem] left-0 h-full pb-12 bg-White dark:bg-Dark-Grey border border-y-0 border-l-0 dark:border-r-Lines-Dark border-r-Lines-Light fixed top-0 z-10">
      <Image
          alt="logo"
          src={theme === "dark" ? `/assets/white-kanban.svg`: `/assets/full-kanban.svg`}
          width={152}
          height={24}
          className="ml-8 mt-[1.25rem]"
        />
        <div className="mt-8 h-full">

      <SideList />
        </div>
    </nav>
  );
};
export default Sidebar;
