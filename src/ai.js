// ai.js

import Anthropic from "@anthropic-ai/sdk"  // npm install

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.

If the user mentions a cuisine or style (for example: Korean, Japanese, Chinese, Mexican, Italian, Vegetarian), you should choose a recipe that clearly fits that cuisine.

Format your response in markdown to make it easier to render to a web page.
`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

// async returns a promise
export async function getRecipeFromChefClaude(ingredientsArr, cuisine) {
    const ingredientsString = ingredientsArr.join(", ")

    const cuisineLine =
        cuisine && cuisine !== "Any"
            ? `I would like a ${cuisine} style recipe. `
            : ""

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            {
                role: "user",
                content: `${cuisineLine}I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            },
        ],
    })

    return msg.content[0].text
}