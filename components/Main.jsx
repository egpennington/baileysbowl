import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {

    const [ ingredients, setIngredients ] = React.useState([
        "all main spices", "pasta", "ground beef", "tomatoe paste"
    ]);

    const [ recipeShown, setRecipeShown ] = React.useState(false)

    function toggleRecipe() {
        setRecipeShown(prev => !prev)
    }

    function addIngredient(formData) {        
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient]);
    }

    return (
        <main>
            <form className="add-ingredient-form" 
            action= {addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregeno"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>  

        {ingredients.length > 0 &&     
            <IngredientsList 
            ingredients={ingredients}
            toggleRecipe={toggleRecipe}
            />
        }

        {/*  placeholder recipe */}
        {recipeShown && <ClaudeRecipe />}

        </main>
    )
}