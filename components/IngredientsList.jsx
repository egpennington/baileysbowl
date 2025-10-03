import {useState} from "react"

export default function IngredientsList(props) {
  const [recipeType, setRecipeType] = useState("")

  const ingredientList = props.ingredients.map((item, index) => 
        (<li key={index}>{item}</li>))

  const handleGetRecipe = function() {
    props.getRecipe(props.ingredients, recipeType)
  }

  return (
    <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
            {props.ingredients.length > 3 &&
              <>  
                <div className="get-recipe-container">
                  <div>
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <fieldset>
                      <legend>Type of Recipe</legend>
                      <label for="type"></label>
                      <input 
                        type="radio"
                        name="type"
                        value="Korean"
                        checked={recipeType === "Korean"}
                        onChange={(e) => setRecipeType(e.target.value)} 
                      />Korean
                      <label for="type"></label>
                      <input 
                        type="radio" 
                        name="type"
                        value="Thai"
                        checked={recipeType === "Thai"}
                        onChange={(e) => setRecipeType(e.target.value)} 
                      />Thai
                      <label for="type"></label>
                      <input 
                        type="radio" 
                        name="type"
                        value="Mexican"
                        checked={recipeType === "Mexican"} 
                        onChange={(e) => setRecipeType(e.target.value)} 
                      />Mexican
                      <label for="type"></label>
                      <input 
                        type="radio" 
                        name="type"
                        value="Italian"
                        checked={recipeType === "Italian"}
                        onChange={(e) => setRecipeType(e.target.value)} 
                      />Italian
                      <label for="type"></label>
                      <input 
                        type="radio" 
                        name="type"
                        value="Indian"
                        checked={recipeType === "Indian"}
                        onChange={(e) => setRecipeType(e.target.value)} 
                      />Indian
                  </fieldset> 
                    <button onClick={handleGetRecipe}>Get a recipe</button><br />
                  </div>                                   
                </div>                
                </>}
            </section>
  )
}
