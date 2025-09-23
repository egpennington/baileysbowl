import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
return (
    <section className="suggested-recipe-container" aria-live="polite">
        <H2>Chef Bailey Recommends:</H2>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
)
}