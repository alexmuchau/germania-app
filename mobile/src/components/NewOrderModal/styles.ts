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
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",

    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 12
  },
  commandButton: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 5,

    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 12
  },
  tableCommandTitle: {
    fontFamily: THEME.RALEWAY_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.SM,
  },
  tableCommandInput: {
    color: THEME.COLORS.BRAND_600,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.INTER_FAMILY.BLACK
  },
  choppsPortionsButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 24,
    maxHeight: 50,
    borderRadius: 8,
    marginTop: 12,

    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
  },
  choppsPortionsTitle: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.RALEWAY_FAMILY.BLACK,
  },
  itemListContainer: {
    width: '100%',
    height: '100%',

    alignItems: 'flex-start',
    marginTop: 20,
  },
  itemListTitle: {
    color: THEME.COLORS.BRAND_200,
    fontSize: THEME.FONT_SIZE.SSM,
    fontFamily: THEME.RALEWAY_FAMILY.BOLD
  }
})