import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { FlatList, View } from "react-native";

export default function RecipesScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeCard item={item} />}
      />
    </View>
  );
}
