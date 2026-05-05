import { FlatList, Text } from "react-native";
import Card from "../../components/Card";
import { products } from "../../data/products";
import { colors, typography } from "../../theme";

export default function Menu() {
  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card>
          <Text style={typography.subtitle}>{item.name}</Text>
          <Text style={{ color: colors.accent, marginTop: 8 }}>
            {item.price}
          </Text>
        </Card>
      )}
    />
  );
}
