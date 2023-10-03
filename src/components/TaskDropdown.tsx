import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical } from "lucide-react";
import EditTaskDialog from "./EditTaskDialog";
import { tasksType } from "@/lib/types";

type TaskDropdownProps = {
  deleteOnClick: () => void;
  task: tasksType;
  colID: string;
  taskID: string;
};

const TaskDropdown: React.FC<TaskDropdownProps> = ({ deleteOnClick, task, colID, taskID }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MoreVertical className="h-5 text-Medium-Grey cursor-pointer" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50 rounded-lg flex flex-col gap-4 p-4 w-48 bg-White dark:bg-Dark-Grey">
            <EditTaskDialog task={task} colID={colID} taskID={taskID} />
          
          <DropdownMenu.Item
            onClick={deleteOnClick}
            className="text-sm text-Red cursor-pointer"
          >
            Delete Task
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
export default TaskDropdown;
