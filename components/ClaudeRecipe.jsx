import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipe, onSave }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <header className="recipe-header">
        <h2>Chef Bailey Recommends:</h2>

        {onSave && (
          <button
            type="button"
            className="secondary-button"
            onClick={onSave}
          >
            Save this recipe
          </button>
        )}
      </header>

      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
