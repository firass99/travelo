import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleTheme } from "../store/slices/themeSlice";

function ThemeTogglerButton() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button onClick={() => dispatch(toggleTheme())}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}

export default ThemeTogglerButton;
