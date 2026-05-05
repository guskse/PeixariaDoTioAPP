import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { recipes } from "../../../data/recipes";

export default function Recipes() {
  const router = useRouter();

  return (
    <View>
      {recipes.map((r) => (
        <TouchableOpacity
          key={r.id}
          onPress={() => router.push(`/recipes/${r.id}`)}
        >
          <Text style={{ padding: 16 }}>{r.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
