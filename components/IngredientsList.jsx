export default function IngredientsList(props) {

  const ingredientList = props.ingredients.map((item, index) => 
        (<li key={index}>{item}</li>))

  return (
    <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
            {props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipe}>Get a recipe</button>
                </div>}
            </section>
  )
}
