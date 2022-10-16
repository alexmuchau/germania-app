import { Text, TouchableOpacity, View, FlatList } from "react-native";

import { Plus, PencilLine } from "phosphor-react-native";

import { styles } from './styles'
import { Order, OrderListItem } from "../components/OrderListItem";
import { useEffect, useState } from "react";

const data = [
  {
    id: '1',
    products: [
      { name: 'Chopp Pilsen 1000ml', count: 2 },
      { name: 'Chopp Vinhedo', count: 2 },
      { name: 'Chopp Puro Malte', count: 2 }
    ],
    table: 12,
    command: 24,
    waiter: 'Bruno',
    hour: '21:32',
    checked: false,
  },
  {
    id: '2',
    products: [
      { name: 'Frango á passarinho', count: 2 },
    ],
    table: 8,
    command: 12,
    waiter: 'Bruno',
    hour: '21:32',
    checked: true,
  },
]

export function Home() {
  const [ orders, setOrders ] = useState<Order[]>([])
  
  useEffect(() => {
    setOrders(data)
  }, [])
  
  function handleCheckOrder(id: string) {
    console.log(id)

    const newsOrders = orders.map(order => order.id === id ? {
      ...order,
      checked: !order.checked
    } : order)

    setOrders(newsOrders)
  }

  const uncheckedOrderList = orders.filter((order) => {
    if(order.checked) {
      return order
    }
  })

  const checkedOrderList = orders.filter((order) => {
    if(order.checked === false) {
      return order
    }
  })

  return(
    <View style={styles.container} >
      <View style={styles.actionButtons} >
        <TouchableOpacity
          style={styles.createButton}
        >
          <Plus size={32}/>
          <Text style={styles.buttonText} >Novo{'\n'}Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.createButton}
        >
          <PencilLine size={32}/>
          <Text style={styles.buttonText} >Editar{'\n'}Pedido</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.lastOrderLabel} >
        <Text style={styles.labelText}>Últimos Pedidos</Text>
        <Text style={styles.countLabelText}>{uncheckedOrderList.length < 10 ? ('0' + `${uncheckedOrderList.length}`) : uncheckedOrderList.length}</Text>
      </View>
      <FlatList
        data={uncheckedOrderList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <OrderListItem
            data={item}
            handleCheckOrder={handleCheckOrder}
          />
        )}
      />

      <View style={styles.lastOrderLabel} >
        <Text style={styles.labelText}>Pedidos Concluídos</Text>
        <Text style={styles.countLabelText}>{checkedOrderList.length < 10 ? ('0' + `${checkedOrderList.length}`) : checkedOrderList.length}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.checkedOrdersList}
        data={checkedOrderList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <OrderListItem
            data={item}
            handleCheckOrder={handleCheckOrder}
          />
        )}
      />
      
    </View>
  )
}