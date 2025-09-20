import { StyleSheet, Text, View } from "react-native";

interface BoxProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

export default function Box({ icon, title, value }: BoxProps) {
  return (
    <View style={styles.box}>
      {icon}
      <View style={styles.boxInfo}>
        <Text style={{ fontSize: 16, fontWeight: "semibold", color: "#000" }}>{title}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>{value}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    marginTop: 20,
    elevation: 2,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  boxInfo: {
    flex: 1,
    padding: 10,
  },
});
