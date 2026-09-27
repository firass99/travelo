import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { promise, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .email("please enter a valid email"),
  password: z
    .string()
    .min(2, "password is too short")
    .max(30, "password is too long")
    .regex(/[A-Z]/, "must contain at least one uppercase letter")
    .regex(/[0-9]/, "must contain at least one number"),
});

function LoginPage() {
  const {
    register, // to register inputs to RHF  {...register("email")}
    handleSubmit, //<form onSubmit={handleSubmit(function)}>
    watch, // to trach inputs value const x =watch(x, '')
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: zodResolver(loginSchema), //connect zoh+ RHF
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // data send by RHF
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Registred : ", data);
    // TODO: call your login API / dispatch auth action here
    isSubmitted ? navigate("/destinations") : reset();
  };

  return (
    <div id="login-page" className="w-full">
      <div id="login-section" className="container flex items-center py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-full max-w-sm mx-auto"
        >
          <div id="email-group" className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              className={errors.email ? "border border-red-500" : ""}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
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
              <span className="text-red-500">{errors.password.message}</span>
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
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
