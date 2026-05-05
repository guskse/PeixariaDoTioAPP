import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme.js";

export default function MenuCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",

    // sombra (iOS + Android)
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 160,
  },

  content: {
    padding: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.accent,
  },
});
