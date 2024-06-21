"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import { ImageIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";
import createPostAction from "@/actions/createPostAction";

function PostForm() {
  const { user } = useUser();
  const ref = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handlePostAction = async (formData: FormData) => {
    const formDataCopy = formData;
    ref.current?.reset();

    const text = formDataCopy.get("postInput") as string;

    if (!text.trim()) {
      throw new Error("Post input is required!");
    }
    setPreview(null);

    try {
      await createPostAction(formDataCopy);
    } catch (error) {
      console.error(`Error creating post: ${error}`);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mb-2">
      <form
        className="sm:p-3 bg-white rounded-lg border"
        ref={ref}
        action={(formData) => {
          handlePostAction(formData);
        }}
      >
        <div className="flex-1 items-center space-x-2">
          <div className="flex items-center pt-3 px-3">
            <Avatar>
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="ml-2 font-semibold">
              <span>{user?.firstName} </span>
              <span>{user?.lastName}</span>
            </div>
          </div>

          <div className="sm:flex mt-2 mx-2 justify-center items-center">
            <div className="flex justify-center items-center mb-3 sm:mb-0">
              <input
                type="text"
                name="postInput"
                className="block min-w-[200px] w-[420px] rounded-md border-0 px-1.5 py-1.5 mr-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Start writing a post..."
              />
              <input
                ref={fileInputRef}
                type="file"
                name="image"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </div>
            {/* <div className="flex sm:flex justify-center items-center sm:mx-2">
              <button 
                className="rounded-md bg-[#0048e8] text-[#F4F2ED] px-2.5 py-1.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Post
              </button>
            </div> */}
          </div>
        </div>

        {preview && (
          <div className="mt-3">
            <Image
              width={200}
              height={200}
              src={preview}
              alt="Preview"
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="flex mt-4 mb-2 mx-3 justify-end space-x-2">
          <Button
            type="button"
            className="bg-[#152039] text-[#d7df23] text-[14px]"
            onClick={() => fileInputRef.current?.click()}
          >
            <ImageIcon color="currentColor" className="mr-2" size={16} />
            {preview ? "Change" : "Add"} image
          </Button>

          {preview && (
            <Button
              variant="outline"
              type="button"
              onClick={() => setPreview(null)}
            >
              <XIcon className="mr-2" size={16} color="currentColor" />
              Remove image
            </Button>
          )}
        </div>
      </form>

      <hr className="mt-2 border-gray-300" />
    </div>
  );
}

export default PostForm;
