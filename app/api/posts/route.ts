import connectDB from "@/mongodb/db";
import { Post, IPostBase } from "@/mongodb/models/post";
import { IUser } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export interface AddPostRequestBody {
    user: IUser;
    text: string;
    imageUrl?: string | null;
}

export async function POST(request: Request){
    auth().protect(); // Protect the route with Clerk authentication

    try {
        await connectDB(); // connect to the database
        
        const { user, text, imageUrl }: AddPostRequestBody = await request.json();

        const postData: IPostBase = {
            user,
            text,
            ...(imageUrl && { imageUrl }),
        };

        const post = await Post.create(postData);
        return NextResponse.json({ message: "SUCCESS: Post created successfully!" ,post });

    } catch (error){
        return NextResponse.json(
            { error: `ATTENTION: Error occurred while creating post: ${error} `},
            {
                status: 500,
            }
        )
    }

}

export async function GET(request: Request){
    try {
        await connectDB(); // connect to the database

        const posts = await Post.getAllPosts();

        return NextResponse.json({ posts });
    } catch (error){
        return NextResponse.json(
            { error: "An error occured while fetching posts" },
            { status: 500 }
        )
    }
}