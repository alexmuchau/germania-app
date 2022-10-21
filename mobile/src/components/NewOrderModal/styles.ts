import { Inter_100Thin } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: THEME.COLORS.BRAND_500
  },
  content: {
    paddingTop: 56,
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontFamily: THEME.RALEWAY_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.SPL,
    marginLeft: 10,
  },
  buttonsList: {
    marginTop: 26,
  },
  tableCommandContainer: {
    flexDirection: "row",
    width: "100%",
  },
  tableButton: {
    flex: 1,
    borderRadius: 4,
    marginRight: 5,
    alignItems: "center",

    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 12
  },
  commandButton: {
    flex: 1,
    borderRadius: 4,
    alignItems: "center",
    marginLeft: 5,

    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 12
  },
  tableCommandTitle: {},
  tableCommandIcon: {},
  choppsPortionsButton: {},
  choppsPortionsTitle: {},
})