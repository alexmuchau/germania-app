import { StyleSheet } from 'react-native'
import { THEME } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  content: {
    width: '100%',
    paddingTop: 56,
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  title: {
    fontFamily: THEME.RALEWAY_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.SPL,
    marginLeft: 10,
    color: THEME.COLORS.TEXT_ZINC_50,
  },
  choppsList: {
    width: "100%",
  }
})