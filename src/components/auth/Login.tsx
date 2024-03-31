"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthSubmitBtn from "./AuthSubmitBtn";
import { useFormState } from "react-dom";
import { loginAction } from "@/actions/authActions";

const initState={
  status : 0,
  errors:{}
}
const Login = () => {
  const [state , formAction] = useFormState(loginAction , initState)
   return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome back to community!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form action={formAction}>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <span className="text-red-500">{state?.errors?.email}</span>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <span className="text-red-500">{state?.errors?.password}</span>
          </div>
          <AuthSubmitBtn></AuthSubmitBtn>
        </form>
      </CardContent>    
    </Card>
  );
};

export default Login;
