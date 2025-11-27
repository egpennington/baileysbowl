import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipe, onSave, onClose }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <header className="recipe-header">
        <h2>Chef Bailey Recommends:</h2>

        <div className="recipe-header-actions">
          {onSave && (
            <button
              type="button"
              className="secondary-button"
              onClick={onSave}
            >
              Save this recipe
            </button>
          )}

          {onClose && (
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Close
            </button>
          )}
        </div>
      </header>

      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
