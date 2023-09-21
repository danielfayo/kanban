"use client"

import { Button } from "@/components/ui/Button";
import useColorMode from "@/hooks/useColorMode";

export default function Home() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <div className="bg-White dark:bg-Main-Purple w-full h-screen">
        <button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          className="bg-black text-white dark:bg-white dark:text-black"
        >
          Switch Theme
        </button>
        <Button intent="destructive" className="w-48 mt-4" >Text</Button>
      </div>
    </>
  );
}
