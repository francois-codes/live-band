import { FC } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useDarkTheme } from "@/lib/useDarkTheme";

export const ToggleDarkMode: FC = () => {
  const { theme, toggleTheme } = useDarkTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={theme === "dark"}
        onClick={toggleTheme}
      />
      <Label htmlFor="airplane-mode">Dark mode</Label>
    </div>
  );
};
