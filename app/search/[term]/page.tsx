import Recipes from "@/components/Recipes";
import { getSearchedRecipes } from "@/lib/getRecipes";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  // Decode the term to use in the API call
  const termToUse = decodeURI(term);
  console.log("Term to use ~ ", termToUse)

  const recipes = await getSearchedRecipes(termToUse);

  console.log("Recipes ~ Search page", recipes);

  return (
    <div className="py-14 sm:py-24 px-2 sm:px-6">
      <div className="mx-auto max-w-7xl px-2 lg:px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Recipes for: {termToUse}
          </h2>
          <p className="mt-1 sm:mt-2 text-[17px] leading-8 text-gray-600">
            Check this out! We found some recipes for you.
          </p>
        </div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default SearchPage;
