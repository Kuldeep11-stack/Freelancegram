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
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/lib/supabase/supabaseClient";
import Env from "@/Env";
import { toast } from "react-toastify";
const AddPosts = ({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const [previewURL, setPreviewUrl] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const handleImageIcon = () => {
    imageRef.current?.click();
  };
  const handleimageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
      const imageURL = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageURL);
    }
  };

  const removePreview = () => {
    setImage(null);
    if (imageRef.current) {
      imageRef.current.value = "";
    }
    setPreviewUrl(undefined);
  };
  const resetState = () => {
    setContent("");
    removePreview();
  };

  const addPost = async () => {
    setLoading(true);
    const payload: PostPayloadType = {
      content: content,
      user_id: user?.id,
    };
    if (image) {
      const path = `${user?.id}/${uuidv4()}`;
      const { data, error } = await supabase.storage
        .from(Env.S3_BUCKET)
        .upload(path, image);
      if (error) {
        console.log("eror");
        toast.error("Something went wrong while uploading file image ", {
          theme: "colored",
        });
        return;
      }
      payload.image = data.path;
    }

    const { error } = await supabase.from("posts").insert(payload);
    if (error) {
      console.log("errors");
      // console.log(user?.id);
      toast.error("Something went wrong while uploading the image!", {
        theme: "colored",
      });
      setLoading(false);
      return;
    }
    resetState();
    setLoading(false);
    toast.success("Post added succesfully!", { theme: "colored" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
        </DialogHeader>
        <div>
          <textarea
            className="bg-muted h-32 w-full rounded-lg p-2 border outline-none"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          {previewURL && (
            <ImagePreview image={previewURL} callback={removePreview} />
          )}
        </div>
        <div className="flex justify-between items-center mt-2">
          <input
            type="file"
            className="hidden"
            ref={imageRef}
            accept="image/png,image/svg,image/jpeg,image/webp,image/gif"
            onChange={handleimageChange}
          />
          <Image className="cursor-pointer" onClick={handleImageIcon} />
          <Button disabled={content.length < 1 || loading} onClick={addPost}>
            {loading ? "Processing" : "Post"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPosts;
