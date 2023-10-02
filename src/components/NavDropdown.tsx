import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { boardsType } from "@/lib/types";
import Link from "next/link";
import { PanelLeft } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import NewBoardDialog from "./NewBoardDialog";

type NavDropdownProps = {
  trigger: React.ReactElement;
  boards: boardsType[];
  pathName: string;
};

const NavDropdown: React.FC<NavDropdownProps> = ({
  trigger,
  boards,
  pathName,
}) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="drop-shadow-lg pb-4 rounded-lg bg-White ml-[3.5rem] mt-4 dark:bg-Dark-Grey w-[16.5rem] h-[20.125rem]">
            {/* <DropdownMenu.Item /> */}
            <div className="flex flex-col h-full mb-12">
              <span className="text-xs font-bold tracking-[.15rem] text-Medium-Grey m-4">
                ALL BOARDS ({boards.length})
              </span>
              <div className="flex flex-col justify-between h-full">
                <div className="mb-auto">
                  <div className="flex flex-col mr-5">
                    {boards.map((board, id) => (
                      <DropdownMenu.Item asChild key={id}>
                        <Link
                          key={id}
                          href={`/board/${board.name
                            .split(" ")
                            .join("")
                            .toLocaleLowerCase()}`}
                          className={`flex text-[15px] font-bold gap-3 h-12 items-center px-6 hover:bg-Main-Purple hover:text-White rounded-r-full ${
                            pathName ===
                            "/board/" +
                              board.name.split(" ").join("").toLocaleLowerCase()
                              ? "bg-Main-Purple text-White"
                              : "text-Medium-Grey"
                          } `}
                        >
                          <PanelLeft size={16} />
                          {board.name}
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </div>
                  <DropdownMenu.Item asChild>
                    <NewBoardDialog/>
                  </DropdownMenu.Item>
                </div>

                <ThemeToggle />
              </div>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};
export default NavDropdown;
