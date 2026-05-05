import { Button, Linking, Text, View } from "react-native";

export default function Location() {
  const openMap = () => {
    Linking.openURL("https://maps.app.goo.gl/hcVc2AxSoFyAbYXL9");
  };

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <Text style={{ flex: 1 }}>
        Endereço: Cidade Nova II, Av. Bpo Massa 116, 69095-160.
      </Text>
      <Button title="Abrir no mapa" onPress={openMap} />
    </View>
  );
}
