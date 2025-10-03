// ai.js

import Anthropic from "@anthropic-ai/sdk"  // npm install

const anthropic = new Anthropic({    
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,    
    dangerouslyAllowBrowser: true,
})

function getRecipe(ingredients, recipeType) {
  const chosen = recipeType || "general";
}

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a ${chosen} recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// async returns a promise
export async function getRecipeFromChefClaude(ingredientsArr, recipeType = "") {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}