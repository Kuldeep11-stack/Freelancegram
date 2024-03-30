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
const Register = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register to get into Community!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form>
          <div className="space-y-1">
            <Label htmlFor="email">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="cpassword">Confirm Password</Label>
            <Input
              id="cpassword"
              type="cpassword"
              name="cpassword"
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full mt-3">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
