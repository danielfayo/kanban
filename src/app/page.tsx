"use client"

import useColorMode from "@/hooks/useColorMode";

export default function Home() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <div className="bg-white dark:bg-black w-full h-screen">
        <button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          className="bg-black text-white dark:bg-white dark:text-black"
        >
          Switch Theme
        </button>
      </div>
    </>
  );
}
