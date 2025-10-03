import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../src/ai";

export default function Main() {
    const [ ingredients, setIngredients ] = React.useState([])
    const [ recipe, setRecipe ] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView()
        }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {        
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient]);
    }

    DOMNode.scrollIntoView()
    

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
                ref={recipeSection}
                ingredients={ingredients}
                getRecipe={getRecipe}
            />
        }

        {/*  placeholder recipe */}
        {recipe && <ClaudeRecipe recipe={recipe} />}

        </main>
    )
}