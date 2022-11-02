import { StyleSheet } from 'react-native'
import { THEME } from '../../../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: THEME.COLORS.TEXT_ZINC_50,
    borderRadius: 8,
    
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    zIndex: 5,

  },
  choppTitle: {
    fontFamily: THEME.INTER_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT_ZINC,
  },
  weightTitle: {
    fontFamily: THEME.INTER_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_ZINC,
  },
  weightList: {
  },
  weightContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',

    paddingHorizontal: 8,
    paddingBottom: 12,
    paddingTop: 4,
  },
})