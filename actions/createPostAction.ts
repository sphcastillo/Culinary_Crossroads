'use server'

import { currentUser } from "@clerk/nextjs/server";

export default async function createPostAction(formData: FormData){
    const user = await currentUser();
    const postInput = formData.get("postInput") as string;
    const image = formData.get("image") as File;
    let image_url = undefined;
  
    if (!postInput) {
      throw new Error("Post input is required");
    }
  
    if (!user?.id) {
      throw new Error("User not authenticated");
    }

    // define user

    // upload imge if there is one

    // create post in database

    // revalidatePath '/' - Home page
}