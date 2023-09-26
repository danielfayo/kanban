import React from "react";
import Dialog from "@/components/ui/Dialog";
import { MoreVertical, Check } from "lucide-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import StatusSelect from "./StatusSelect";

type AllBoardProps = {
  board: boards;
};

const AllBoard: React.FC<AllBoardProps> = ({ board }) => {
  return (
    <div className=" md:ml-[16rem] overflow-auto mt-[2rem] flex">
      <div className="flex gap-6 p-6 h-screen">
        {board.length > 0 &&
          board[0].columns.map((each, index) => (
            <div className={`flex flex-col min-w-[17.5rem] max-w-[17.5rem]`} key={index}>
              <span className="my-6 text-Medium-Grey text-xs font-extrabold uppercase">
                {each.name} ({each.tasks.length})
              </span>
              <div className="flex flex-col gap-4">
                {each.tasks.map((task, id) => (
                  <Dialog
                    key={id}
                    trigger={
                      <div className=" bg-White dark:bg-Dark-Grey min-h-[5.5rem] rounded-lg p-4 shadow-md flex flex-col justify-center cursor-pointer">
                        <span className="text-4 font-extrabold ">
                          {task.title}
                          <br />
                        </span>
                        <span className="text-Medium-Grey text-xs font-extrabold">
                          {
                            task.subtasks.filter(
                              (sub) => sub.isCompleted === true
                            ).length
                          }{" "}
                          of {task.subtasks.length} subtasks
                        </span>
                      </div>
                    }
                    title={
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-lg font-extrabold">
                          {task.title}
                        </span>
                        <MoreVertical className="h-5 text-Medium-Grey" />
                      </div>
                    }
                    description={
                      <span className="text-Medium-Grey text-sm font-medium leading-6">
                        {task.description}
                      </span>
                    }
                    content={
                      <div className="flex flex-col gap-2 mt-6">
                        <span className="text-xs mb-4 font-extrabold text-Medium-Grey">
                          Subtasks (
                          {
                            task.subtasks.filter(
                              (sub) => sub.isCompleted === true
                            ).length
                          }{" "}
                          of {task.subtasks.length})
                        </span>
                        {task.subtasks.map((sub, id) => (
                          <div
                            key={id}
                            className="flex rounded-lg items-center gap-4 bg-Light-Grey-Light-Bg dark:bg-Very-Dark-Grey p-4"
                          >
                            <Checkbox.Root
                              className={` border w-4 h-4 rounded-sm flex items-center justify-center ${
                                sub.isCompleted
                                  ? "bg-Main-Purple"
                                  : "dark:bg-Dark-Grey bg-White"
                              } `}
                            >
                              {sub.isCompleted && (
                                <Check className="w-4 text-White" />
                              )}
                            </Checkbox.Root>
                            <label>{sub.title}</label>
                          </div>
                        ))}
                        <span className="text-xs mb-2 font-extrabold mt-6 text-Medium-Grey">Current Status</span>
                        <StatusSelect placeHolder={each.name}/>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default AllBoard;
