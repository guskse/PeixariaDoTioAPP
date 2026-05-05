import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Location() {
  const openMap = () => {
    Linking.openURL("https://maps.app.goo.gl/hcVc2AxSoFyAbYXL9");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Image
          source={require("../../assets/images/tambaqui-icon.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/images/pacu-icon.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/images/sardinha-icon.png")}
          style={styles.icon}
        />
      </View>
      <TouchableOpacity onPress={openMap} activeOpacity={0.8}>
        <Image
          source={require("../../assets/images/mapa.png")}
          style={styles.map}
        />
      </TouchableOpacity>

      <Text style={styles.address}>
        📍 Cidade Nova II, Av. Bpo Massa 116, 69095-160
      </Text>
      <Text style={styles.hours}>
        🕒 Funcionamento: 11:00 às 15:00
        {"\n"}🚫 Fechado às segundas-feiras
      </Text>

      <View style={styles.button}>
        <Button title="Abrir no mapa" onPress={openMap} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
  },

  map: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 12,
  },

  address: {
    fontSize: 16,
    marginBottom: 16,
  },

  hours: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#52796F",
    marginBottom: 16,
  },

  button: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 30,
  },

  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 60,
  },
});
