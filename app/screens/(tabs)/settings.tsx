import { router } from "expo-router";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.text}>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => router.push("/screens/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#019972",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 48,
    color: "#ffff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
