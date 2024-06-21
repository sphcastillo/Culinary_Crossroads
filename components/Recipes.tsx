import { Hit, Recipe } from "@/types/edamam";
import Image from "next/image";
import Link from "next/link";

type Props = {
  recipes: Hit[];
};

function Recipes({ recipes }: Props) {
  console.log("Recipes ~ Recipes component: ", recipes);
  return (
    <div className="mx-auto mt-9 grid max-w-2xl auto-rows-fr grid-cols-2 gap-5 sm:gap-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      {recipes.map((recipe, index) => (
        <article
          key={index}
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-2 pb-8 pt-20 sm:pt-24 lg:pt-40"
        >
          <Image
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            width={300}
            height={200}
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <div className="-ml-4 flex items-center gap-x-4">
              <svg
                viewBox="0 0 2 2"
                className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="flex gap-x-2.5">
                <Image
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                  width={30}
                  height={30}
                  priority
                  className="h-6 w-6 flex-none rounded-full bg-white/10"
                />
                {recipe.recipe.source}
              </div>
            </div>
          </div>

          <div className="mb-2 mt-1.5">
            <h3 className="text-lg font-semibold leading-6 text-white">
              <span className="absolute inset-0" />
              {recipe.recipe.label}
            </h3>
          </div>
          <div className="flex justify-center items-center mt-2">
            <button className="text-white bg-[#d7df23] hover:bg-[#0048e8] z-50 rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm">
              <Link
                href={recipe.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get receipe
              </Link>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Recipes;
