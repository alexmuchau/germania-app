import { View, Text } from 'react-native'
import { styles } from '../../home/styles'

export function OrderListItem() {
  return(
    <View style={styles.container} >
      <View>
        <View>
          <Text>1x - Chopp Pilsen 500ml</Text>
          <Text>Mesa 02</Text>
        </View>
        <View>
          <Text>21:32</Text>
          <Text>Bruno</Text>
          <Text>Comanda 11</Text>
        </View>
      </View>
      
    </View>
  )
}