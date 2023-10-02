"use client";


import AllBoard from "@/components/AllBoard";
// import NewBoardForm from "@/components/NewBoardForm";
import useCurrentPath from "@/hooks/useCurrentPath";
import { useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import React, { useState } from "react";


const Page = () => {
  const pathName = usePathname();
  const { currentPath } = useCurrentPath(pathName);
  const boards = useAppSelector((state) => state.boards.boards);

  const board = boards.filter((b) => b.name === currentPath);

  return (
    <AllBoard board={board}/>
    // <div className="mt-24 ml-96">

    // <NewBoardForm/>
    // </div>
  );
};
export default Page;
