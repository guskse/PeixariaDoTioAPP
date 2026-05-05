import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProductCard from "../../components/ProductCard";
import { desserts, drinks, featured } from "../../data/products";
import { colors, spacing } from "../../theme";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/images/peixaria-do-tio2.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          O melhor do peixe da Amazônia, do jeitinho do tio!
        </Text>

        <Text style={styles.description}>
          Trabalhamos com os melhores peixes da região, trazendo sabor e
          qualidade para sua mesa.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Destaques</Text>

        <FlatList
          data={featured}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bebidas</Text>

        <FlatList
          data={drinks}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobremesas</Text>

        <FlatList
          data={desserts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  image: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },

  content: {
    padding: spacing.md,
  },

  subtitle: {
    color: colors.muted,
    marginTop: 8,
    fontSize: 24,
  },

  description: {
    marginTop: 12,
    color: colors.text,
    lineHeight: 20,
    fontSize: 18,
  },

  section: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingBottom: 30,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },

  row: {
    justifyContent: "space-between",
  },
});
