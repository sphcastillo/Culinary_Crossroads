import axios from 'axios';
import { EdamamApiResponse, Hit } from "@/types/edamam";


export async function getSearchedRecipes( term: string ): Promise<Hit[]>{
    const url = new URL("https://api.edamam.com/search");

    url.searchParams.set("q", term);
    url.searchParams.set("app_id", process.env.EDAMAM_APP_ID || "");
    url.searchParams.set("app_key", process.env.EDAMAM_APP_KEY || "");
    url.searchParams.set("to", "20"); // Limit to 20 results 

    const options: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    const response = await fetch(url.toString(), options);
    const data = await response.json() as EdamamApiResponse;

    return data.hits;
}
