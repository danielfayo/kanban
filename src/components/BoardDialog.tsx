import React from "react";
import { boardsType } from "@/lib/types";
import { Check, MoreVertical } from "lucide-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import StatusSelect from "./StatusSelect";

type BoardDialogProps = {
  board: boardsType[];
  trigger: React.ReactNode
};

const BoardDialog: React.FC<BoardDialogProps> = ({ board, trigger }) => {

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {board[0].columns?.map((col) =>
        col.tasks?.map((task) => (
          <DialogContent key={task.id}>
            <DialogHeader>
              <DialogTitle>
                <div className="flex items-center justify-between mb-6">
                  {task.title}
                  <MoreVertical className="h-5 text-Medium-Grey" />
                </div>
              </DialogTitle>
              {task.description && (
                <DialogDescription className="text-Medium-Grey text-sm font-medium leading-6">{task.description}</DialogDescription>
              )}
            </DialogHeader>
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-xs mb-4 font-extrabold text-Medium-Grey">
                Subtasks (
                {task.subtasks.filter((sub) => sub.isCompleted === true).length}{" "}
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
                    {sub.isCompleted && <Check className="w-4 text-White" />}
                  </Checkbox.Root>
                  <label>{sub.title}</label>
                </div>
              ))}
              <span className="text-xs mb-2 font-extrabold mt-6 text-Medium-Grey">
                Current Status
              </span>

              {/* <StatusSelect board={board} changeStatus={()=>{}}/> */}
            </div>
          </DialogContent>
        ))
      )}
    </Dialog>

    // <Dialog.Root>
    //   <Dialog.Trigger />
    //   <Dialog.Portal>
    //     <Dialog.Overlay className="bg-Black opacity-50 z-20 data-[state=open]:animate-overlayShow fixed inset-0" />
    //     <Dialog.Content className="w-full max-w-[38rem] z-20 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] p-4 md:p-8 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-White dark:bg-Dark-Grey shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
    //       {board[0].columns?.map((col) =>
    //         col.tasks?.map((task) => (
    //           <div key={task.id}>
    //             <div className="flex items-center justify-between mb-6">
    //               <Dialog.Title className="text-lg font-extrabold">
    //                 {task.title}
    //               </Dialog.Title>
    //               <MoreVertical className="h-5 text-Medium-Grey" />
    //             </div>

    //             {task.description && (
    //               <Dialog.Description className="text-Medium-Grey text-sm font-medium leading-6">
    //                 {task.description}
    //               </Dialog.Description>
    //             )}
    //             <div className="flex flex-col gap-2 mt-6">
    //               <span className="text-xs mb-4 font-extrabold text-Medium-Grey">
    //                 Subtasks (
    //                 {
    //                   task.subtasks.filter((sub) => sub.isCompleted === true)
    //                     .length
    //                 }{" "}
    //                 of {task.subtasks.length})
    //               </span>
    //               {task.subtasks.map((sub, id) => (
    //                 <div
    //                   key={id}
    //                   className="flex rounded-lg items-center gap-4 bg-Light-Grey-Light-Bg dark:bg-Very-Dark-Grey p-4"
    //                 >
    //                   <Checkbox.Root
    //                     className={` border w-4 h-4 rounded-sm flex items-center justify-center ${
    //                       sub.isCompleted
    //                         ? "bg-Main-Purple"
    //                         : "dark:bg-Dark-Grey bg-White"
    //                     } `}
    //                   >
    //                     {sub.isCompleted && (
    //                       <Check className="w-4 text-White" />
    //                     )}
    //                   </Checkbox.Root>
    //                   <label>{sub.title}</label>
    //                 </div>
    //               ))}
    //               <span className="text-xs mb-2 font-extrabold mt-6 text-Medium-Grey">
    //                 Current Status
    //               </span>

    //               {/* <StatusSelect board={board}/> */}
    //             </div>
    //             <Dialog.Close />
    //           </div>
    //         ))
    //       )}
    //     </Dialog.Content>
    //   </Dialog.Portal>
    // </Dialog.Root>
    /* {each.tasks?.map((task, id) => (
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
                        <StatusSelect board={board}/>
                      </div>
                    }
                  />
                ))} */
  );
};
export default BoardDialog;
