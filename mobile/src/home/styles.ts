import { StyleSheet } from "react-native";
import { THEME } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    paddingRight: 40,
    paddingLeft: 40,
  },
  actionButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  createButton: {
    flexDirection: "row",
    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
    alignItems: "center",
    justifyContent: "center",
    color: THEME.COLORS.BACKGROUND,
    borderRadius: 4,
    padding: 12,
    marginTop: 40,
  },
  buttonText: {
    fontFamily: THEME.RALEWAY_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
    marginLeft: 10,
  },
  lastOrderLabel: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 28,
  },
  labelText: {
    color: THEME.COLORS.TEXT_ZINC_600,
    fontFamily: THEME.RALEWAY_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.SSM
  },
  countLabelText: {
    color: THEME.COLORS.BRAND_500,
    fontFamily: THEME.INTER_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.SSM
  },
  checkedOrdersList: {
    opacity: 0.8,
  }
})