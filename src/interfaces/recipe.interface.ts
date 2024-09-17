export interface Recipe {
  description: string;
  image: {
    hero: string;
  };
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
  };
  time: {
    cooking: number;
    preparation: number;
    total: number;
  };
  title: string;
}
