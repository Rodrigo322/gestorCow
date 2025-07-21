import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DFEDE9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 20,
  },
  textButton: {
    fontSize: 18,
    color: "#019972",
    fontWeight: "bold",
  },
});
