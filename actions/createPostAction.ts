'use server'

import { IUser } from "@/types/user";
import { currentUser } from "@clerk/nextjs/server";
import { Post } from "@/mongodb/models/post";
import { AddPostRequestBody } from "@/app/api/posts/route";

export default async function createPostAction(formData: FormData){
    const user = await currentUser();

    if (!user?.id) {
      throw new Error("User not authenticated");
    }

    const postInput = formData.get("postInput") as string;
    const image = formData.get("image") as File;
    let imageUrl: string | undefined;
  
    if (!postInput) {
      throw new Error("Post input is required");
    }
  
    // define user
    const userDB: IUser = {
      userId: user.id,
      userImage: user.imageUrl,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
    };

    // upload image if there is one
    try {
      if(image.size > 0){
        // 1) upload image if there is one - MS Blob storage
        // 2) create post in database w/ image
        const body: AddPostRequestBody = {
          user: userDB,
          text: postInput,
        }
        await Post.create(body);
      } else {
        // 1) create post in database w/o image

        const body: AddPostRequestBody = {
          user: userDB,
          text: postInput,
        };

        await Post.create(body);
      }
    } catch( error: any ){
      throw new Error("Error uploading image", error);
    }

    // create post in database

    // revalidatePath '/' - Home page
}