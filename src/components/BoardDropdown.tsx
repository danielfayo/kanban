import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical } from "lucide-react";
import EditBoardDialog from "./EditBoardDialog";
import { boardsType } from "@/lib/types";
import { useDispatch } from "react-redux";
import { replaceBoards } from "@/redux/features/boardSlice";
import { AppDispatc } from "@/redux/store";
import { boards } from "../../data";
import { useRouter } from "next/navigation";

type BoardDropdownProps = {
    board: boardsType[]
};

const BoardDropdown: React.FC<BoardDropdownProps> = ({ board}) => {
  const dispatch = useDispatch<AppDispatc>();
  const router = useRouter();
  
  const deleteBoard = (boardId: string) => {
    const updatedBoards: boardsType[] = boards.filter(
      (each) => each.id !== boardId
    );
    dispatch(replaceBoards(updatedBoards));
    router.push("/");
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <MoreVertical className="h-5 text-Medium-Grey cursor-pointer" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50 rounded-lg flex flex-col gap-2 p-4 w-48 bg-White dark:bg-Dark-Grey">
            <EditBoardDialog board={board}/>
          <DropdownMenu.Item >
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={()=>deleteBoard(board[0].id)} className="text-sm text-Red cursor-pointer">
            Delete Board
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
export default BoardDropdown;
