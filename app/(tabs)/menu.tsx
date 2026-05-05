import MenuCard from "@/components/MenuCard";
import { menu } from "@/data/products";
import { FlatList, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuCard item={item} />}
      />
    </View>
  );
}
