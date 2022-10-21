import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import { Circle, Check } from 'phosphor-react-native'
import { styles } from './styles'
import { Order } from '../../@types/types'

interface OrderProps {
  data: Order,
  handleCheckOrder: (id: string) => void,
}

export function OrderListItem({data, handleCheckOrder}: OrderProps) {
  function toggleCheck(id: string) {
    handleCheckOrder(id)
  }

  return(
    <View style={styles.container} >
      <View>
        <View style={styles.orderTitle}>
          <FlatList
            contentContainerStyle={styles.products}
            data={data.products}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Text>{item.quantity.toString()}x - {item.name}</Text>
            )}
          />
          <Text style={styles.orderTable}> • Mesa {data.table.toString()}</Text>
        </View>
        <View style={styles.orderSubTitle}>
          <Text style={styles.orderHour}>{data.createHour}</Text>
          <Text style={styles.orderWaiter}> • {data.waiter}</Text>
          <Text style={styles.orderCommand}> • Comanda {data.command.toString()}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => toggleCheck(data.id)}
      >
        { data.checked === false ? (
          <Circle style={styles.uncheckButton} size={20}/>
        ) : (
          <View style={styles.checkButton}>
            <Check size={16} weight='bold'/>
          </View>
        )}
      </TouchableOpacity>
      
    </View>
  )
}