import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { boardsType } from "@/lib/types";

type StatusSelectProps = {
  placeholder: string
  board: boardsType[];
  changeStatus: (value: string) => void
};

const StatusSelect: React.FC<StatusSelectProps> = ({ placeholder,board, changeStatus }) => {
  const boards = board[0]?.columns;

  return (
    <Select onValueChange={changeStatus}>
      <SelectTrigger className="flex items-center justify-between h-10 px-4 rounded border border-Medium-Grey">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="w-full bg-White dark:bg-Very-Dark-Grey p-4 flex flex-col gap-2">
        {boards?.map(each => (
          <SelectItem className="px-0 cursor-pointer w-full" key={each.id} value={each.name}>{each.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>

  );
};
export default StatusSelect;
