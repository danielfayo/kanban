import React, { useState } from "react";
import { MoreVertical, Check } from "lucide-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import StatusSelect from "./StatusSelect";
import { boardsType, tasksType } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import TaskDropdown from "./TaskDropdown";
import { replaceBoards } from "@/redux/features/boardSlice";
import { useDispatch } from "react-redux";
import { AppDispatc } from "@/redux/store";
import UpdateStatus from "./UpdateStatus";

type AllBoardProps = {
  board: boardsType[];
  boards: boardsType[];
};

const AllBoard: React.FC<AllBoardProps> = ({ board, boards }) => {
  const [holdingStatus, setHoldingStatus] = useState("");
  const [holdingTask, setHoldingTask] = useState<tasksType>();
  const dispatch = useDispatch<AppDispatc>();

  const deleteTask = (colID: string, taskID: string) => {
    const updatedColumns = board[0].columns?.map((each) => {
      if (each.id === colID) {
        return {
          ...each,
          tasks: each.tasks?.filter((task) => task.id !== taskID),
        };
      }
      return each;
    });
    const updatedBoard = {
      ...board[0],
      columns: updatedColumns,
    };
    const updatedBoards = boards.map((boardItem) => {
      if (boardItem.id === updatedBoard.id) {
        return updatedBoard;
      }
      return boardItem;
    });
    dispatch(replaceBoards(updatedBoards));
  };

  const checkSubtask = (colid: string, taskid: string, subid: string) => {
    const updatedCol = board[0].columns?.map((brd) => {
      if (brd.id === colid) {
        const updatedTask = brd.tasks?.map((task) => {
          if (task.id === taskid) {
            const updatedSubtask = task.subtasks.map((sub) => {
              if (sub.id === subid) {
                if (sub.isCompleted === false) {
                  return { ...sub, isCompleted: true };
                }
                return { ...sub, isCompleted: false };
              }
              return sub;
            });
            return { ...task, subtasks: updatedSubtask };
          }
          return task;
        });
        return { ...brd, tasks: updatedTask };
      }
      return brd;
    });

    const updatedBoard = {
      ...board[0],
      columns: updatedCol,
    };

    const updatedBoards = boards.map((boardItem) => {
      if (boardItem.id === updatedBoard.id) {
        return updatedBoard;
      }
      return boardItem;
    });

    dispatch(replaceBoards(updatedBoards));
  };

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
                            <TaskDropdown
                              deleteOnClick={() => deleteTask(each.id, task.id)}
                              task={task}
                              colID={each.id}
                              taskID={task.id}
                            />
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
                              onClick={() =>
                                checkSubtask(each.id, task.id, sub.id)
                              }
                              className={` border w-4 h-4 rounded-sm flex items-center justify-center ${
                                sub.isCompleted
                                  ? "bg-Main-Purple"
                                  : "dark:bg-Dark-Grey bg-White"
                              } `}
                            >
                              {/* {sub.isCompleted && (
                                )} */}
                              <Check
                                className={`w-4 ${
                                  sub.isCompleted ? "opacity-100" : "opacity-0"
                                } text-White`}
                              />
                            </Checkbox.Root>
                            <label>{sub.title}</label>
                          </div>
                        ))}
                        <span className="text-xs mb-2 font-extrabold mt-6 text-Medium-Grey">
                          Current Status
                        </span>

                        {/* <StatusSelect
                          placeholder={
                            task.status
                              ? task.status
                              : (board[0]?.columns &&
                                  board[0]?.columns[0]?.name)!
                          }
                          board={board}
                          changeStatus={(value: string) =>
                            setHoldingStatus(value)
                          }
                        /> */}
                        <UpdateStatus
                          board={board}
                          colid={each.id}
                          placeholder={
                            (board[0]?.columns && board[0]?.columns[index]?.name)!
                          }
                          taskid={task.id}
                          task={task}
                        />
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
