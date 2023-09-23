"use client"

import { Button } from "@/components/ui/Button";
import useColorMode from "@/hooks/useColorMode";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
 
export default function Home() {
  const [colorMode, setColorMode] = useColorMode();
  const boards = useAppSelector((state) => state.boards.boards);
  const router = useRouter()

  useEffect(()=> {
    router.push(`/board/${boards[0].name.split(" ").join("").toLocaleLowerCase()}`)
  })
  

  const handleChangeTheme = () => {
    setColorMode(colorMode === "light" ? "dark" : "light")
  }
  return (
    <>
    </>
  );
}
