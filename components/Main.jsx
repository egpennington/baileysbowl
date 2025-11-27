// Main.jsx
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../src/ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const [cuisine, setCuisine] = React.useState("Any");   // NEW
    const recipeSection = React.useRef(null);

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

            {/* NEW: cuisine selector */}
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
                    </select>
                </div>
            </section>

            {ingredients.length > 0 && (
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
