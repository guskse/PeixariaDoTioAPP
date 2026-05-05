import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "../theme";

export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={typography.subtitle}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    marginRight: spacing.md,
    backgroundColor: colors.card,
    borderRadius: 12,

    elevation: 2,
  },
  image: {
    width: "100%",
    height: 100,
  },
  content: {
    padding: spacing.sm,
  },
  price: {
    color: colors.accent,
    marginTop: 8,
  },
});
