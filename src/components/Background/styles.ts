import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  logo: {
    marginTop: 90,
  },
  userIcon: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 12
  }
})