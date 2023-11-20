import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { boardsType, tasksType } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { replaceBoards } from "@/redux/features/boardSlice";
import { boards } from "../../data";

type UpdateStatusProps = {
  colid: string;
  taskid: string;
  placeholder: string;
  task: tasksType;
  board: boardsType[];
};

const UpdateStatus: React.FC<UpdateStatusProps> = ({
  colid,
  taskid,
  placeholder,
  board,
  task,
}) => {
  const dispatch = useDispatch();
  const [holdingTask, setHoldingTask] = useState<tasksType>({
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    subtasks: task.subtasks,
  });

  const updateStat = (val: string) => {
    const updatedCols = board[0].columns?.map((col) => {
      if (col.id === colid) {
        // const taskToMove = col.tasks?.find((tsk) => tsk.id === taskid);
        // if (taskToMove) {
        //   setHoldingTask(taskToMove);
        // }
        const updatedTasks =
          col.tasks?.filter((tsk) => tsk.id !== taskid);
        return {
          ...col,
          tasks: updatedTasks,
        };
      }
      if (col.name === val) {
        const updatedTasks = [...(col.tasks || []), holdingTask];
        return {
          ...col,
          tasks: updatedTasks,
        };
      }
      return col;
    });
    const updatedBoard = {
      ...board[0],
      columns: updatedCols,
    };

    const updatedBoards = boards.map((boardItem) => {
      if (boardItem.id === updatedBoard.id) {
        return updatedBoard;
      }
      return boardItem;
    });
    dispatch(replaceBoards(updatedBoards));
  };

  const handleSelectChange = (value: string) => {
    updateStat(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-White dark:bg-Very-Dark-Grey py-2">
        {board[0].columns?.map((each) => (
          <SelectItem
            className="cursor-pointer w-full"
            key={each.id}
            value={each.name}
          >
            {each.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default UpdateStatus;
