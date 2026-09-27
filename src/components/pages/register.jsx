import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USERS } from "../../data/data";
import { setAuth } from "../../store/slices/authSlice";

const registerSchema = z
  .object({
    name: z.string().min(2, "name is too short").max(60, "name is too long"),
    email: z
      .string()
      .min(1, "email is required")
      .email("please enter a valid email"),
    password: z
      .string()
      .min(8, "password must be at least 8 characters")
      .max(30, "password is too long")
      .regex(/[A-Z]/, "must contain at least one uppercase letter")
      .regex(/[0-9]/, "must contain at least one number"),
    confirmPassword: z.string().min(1, "please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const existingUser = USERS.find((u) => u.email === data.email);

      if (existingUser) {
        setError("email", {
          type: "manual",
          message: "An account with this email already exists.",
        });
        return;
      }

      // NOTE: USERS is static mock data — this doesn't actually persist a
      // new user anywhere. In a real app this is where you'd POST to your
      // backend, get back a real user record (with a server-issued role),
      // and hash the password server-side.
      const newUser = { name: data.name, email: data.email, role: "USER" };

      dispatch(
        setAuth({ isAuth: true, email: newUser.email, role: newUser.role }),
      );
      localStorage.setItem("email", newUser.email);
      localStorage.setItem("role", newUser.role);

      reset();
      navigate("/blogs"); // same USER redirect target as LoginPage
    } catch (err) {
      console.error(err);
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div id="register-page" className="w-full">
      <div id="register-section" className="container flex items-center py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-full max-w-sm mx-auto"
        >
          <div className="text-center">
            <h1 className="font-heading text-2xl">Create an account</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Already have one?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </div>

          {errors.root && (
            <p className="text-sm text-red-500 text-center">
              {errors.root.message}
            </p>
          )}

          <div id="name-group" className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className={errors.name ? "border border-red-500" : ""}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div id="email-group" className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              className={errors.email ? "border border-red-500" : ""}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div id="password-group" className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              className={errors.password ? "border border-red-500" : ""}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div id="confirm-password-group" className="flex flex-col gap-1.5">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              className={errors.confirmPassword ? "border border-red-500" : ""}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div id="button-group" className="flex justify-around gap-2">
            <Button
              type="button"
              className="px-8"
              variant="outline"
              onClick={() => reset()}
              disabled={isSubmitting}
            >
              Reset
            </Button>
            <Button type="submit" className="px-8" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Register"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
