import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.niceYellow,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  numberText: { color: Colors.niceYellow, fontSize: 36, fontWeight: "bold" },
});

export default NumberContainer;
