import { amplifyClient } from "./amplify-utils";

export async function generateRecipe(ingredients: string[]) {
  const response = await amplifyClient.query({
    query: askBedrock,
    variables: { ingredients },
  });

  return response.data.askBedrock.body;
}