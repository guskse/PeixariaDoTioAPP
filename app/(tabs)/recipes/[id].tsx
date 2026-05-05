import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { recipes } from "../../../data/recipes";

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();

  const recipe = recipes.find((r) => r.id == id);

  if (!recipe) return <Text>Receita não encontrada</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20 }}>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
    </View>
  );
}
