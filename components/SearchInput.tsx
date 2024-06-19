"use client";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

const formSchema = z.object({
  input: z.string().min(2).max(50),
});

function SearchInput() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // redirect to the page
    router.push(`/search/${values.input}`);
    form.reset();
  }

  return (
    <div className="flex justify-end">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center space-x-1 bg-[#152039] p-2 rounded-md max-w-50"
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div>
                    <Input placeholder="Search..." {...field} />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="ml-2 flex items-center">
            <button className="ml-1.5 rounded-md bg-[#0cc5f3] text-[#F4F2ED] px-2.5 py-1.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 hover:text-[#d7df23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Search
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default SearchInput;
