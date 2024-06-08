import React, { useState } from "react";
import { generateRecipe } from "./actions";

const Page = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await generateRecipe(ingredients);
    setRecipe(response);
  };

  return (
    <div>
      <h1>AI Recipe App</h1>
      <form onSubmit={onSubmit}>
        <label>Enter ingredients:</label>
        <input
          type="text"
          value={ingredients.join(",")}
          onChange={(event) => setIngredients(event.target.value.split(","))}
        />
        <button type="submit">Generate Recipe</button>
      </form>
      <div>
        <h2>Recipe:</h2>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default Page;