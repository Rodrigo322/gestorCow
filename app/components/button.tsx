import { ArrowRightIcon } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
      <ArrowRightIcon size={24} color="#4b7153" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 20,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  textButton: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
});
