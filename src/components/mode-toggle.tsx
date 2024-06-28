// "use client" is assumed to be an import for a specific environment setup

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Check the initial theme and set the initial state accordingly
  const initialIcon = theme === "dark" ? (
    <MoonIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
  ) : (
    <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
  );

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {initialIcon}
    </Button>
  );
}

