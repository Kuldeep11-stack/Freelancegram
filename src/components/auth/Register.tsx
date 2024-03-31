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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { registerAction } from "@/actions/authActions";
import { useFormState } from "react-dom";
import AuthSubmitBtn from "./AuthSubmitBtn";


const initState = {
    status : 0,
    errors : {}
}
const Register = () => {
    const [state , formAction] = useFormState(registerAction , initState)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register to get into Community!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form action={formAction}>
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <span className="text-red-500">{state?.errors?.name}</span>
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            <span className="text-red-500">{state?.errors?.username}</span>
          </div>
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
          <div className="space-y-1">
            <Label htmlFor="cpassword">Confirm Password</Label>
            <Input
              id="cpassword"
              type="password"
              name="password_confirmation"
              placeholder="Enter your password"
            />
            <span className="text-red-500">{state?.errors?.password}</span>
          </div>
          <AuthSubmitBtn/>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
