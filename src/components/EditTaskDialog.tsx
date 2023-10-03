import useCurrentPath from "@/hooks/useCurrentPath";
import { useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/Dialog";
import { Button } from "./ui/Button";
import { X } from "lucide-react";
import { nanoid } from "nanoid";
import StatusSelect from "./StatusSelect";
import { tasksType } from "@/lib/types";
import { replaceBoards } from "@/redux/features/boardSlice";
import { useDispatch } from "react-redux";
import { AppDispatc } from "@/redux/store";

type EditTaskDialogProps = {
  task: tasksType;
  colID: string;
  taskID: string;
};

const EditTaskDialog: React.FC<EditTaskDialogProps> = ({ task, colID, taskID }) => {
  const dispatch = useDispatch<AppDispatc>();
  const pathName = usePathname();
  const { currentPath } = useCurrentPath(pathName);
  const boards = useAppSelector((state) => state.boards.boards);

  const board = boards.filter((b) => b.name === currentPath);
  const thisBoard = board[0]?.columns;

  const [subtasks, setSubtasks] = useState(
    task.subtasks.map((sub) => ({
      title: sub.title,
      id: sub.id,
      isCompleted: sub.isCompleted,
    }))
  );

  const [titleAndDescription, setTitleAndDescription] = useState({
    title: task.title,
    description: task.description,
  });
  const [status, setStatus] = useState(task.status);

  //   useEffect(() => {
  //     if (thisBoard) {
  //       setStatus(thisBoard[0].name);
  //     }
  //   }, [thisBoard]);

  const addNewSubtask = () => {
    setSubtasks((prev) => [
      ...prev,
      { title: "", id: nanoid(), isCompleted: false },
    ]);
  };

  const changeTitleAndDescription = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitleAndDescription((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubtaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    const newArr = subtasks.map((each, i) => {
      if (id === each.id) {
        return { ...each, title: value };
      }
      return each;
    });
    setSubtasks(newArr);
  };

  const removeSubtask = (id: string) => {
    if (subtasks.length > 1) {
      const filteredArr = subtasks.filter((each) => each.id !== id);
      setSubtasks(filteredArr);
    }
  };

  const handleChangeStatus = (value: string) => {
    setStatus(value);
  };

  const editTask = (colID: string, taskID: string) => {
    const updatedColumns = board[0].columns?.map((col) => {
      if (col.id == colID) {
        const updatedTasks = col.tasks?.map((tsk) => {
          if (tsk.id === taskID) {
            return {
              id: tsk.id,
              title: titleAndDescription.title,
              description: titleAndDescription.description,
              status: status,
              subtasks: subtasks,
            };
          }
          return tsk;
        });
  
        return {
          ...col,
          tasks: updatedTasks,
        };
      }
      return col;
    });
    //   {
    //     col.tasks?.map((tsk) => {
    //       if (tsk.id === taskID) {
    //         return tsk = {
    //           id: tsk.id,
    //           title: titleAndDescription.title,
    //           description: titleAndDescription.description,
    //           status: status!,
    //           subtasks: subtasks,
    //         };
    //       }
    //       return tsk
    //     });
    //   }
    //   return col;
    // });

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

  return (
    <Dialog>
      <DialogTrigger className='text-left text-sm text-Medium-Grey cursor-pointer' >
        Edit Task
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left text-lg font-bold">Edit Task</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 w-full my-6">
          <label className="text-xs text-Medium-Grey font-bold">Title</label>
          <input
            name="title"
            value={titleAndDescription.title}
            onChange={changeTitleAndDescription}
            type="text"
            required
            className="w-full border px-4 py-2 rounded-lg border-Medium-Grey bg-White dark:bg-Dark-Grey"
            placeholder="e.g. Take coffee break"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs text-Medium-Grey font-bold">
            Description
          </label>
          <textarea
            name="description"
            value={titleAndDescription.description}
            onChange={changeTitleAndDescription}
            className="w-full border px-4 py-2 rounded-lg border-Medium-Grey bg-White dark:bg-Dark-Grey min-h-[7rem]"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
              recharge the batteries a little."
          />
        </div>
        <div className="my-6">
          <label className="text-xs text-Medium-Grey font-bold">Subtasks</label>
          <div className="flex flex-col gap-2">
            {subtasks.map((sub) => (
              <div key={sub.id} className="flex gap-4 items-center">
                <input
                  id={sub.id}
                  value={sub.title}
                  type="text"
                  required
                  onChange={handleSubtaskChange}
                  className="w-full border px-4 py-2 rounded-lg border-Medium-Grey bg-White dark:bg-Dark-Grey"
                  placeholder="e.g. Make coffee"
                />
                <X
                  onClick={() => removeSubtask(sub.id)}
                  className="w-8 h-8 text-Medium-Grey cursor-pointer"
                />
              </div>
            ))}
          </div>
          <Button
            onClick={addNewSubtask}
            intent="secondary"
            size="large"
            className="w-full mt-3"
          >
            + Add New Column
          </Button>
        </div>
        <StatusSelect
          placeholder={status}
          board={board}
          changeStatus={handleChangeStatus}
        />
        <DialogClose>
          <Button
            onClick={() => editTask(colID, taskID)}
            size="large"
            className="w-full mt-6"
          >
            Save Changes
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default EditTaskDialog;
