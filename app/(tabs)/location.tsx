import { Button, Linking, Text, View } from "react-native";

export default function Location() {
  const openMap = () => {
    Linking.openURL("https://maps.app.goo.gl/hcVc2AxSoFyAbYXL9");
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Endereço: Cidade Nova, próximo ao Shopping Sumaúma</Text>
      <Button title="Abrir no mapa" onPress={openMap} />
    </View>
  );
}
