import connectDB from "@/mongodb/db";
import { Post } from "@/mongodb/models/post";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { post_id: string } }
){
    await connectDB();

    try {
        const post = await Post.findById(params.post_id);

        if(!post){
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);

    } catch (error){
        return NextResponse.json(
            { error: `An error occured while fetching post: ${error}` },
            { status: 500 }
        )
    }
};

export interface DeletePostRequestBody {
    userId: string;
}

export async function DELETE(
    request: Request,
    { params } : { params: { post_id: string } }
){
    auth().protect();

    const user = await currentUser();

    await connectDB();

    // const { userId }: DeletePostRequestBody = await request.json();

    try {
        const post = await Post.findById(params.post_id);

        if(!post){
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        if(post.user.userId !== user?.id){
            throw new Error("Post does not belong to user");
        }

        await post.removePost();

        return NextResponse.json({ message: "Post deleted successfully!" });

    }catch(error){
        return NextResponse.json(
            { error: `An error occured while deleting post: ${error}` },
            { status: 500 }
        )
    }
}