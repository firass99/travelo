import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Moon, Plane, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import CartSheet from "./cart-sheet";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import ThemeTogglerButton from "./theme-toggler-btn";
import { deleteAuth } from "../store/slices/authSlice";

const Links = [
  { name: "Blogs", url: "/blogs" },
  { name: "Contact", url: "/contact" },
];

const AuthLinks = [
  { name: "Login", url: "/login" },
  { name: "Register", url: "/register" },
];

function Navbar() {
  const theme = useSelector((state) => state.theme.theme);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email", null);
    localStorage.removeItem("role", null);
    dispatch(deleteAuth());
    navigate("/");
  };

  return (
    <div className="w-full bg-primary sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-2xl text-white"
        >
          <Plane className="h-6 w-6" />
          Travelo <p className="text-sm">{auth.email}</p>
        </Link>

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

        <div className="hidden md:flex items-center gap-3">
          <CartSheet />
          <ThemeTogglerButton />

          {/* Fixed: render prop instead of asChild */}

          {auth.isAuth ? (
            <>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
                onClick={handleLogout}
                nativeButton={false}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
                render={<Link to="/login" />}
                nativeButton={false}
              >
                Login
              </Button>
              <Button
                size="lg"
                variant="secondary"
                render={<Link to="/register" />}
                nativeButton={false}
              >
                Register
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <CartSheet />
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white"
                />
              }
            >
              <Menu className="h-6 w-6" />
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
                      <SheetClose render={<Link to={link.url} />}>
                        <span className="text-base font-semibold hover:text-primary transition-colors">
                          {link.name}
                        </span>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 mt-4 border-t pt-4">
                  {AuthLinks.map((link) => (
                    <SheetClose
                      key={link.url}
                      render={
                        <Button
                          variant={
                            link.name === "Login" ? "outline" : "default"
                          }
                          render={<Link to={link.url} />}
                        />
                      }
                    >
                      {link.name}
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
