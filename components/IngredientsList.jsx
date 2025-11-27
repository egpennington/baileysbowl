export default function IngredientsList(props) {
  const ingredientList = props.ingredients.map((item, index) => 
    (<li key={index}>{item}</li>)
  );

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientList}
      </ul>

      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>

            {/* ✅ Auto-save helper note */}
            <p className="pantry-note">
              Your ingredients are saved automatically on this device.
            </p>
          </div>

          {/* ✅ Button group */}
          <div className="recipe-buttons">
            <button onClick={props.getRecipe}>Get a recipe</button>

            <button
              type="button"
              className="secondary-button"
              onClick={props.onStartNew}
            >
              Start new recipe
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
