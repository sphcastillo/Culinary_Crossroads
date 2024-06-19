export interface Link {
    href: string;
    title: string;
}
  
export interface Links {
    self: Link;
    next: Link;
}
  
export interface Image {
    url: string;
    width: number;
    height: number;
}
  
export interface Images {
    THUMBNAIL: Image;
    SMALL: Image;
    REGULAR: Image;
    LARGE: Image;
}
  
export interface Ingredient {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodId: string;
}
  
export interface NutrientInfo {
    label: string;
    quantity: number;
    unit: string;
}
  
export interface Digest {
    label: string;
    tag: string;
    schemaOrgTag: string;
    total: number;
    hasRDI: boolean;
    daily: number;
    unit: string;
    sub: string;
}
  
export interface Recipe {
    uri: string;
    label: string;
    image: string;
    images: Images;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: Ingredient[];
    calories: number;
    glycemicIndex: number;
    inflammatoryIndex: number;
    totalCO2Emissions: number;
    co2EmissionsClass: string;
    totalWeight: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    instructions: string[];
    tags: string[];
    externalId: string;
    totalNutrients: Record<string, NutrientInfo>;
    totalDaily: Record<string, NutrientInfo>;
    digest: Digest[];
}
  
export interface Hit {
    recipe: Recipe;
    _links: Links;
}
  
export interface EdamamApiResponse {
    from: number;
    to: number;
    count: number;
    _links: Links;
    hits: Hit[];
}
  