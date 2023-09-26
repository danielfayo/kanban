import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUpIcon } from "lucide-react";
import { useAppSelector } from "@/redux/store";

type StatusSelectProps = {
  placeHolder: string;
};

const StatusSelect: React.FC<StatusSelectProps> = ({ placeHolder }) => {
  const boards = useAppSelector((state) => state.boards.boards);

  return (
    <Select.Root>
      <Select.Trigger className="flex items-center justify-between h-10 px-4 rounded border border-Medium-Grey">
        <Select.Value className="text-sm font-medium" placeholder={placeHolder} />
        <Select.Icon className="text-Main-Purple">
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-White rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          {boards.map((each, id) => (
            <Select.Item key={id} value={each.name}>
              <Select.ItemText>{each.name}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
export default StatusSelect;
