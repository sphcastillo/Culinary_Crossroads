import Banner from "@/components/Banner";
import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import { SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden sm:inline md:col-span-2">
        <UserInformation />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full px-2">
        <SignedIn>
          <PostForm />
        </SignedIn>
        {/*         
        <PostFeed posts={posts} /> */}
      </section>

      <section className="hidden md:inline justify-center col-span-2">
        <Banner />
      </section>
    </div>
  );
}
