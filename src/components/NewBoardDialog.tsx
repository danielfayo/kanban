import React, { useState } from "react";
// import * as Form from "@radix-ui/react-form";
import { Button } from "./ui/Button";
import { PanelLeft, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatc } from "@/redux/store";
import { boardsType } from "@/lib/types";
import { nanoid } from "nanoid";
import { createBoard } from "@/redux/features/boardSlice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/Dialog"


type NewBoardDialogProps = {};

const NewBoardDialog: React.FC<NewBoardDialogProps> = () => {
  const dispatch = useDispatch<AppDispatc>();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardColumns, setboardColumns] = useState([
    { id: nanoid(), name: "", tasks: [] },
  ]);

  const handleChangeBoard = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  };

  const createNewCol = () => {
    setboardColumns((prev) => [...prev, { id: nanoid(), name: "", tasks: []}]);
  };

  const removeCol = (id: string) => {
    if (boardColumns.length > 1) {
      const filteredArr = boardColumns.filter((each) => each.id !== id);
      setboardColumns(filteredArr);
    }
  };

  const handleColText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    const newArr = boardColumns.map((each, i) => {
      if (id === each.id) {
        return { ...each, name: value };
      }
      return each;
    });
    setboardColumns(newArr);
  };

  const handleCreateBoard = () => {
    const newBoard = {
      name: boardTitle,
      id: nanoid(),
      columns: boardColumns,
    };
    dispatch(createBoard(newBoard))
    setBoardTitle("")
    setboardColumns([
      { id: nanoid(), name: "", tasks: [] },
    ])
  };


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-Main-Purple flex gap-3 items-center text-sm font-bold mx-6 h-12 ">
            <PanelLeft size={16} />+ Create New Board
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              Add New Board
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
            {boardColumns.map((col) => (
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
              Create New Board
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default NewBoardDialog;
