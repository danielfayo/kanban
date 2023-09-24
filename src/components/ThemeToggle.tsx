import React, { useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {};

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>();

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false)
    }
  }, [theme]);

  return (
    <div className="bg-Light-Grey-Light-Bg dark:bg-Very-Dark-Grey ml-6 mr-6 flex items-center justify-center h-12 rounded-lg">
      <label
        className="text-white text-[15px] leading-none pr-6"
        htmlFor="airplane-mode"
      >
        <Sun size={20} className="text-Medium-Grey" />
      </label>
      <Switch.Root
        checked={isDark}
        onClick={handleChangeTheme}
        className="w-[2.5rem] h-[1.25rem] rounded-full relative bg-Main-Purple outline-none flex "
        id="airplane-mode"
        // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
      >
        <Switch.Thumb
          className={`block w-[0.875rem] h-[0.875rem] bg-White rounded-full my-auto  transition-transform duration-100 data-[state=checked]:translate-x-[1.375rem] will-change-transform ${
            theme === "dark" ? "translate-x-[1.375rem]" : "translate-x-1"
          }`}
        />
      </Switch.Root>
      <label
        className="text-white text-[15px] leading-none pl-6"
        htmlFor="airplane-mode"
      >
        <MoonStar size={20} className="text-Medium-Grey" />
      </label>
    </div>
  );
};
export default ThemeToggle;
