import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
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
import Image from "next/image";

export default function login() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
        {/* <div className="pt-10 flex justify-center items-center flex-col"> */}
        <Image src="/images/logo_512.png" alt="community-logo" width={80} height={80}/>
        <p className="font-bold">Freelancegram</p>
        <p>A community for freelancers!</p>
        {/* </div> */}
      <Tabs defaultValue="login" className="w-full p-2 md:w-[500px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">login</TabsTrigger>
          <TabsTrigger value="register">register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
         <Login/>
        </TabsContent>
        <TabsContent value="register">
         <Register/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
