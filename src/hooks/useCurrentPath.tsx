"use client";

import { useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const useCurrentPath = (pathName: string) => {
//   const pathName = usePathname();
  const boards = useAppSelector((state) => state.boards.boards);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    boards.map((board) => {
      if (
        "/board/" + board.name.split(" ").join("").toLocaleLowerCase() ===
        pathName
      ) {
        setCurrentPath(board.name);
      }
    });
  });

  return {
    currentPath,
  };
};
export default useCurrentPath;
