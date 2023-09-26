"use client";

import { useAppSelector } from "@/redux/store";
import { PanelLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import NewBoardDialog from "./NewBoardDialog";

type SideListProps = {};

const SideList: React.FC<SideListProps> = () => {
  const pathName = usePathname();
  const boards = useAppSelector((state) => state.boards.boards);

  return (
    <div className="flex flex-col h-full mb-12">
      <span className="text-xs font-bold tracking-[.15rem] text-Medium-Grey m-4">
        ALL BOARDS ({boards.length})
      </span>
      <div className="flex flex-col justify-between h-full">
        <div className="mb-auto">
          <div className="flex flex-col mr-5">
            {boards.map((board, id) => (
              <Link
                key={id}
                href={`/board/${board.name
                  .split(" ")
                  .join("")
                  .toLocaleLowerCase()}`}
                className={`flex text-[15px] font-bold gap-3 h-12 items-center px-6 hover:bg-Main-Purple hover:text-White rounded-r-full ${
                  pathName ===
                  "/board/" + board.name.split(" ").join("").toLocaleLowerCase()
                    ? "bg-Main-Purple text-White"
                    : "text-Medium-Grey"
                } `}
              >
                <PanelLeft size={16} />
                {board.name}
              </Link>
            ))}
          </div>
         <NewBoardDialog/>
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
};
export default SideList;
