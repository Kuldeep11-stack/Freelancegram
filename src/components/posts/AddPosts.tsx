"use client";
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@supabase/supabase-js";
import { Image } from "lucide-react";
import { Button } from "../ui/button";
import ImagePreview from "../common/ImagePreview";
import { createEmptyCacheNode } from "next/dist/client/components/app-router";

const AddPosts = ({user,children}:{user : User, children:React.ReactNode}) => {
    const [open , setOpen] = useState(false);
    const imageRef = useRef<HTMLInputElement | null>(null);
    const [image , setImage] = useState<File  | null>(null);
    const [previewURL , setPreviewUrl] = useState("");
    const handleImageIcon = () => {
        imageRef.current?.click()
    }
    const  handleimageChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
      const selectedFile = event.target.files?.[0];
      if(selectedFile){
        setImage(selectedFile);
        const imageURL = URL.createObjectURL(selectedFile);
        setPreviewUrl(imageURL);
      }
    }

    const removePreview = () =>{
      setImage(null);
      if(imageRef.current){
        imageRef.current.value = "";
      }
      setPreviewUrl("");
    }
  return (
    <Dialog open ={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onInteractOutside={e=>e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
        </DialogHeader>
        <div>
            <textarea className="bg-muted h-32 w-full rounded-lg p-2 border outline-none"></textarea>
            {previewURL && <ImagePreview image={previewURL} callback={removePreview}/>}
        </div>
        <div className="flex justify-between items-center mt-2">
            <input type="file" className="hidden" ref={imageRef} accept="image/png,image/svg,image/jpeg,image/webp,image/gif" onChange={handleimageChange}/>
        <Image className="cursor-pointer" onClick={handleImageIcon}/>
        <Button >Post</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPosts;
