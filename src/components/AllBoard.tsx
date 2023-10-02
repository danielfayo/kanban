import React from "react";
import { MoreVertical, Check } from "lucide-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import StatusSelect from "./StatusSelect";
import { boardsType } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

type AllBoardProps = {
  board: boardsType[];
};

const AllBoard: React.FC<AllBoardProps> = ({ board }) => {
  return (
    <div
      className=" md:ml-[16rem] overflow-auto mt-[2rem]"
      style={{ height: "100vh-4rem" }}
    >
      <div className="flex gap-6 p-6">
        {board.length > 0 &&
          board[0].columns?.map((each, index) => (
            <div
              className={`flex flex-col min-w-[17.5rem] max-w-[17.5rem]`}
              key={index}
            >
              <span className="my-6 text-Medium-Grey text-xs font-extrabold uppercase">
                {each.name} ({each.tasks?.length})
              </span>
              <div className="flex flex-col gap-4">
                {each.tasks?.map((task, id) => (
                  <Dialog key={task.id}>
                    <DialogTrigger asChild>
                      <div className=" bg-White text-left dark:bg-Dark-Grey min-h-[5.5rem] rounded-lg p-4 shadow-md flex flex-col justify-center cursor-pointer w-full">
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
                    </DialogTrigger>
                    <DialogContent key={task.id}>
                      <DialogHeader>
                        <DialogTitle>
                          <div className="flex items-center justify-between">
                            <span className="text-lg text-left">
                            {task.title}
                            </span>
                            <MoreVertical className="h-5 text-Medium-Grey" />
                          </div>
                        </DialogTitle>
                        {task.description && (
                          <DialogDescription className="text-Medium-Grey text-sm font-medium leading-6 mt-6 text-left">
                            {task.description}
                          </DialogDescription>
                        )}
                      </DialogHeader>
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
                              {/* {sub.isCompleted && (
                                )} */}
                                <Check className={`w-4 ${sub.isCompleted ? "opacity-100" : "opacity-0"} text-White`} />
                            </Checkbox.Root>
                            <label>{sub.title}</label>
                          </div>
                        ))}
                        <span className="text-xs mb-2 font-extrabold mt-6 text-Medium-Grey">
                          Current Status
                        </span>

                        <StatusSelect placeholder={task.status ? task.status : (board[0]?.columns && board[0]?.columns[0]?.name)!} board={board} changeStatus={()=>{}} />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default AllBoard;
