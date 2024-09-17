import { Router } from "express";

import RecipesController from "../controllers/recipes.controller.js";

const router = Router();
const controller = new RecipesController();

router.get("/api/recipe", controller.getRecipe);

export { router as recipesRouter };
