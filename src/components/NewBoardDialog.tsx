import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { Button } from "./ui/Button";
import { PanelLeft } from "lucide-react";

type NewBoardDialogProps = {};

const NewBoardDialog: React.FC<NewBoardDialogProps> = () => {

const handleCreateBoard = () => {
  
}

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-Main-Purple flex gap-3 items-center text-sm font-bold mx-6 h-12 ">
          <PanelLeft size={16} />+ Create New Board
        </button>
      </Dialog.Trigger>
      <Dialog.Portal className="bg-White dark:bg-Dark-Grey data-[state=open]:animate-overlayShow fixed inset-0">
        <Dialog.Overlay className="bg-White dark:bg-Dark-Grey z-20 opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          asChild
          className="w-full max-w-[38rem] z-20 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] p-4 md:p-8 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-White dark:bg-Dark-Grey shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <div>
            <Dialog.Title className="text-lg font-bold mb-6">
              Add New Board
            </Dialog.Title>
            <Form.Root>
              <div>
                <Form.Field name="boardName">
                  <div className="flex flex-col gap-2 w-full">
                    <Form.Label className="text-xs text-Medium-Grey font-bold">
                      Name
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        type="text"
                        required
                        className="w-full border px-4 py-2 rounded-lg border-Medium-Grey bg-White dark:bg-Dark-Grey"
                        placeholder="e.g. Web Design"
                      />
                    </Form.Control>
                    <Form.Message
                      match="valueMissing"
                      className="text-xs text-Red"
                    >
                      Please fill in the name of the board
                    </Form.Message>
                  </div>
                </Form.Field>
                <div className="my-6">
                  <Form.Field name="columns">
                    <Form.Label className="text-xs text-Medium-Grey font-bold">
                      Column
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        type="text"
                        required
                        className="w-full border px-4 py-2 rounded-lg border-Medium-Grey bg-White dark:bg-Dark-Grey"
                        placeholder="e.g. Todo"
                      />
                    </Form.Control>
                    <Form.Message
                      match="valueMissing"
                      className="text-xs text-Red"
                    >
                      Please fill in the name of the column
                    </Form.Message>
                    <Button intent="secondary" size="large" className="w-full mt-3">+ Add New Column</Button>
                  </Form.Field>
                </div>
              </div>

              {/* <Form.Message /> */}
              {/* <Form.ValidityState /> */}

              <Form.Submit asChild>
                <Button size="large" className="w-full">
                  Create New Board
                </Button>
              </Form.Submit>
              <Dialog.Close asChild></Dialog.Close>
            </Form.Root>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default NewBoardDialog;
