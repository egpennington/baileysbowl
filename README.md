# Bailey’s Bowl

**Bailey’s Bowl** is an AI-powered recipe generator that helps you turn the ingredients you already have into delicious meal ideas. Just add what’s in your pantry, choose a cuisine style, and let Chef Bailey recommend a recipe for you.

---

## ✨ Features

- 📝 Add unlimited ingredients to your digital pantry  
- Choose a cuisine style:
  - Korean
  - Japanese
  - Chinese
  - Mexican
  - Italian
  - Vegetarian
  - Any (default)
- 🤖 AI-generated recipes using Anthropic’s Claude model  
- 💾 Automatic saving with `localStorage`:
  - Ingredients persist across refresh
  - Selected cuisine is remembered
  - Last generated recipe is restored
- **Save recipes for later**
  - Save individual recipes to your local device
  - View and reload saved recipes anytime
- 🔄 **Start New Recipe** button for a clean slate  
- Recipes render beautifully in markdown  
- Responsive, clean UI

---

## 🚀 Live Demo

[Live Demo](https://baileysbowl.netlify.app/)

---

## How It Works

1. Add ingredients you currently have.
2. Select an optional cuisine style.
3. Click **Get a recipe**.
4. Bailey’s Bowl sends your ingredients + cuisine preference to the AI.
5. You receive a formatted recipe recommendation.
6. Click **Save this recipe** to store it for later.
7. Ingredients, cuisine, and last recipe are auto-saved until you click **Start new recipe**.

---

## 🛠 Tech Stack

- **React** (Vite)
- **JavaScript**
- **Anthropic Claude API**
- **React Markdown**
- **CSS**
- **localStorage**

---

## License This project is licensed under the **MIT License**. As long as you include the original copyright notice.