"use client"

import * as Dialog from "@radix-ui/react-dialog";

import React from "react";

type DialogModalProps = {
  triggerText: React.ReactElement;
  title: React.ReactElement;
  description?: React.ReactElement
  button: React.ReactElement
  content: React.ReactElement
};

const DialogModal: React.FC<DialogModalProps> = ({
  triggerText,
  title,
  description,
  button,
  content
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerText}</Dialog.Trigger>
      <Dialog.Portal className="bg-White dark:bg-Dark-Grey data-[state=open]:animate-overlayShow fixed inset-0">
        <Dialog.Overlay className="bg-Black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] p-4 md:p-8 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-White dark:bg-Dark-Grey shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title asChild>{title}</Dialog.Title>
          <Dialog.Description asChild>{description}</Dialog.Description>
          {content}
          <Dialog.Close asChild >{button}</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default DialogModal;
