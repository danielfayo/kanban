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
import { useDispatch } from "react-redux";
import { AppDispatc, useAppSelector } from "@/redux/store";
import { nanoid } from "nanoid";
import { createBoard, replaceBoards } from "@/redux/features/boardSlice";
import { PanelLeft, X } from "lucide-react";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";
import useCurrentPath from "@/hooks/useCurrentPath";
import { boardsType, columnType } from "@/lib/types";
import { boards } from "../../data";

type EditBoardDialogProps = {
  board: boardsType[];
};

const EditBoardDialog: React.FC<EditBoardDialogProps> = ({ board }) => {
  const dispatch = useDispatch<AppDispatc>();
  //   const pathName = usePathname();
  //   const { currentPath } = useCurrentPath(pathName);
  //   const boards = useAppSelector((state) => state.boards.boards);
  //   const board = boards.filter((b) => b.name === currentPath);

  const [boardTitle, setBoardTitle] = useState("");
  const [boardColumns, setboardColumns] = useState<columnType[]>([]);

  useEffect(() => {
    if (board[0]) {
      setBoardTitle(board[0].name);
      setboardColumns(
        board[0].columns?.map((col) => ({
          id: col.id,
          name: col.name,
          tasks: col.tasks,
        }))!
      );
    }
  }, [board]);

  const handleChangeBoard = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  };

  const createNewCol = () => {
    setboardColumns((prev) => [
      ...prev!,
      { id: nanoid(), name: "", tasks: [] },
    ]);
  };

  const removeCol = (id: string) => {
    if (boardColumns!.length > 1) {
      const filteredArr = boardColumns?.filter((each) => each.id !== id);
      setboardColumns(filteredArr);
    }
  };

  const handleColText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    const newArr = boardColumns?.map((each, i) => {
      if (id === each.id) {
        return { ...each, name: value };
      }
      return each;
    });
    setboardColumns(newArr);
  };

  const handleCreateBoard = () => {
    // const newBoard = {
    //   name: boardTitle,
    //   id: board[0].id,
    //   columns: boardColumns,
    // };
    const updatedBoards: boardsType[] = boards.map((each) => {
      if (each.id === board[0].id) {
        return {
          name: boardTitle,
          id: each.id,
          columns: boardColumns,
        };
      }
      return each;
    });
    dispatch(replaceBoards(updatedBoards));
    // setBoardTitle("");
    // setboardColumns([{ id: nanoid(), name: "", tasks: [] }]);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-sm text-Medium-Grey cursor-pointer">
          Edit Board
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-bold mb-6">
              Edit Board
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs text-Medium-Grey font-bold">Name</label>
            <input
              type="text"
              required
              value={boardTitle}
              onChange={handleChangeBoard}
              className="w-full border px-4 py-2 rounded-lg border-Medium-Grey bg-White dark:bg-Dark-Grey"
              placeholder="e.g. Web Design"
            />
          </div>
          <div className="my-6">
            <label className="text-xs text-Medium-Grey font-bold">Column</label>
            <div className="flex flex-col gap-2">
              {boardColumns?.map((col) => (
                <div key={col.id} className="flex gap-4 items-center">
                  <input
                    id={col.id}
                    value={col.name}
                    type="text"
                    required
                    onChange={handleColText}
                    className="w-full border px-4 py-2 rounded-lg border-Medium-Grey bg-White dark:bg-Dark-Grey"
                    placeholder="e.g. Todo"
                  />
                  <X
                    onClick={() => removeCol(col.id)}
                    className="w-8 h-8 text-Medium-Grey cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <Button
              onClick={createNewCol}
              intent="secondary"
              size="large"
              className="w-full mt-3"
            >
              + Add New Column
            </Button>
          </div>
          <DialogClose>
            <Button onClick={handleCreateBoard} size="large" className="w-full">
              Update Board
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default EditBoardDialog;
