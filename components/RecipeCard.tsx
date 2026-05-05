import { colors } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeCard({ item }) {
  // 🔥 transforma descrição em etapas
  const steps = item.description
    .split(".")
    .map((step) => step.trim())
    .filter((step) => step.length > 0);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <Text key={index} style={styles.step}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },

  stepsContainer: {
    gap: 6,
  },

  step: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});
