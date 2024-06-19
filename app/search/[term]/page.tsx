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
    <div className="py-20 sm:py-24 px-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recipes for: {termToUse}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Check this out! We found some recipes for you.
          </p>
        </div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default SearchPage;
