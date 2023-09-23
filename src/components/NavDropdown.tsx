import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import SideList from "./SideList";

type NavDropdownProps = {
  trigger: React.ReactElement;
};

const NavDropdown: React.FC<NavDropdownProps> = ({ trigger }) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="drop-shadow-lg pb-4 rounded-lg bg-White ml-[3.5rem] mt-4 dark:bg-Dark-Grey w-[16.5rem] h-[20.125rem]">
            {/* <DropdownMenu.Item /> */}
            <SideList />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};
export default NavDropdown;
