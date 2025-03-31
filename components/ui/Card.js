import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 100, height: 100 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
