import { Inter_100Thin, Inter_200ExtraLight } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    width: 312,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    borderRadius: 4,

    paddingHorizontal: 8,
    paddingVertical: 6,

    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
  },
  orderTitle: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: THEME.INTER_FAMILY.BOLD,
  },
  products: {
    flexDirection: "row",
  },
  orderSubTitle: {
    flexDirection: "row",
  },
  orderTable: {
    color: THEME.COLORS.BRAND_500,
  },
  orderHour: {
    fontSize: THEME.FONT_SIZE.SSM,
    color: THEME.COLORS.TEXT_ZINC_400,
  },
  orderWaiter: {
    fontSize: THEME.FONT_SIZE.SSM,
    color: THEME.COLORS.TEXT_ZINC_400,
  },
  orderCommand: {
    fontSize: THEME.FONT_SIZE.SSM,
    color: THEME.COLORS.TEXT_ZINC_700,
  },
  uncheckButton: {
  },
  checkButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    maxWidth: 20,
    maxHeight: 20,
    borderRadius: 12,
    backgroundColor: THEME.COLORS.BRAND_500,
  },
})