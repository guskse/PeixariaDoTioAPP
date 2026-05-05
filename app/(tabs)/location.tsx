import { Button, Linking, Text, View } from "react-native";

export default function Location() {
  const openMap = () => {
    Linking.openURL("https://maps.google.com");
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Endereço: Rua Exemplo, 123</Text>
      <Button title="Abrir no mapa" onPress={openMap} />
    </View>
  );
}
