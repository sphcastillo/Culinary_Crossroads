export async function getSearchedRecipes( term: string ){
    const url = new URL("https://api.edamam.com/search");

    url.searchParams.set("q", term);
    url.searchParams.set("app_id", process.env.NEXT_PUBLIC_EDAMAM_APP_ID || '');
    url.searchParams.set("app_key", process.env.NEXT_PUBLIC_EDAMAM_APP_KEY || '');
    url.searchParams.set("to", "16"); // Limit to 16 results 

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
        next: {
            revalidate: 60 * 60 * 24, // 24 hours default 
        },
    };

    const response = await fetch(url.toString(), options);
    
    const data = await response.json()
    return data.hits;


}
