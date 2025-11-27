// Main.jsx
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../src/ai";

export default function Main() {
    // ✅ Load ingredients from localStorage
    const [ingredients, setIngredients] = React.useState(() => {
        const saved = localStorage.getItem("baileysbowl-ingredients");
        return saved ? JSON.parse(saved) : [];
    });

    // ✅ Load recipe from localStorage
    const [recipe, setRecipe] = React.useState(() => {
        return localStorage.getItem("baileysbowl-recipe") || "";
    });

    // ✅ Load cuisine from localStorage
    const [cuisine, setCuisine] = React.useState(() => {
        return localStorage.getItem("baileysbowl-cuisine") || "Any";
    });

    const recipeSection = React.useRef(null);

    // ✅ Save ingredients to localStorage
    React.useEffect(() => {
        localStorage.setItem(
            "baileysbowl-ingredients",
            JSON.stringify(ingredients)
        );
    }, [ingredients]);

    // ✅ Save cuisine to localStorage
    React.useEffect(() => {
        localStorage.setItem("baileysbowl-cuisine", cuisine);
    }, [cuisine]);

    // ✅ Save recipe to localStorage
    React.useEffect(() => {
        if (!recipe) {
            // If cleared (e.g. Start new recipe), remove from storage
            localStorage.removeItem("baileysbowl-recipe");
        } else {
            localStorage.setItem("baileysbowl-recipe", recipe);
        }
    }, [recipe]);

    // ✅ Auto-scroll to recipe
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView();
        }
    }, [recipe]);

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients, cuisine);
        setRecipe(recipeMarkdown);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if (!newIngredient) return;
        setIngredients((prev) => [...prev, newIngredient]);
    }

    // ✅ Start new recipe = full reset
    function startNewRecipe() {
        setIngredients([]);
        setRecipe("");
        setCuisine("Any");
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregeno"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {/* Cuisine selector */}
            <section className="cuisine-selector">
                <h2>What are you craving?</h2>
                <div className="cuisine-selector-row">
                    <label htmlFor="cuisine-select">
                        Choose a cuisine style (optional):
                    </label>
                    <select
                        id="cuisine-select"
                        className="cuisine-select"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                    >
                        <option value="Any">Any cuisine</option>
                        <option value="Korean">Korean</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Italian">Italian</option>
                        <option value="Vegetarian">Vegetarian</option>
                    </select>
                </div>
            </section>

            {ingredients.length > 0 && (
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    onStartNew={startNewRecipe}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
