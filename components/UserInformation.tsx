import { currentUser } from '@clerk/nextjs/server';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from "./ui/button";

async function UserInformation() {
    const user = await currentUser();

    const firstName = user?.firstName as string;
    const lastName = user?.lastName  as string;
    const imageUrl = user?.imageUrl as string;

    return (
        <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg border py-4">
            <Avatar className="h-16 w-16 mb-5">
                {user?.id ?(
                    <AvatarImage src={user?.imageUrl} />
                ): (
                    <AvatarImage src='https://github.com/shadcn.png' />
                )}
                
                <AvatarFallback>
                    {firstName?.charAt(0)} 
                    {lastName?.charAt(0)}
                </AvatarFallback>
            </Avatar>

            <SignedIn>
                <div className="text-center">
                    <p className="font-semibold">
                        {firstName} {lastName}
                    </p>

                    <p className="text-xs">
                        @{firstName}
                        {lastName}-{user?.id?.slice(-4)}
                    </p>
                </div>
            </SignedIn>
            <SignedOut>
                <div className="text-center space-y-2">
                    <p className="font-semibold">You are not signed in</p>

                    <Button asChild className="bg-[#0B63C4] text-white">
                        <SignInButton>Sign in</SignInButton>
                    </Button>
                </div>
            </SignedOut>
        </div>
    )
}

export default UserInformation;