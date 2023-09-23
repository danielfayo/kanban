"use client";

import useCurrentPath from "@/hooks/useCurrentPath";
import { useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Page = ({ params }: { params: { board: string } }) => {
  const pathName = usePathname();
  const { currentPath } = useCurrentPath(pathName);
  const boards = useAppSelector((state) => state.boards.boards);

  const board = boards.filter((b) => b.name === currentPath);

  return (
    <div className=" md:ml-[16rem] overflow-x-auto mt-[4rem]">
      <div className="flex gap-6 overflow-auto h-full px-6">
        {board.length > 0 &&
          board[0].columns.map((each, index) => (
            <div className="flex flex-col min-w-[17.5rem]" key={index}>
              <span className="my-6 text-Medium-Grey text-xs font-extrabold uppercase">
                {each.name}{" "}({each.tasks.length})
                <br />
              </span>
              <div className=" flex flex-col gap-4">
                {each.tasks.map((task, id) => (
                  <div key={id} className=" bg-White dark:bg-Dark-Grey min-h-[5.5rem] rounded-lg p-4 shadow-md flex flex-col justify-center">
                    <span className="text-4 font-extrabold ">
                      {task.title}
                      <br />
                    </span>
                    <span className="text-Medium-Grey text-xs font-extrabold">

                    {task.subtasks.filter(sub => sub.isCompleted === true).length} of {task.subtasks.length} subtasks
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Page;
