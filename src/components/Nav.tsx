"use client";

import { ChevronDown, MoreVertical, Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import NavDropdown from "./NavDropdown";
import { usePathname, useRouter } from "next/navigation";
import { AppDispatc, useAppSelector } from "@/redux/store";
import useCurrentPath from "@/hooks/useCurrentPath";
import { boards } from "../../data";
import NewTaskDialog from "./NewTaskDialog";
import BoardDropdown from "./BoardDropdown";
import { boardsType } from "@/lib/types";
import { useDispatch } from "react-redux";
import { replaceBoards } from "@/redux/features/boardSlice";
import EditBoardDialog from "./EditBoardDialog";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const dispatch = useDispatch<AppDispatc>();
  const router = useRouter();
  const pathName = usePathname();
  const { currentPath } = useCurrentPath(pathName);
  const boards = useAppSelector((state) => state.boards.boards);
  const board = boards.filter((b) => b.name === currentPath);

  return (
    <nav className="bg-White dark:bg-Dark-Grey h-16 flex items-center justify-between px-4 fixed top-0 w-full">
      <div className="flex gap-4 md:hidden">
        <Image
          priority={true}
          alt="logo"
          src="/assets/Logo.svg"
          width={24}
          height={24}
        />
        <NavDropdown
          boards={boards}
          pathName={pathName}
          trigger={
            <div className="cursor-pointer flex items-center gap-2">
              <span className="text-Black dark:text-White text-lg font-extrabold">
                {currentPath}
              </span>
              <ChevronDown size={20} className="text-Main-Purple md:hidden" />
            </div>
          }
        />
      </div>
      <span className="ml-[16.5rem] text-[1.25rem] font-extrabold hidden md:block">
        {currentPath}
      </span>
      <div className="flex gap-4 items-center">
        <NewTaskDialog />
        <BoardDropdown
          board={board}
        />
      </div>
    </nav>
  );
};
export default Nav;
