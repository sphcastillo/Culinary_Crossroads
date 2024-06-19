import { getSearchedRecipes } from "@/lib/recipes";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    const { query } = req.query;

    if(!query || typeof query !== "string"){
        return res.status(400).json({
            error: "Query parameter is required & must be a string."
        })
    }

    try {
        const results = await getSearchedRecipes(query);
        res.status(200).json(results);
    }catch(error){
        console.error("Error fetching recipes: ", error);
        res.status(500).json({ error: 'Error fetching data from Edamam API' });
    }

}