"use client";

import useCurrentPath from "@/hooks/useCurrentPath";
import { useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import React from "react";

const Page = ({ params }: { params: { board: string } }) => {
  const pathName = usePathname();
  const { currentPath } = useCurrentPath(pathName);
  const boards = useAppSelector((state) => state.boards.boards);

  // const board = boards.filter(b => b.name === currentPath)
  const board = boards.findIndex((each) => each.name == currentPath);
  // console.log(boards[board]);

  return (
    <div className=" md:ml-[16rem]">
      <span className="">Have a good {params.board}</span>
    </div>
  );
};
export default Page;
