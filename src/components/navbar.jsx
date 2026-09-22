import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Plane, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeContext } from "../providers/themeProvider";

const Links = [
  { name: "Blogs", url: "/blogs" },
  { name: "Contact", url: "/contact" },
];

const AuthLinks = [
  { name: "Login", url: "/login" },
  { name: "Register", url: "/register" },
];

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="w-full bg-primary sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-2xl text-white"
        >
          <Plane className="h-6 w-6" />
          Travelo
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {Links.map((link) => (
            <li key={link.url}>
              <Link
                to={link.url}
                className="text-white font-semibold hover:text-white/60 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] px-4">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/"
                  className="flex items-center gap-2 font-extrabold text-xl"
                >
                  <Plane className="h-5 w-5" />
                  Travelo
                </Link>

                <ul className="flex flex-col gap-4">
                  {Links.map((link) => (
                    <li key={link.url}>
                      <SheetClose asChild>
                        <Link
                          to={link.url}
                          className="text-base font-semibold hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 mt-4 border-t pt-4">
                  {AuthLinks.map((link) => (
                    <SheetClose asChild key={link.url}>
                      <Button
                        asChild
                        variant={link.name === "Login" ? "outline" : "default"}
                      >
                        <Link to={link.url}>{link.name}</Link>
                      </Button>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
