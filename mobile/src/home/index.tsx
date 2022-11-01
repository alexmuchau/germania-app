import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { Order, RawOrder } from "../@types/types";

import { OrderListItem } from "../components/OrderListItem";

import { Plus, PencilLine } from "phosphor-react-native";
import { styles } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import { NewOrderModal } from "../components/NewOrderModal";

export function Home() {
  const [ orders, setOrders ] = useState<Order[]>([])
  const [ newOrderModalVisible, setNewOrderModalVisible ] = useState(false)
  
  useEffect(() => {
    fetch('http://192.168.100.108:3333/orders')
    .then(response => response.json())
    .then(data => setOrders(data.map((rawOrder: RawOrder) => {
      const products = rawOrder.OrderChopp.map(chopp => {
        return {
          id: Math.random(),
          name: chopp.Chopps.name + ' ' + chopp.Chopps.type,
          quantity: chopp.Quantity
        }
      })

      rawOrder.OrderPortion.forEach(portion => {
        const newPortion = {
          id: Math.random(),
          name: portion.Portions.name + ' ' + portion.Portions.type,
          quantity: portion.Quantity
        }

        products.push(newPortion)
      })
      
      const order = {
        id: rawOrder.id,
        waiter: rawOrder.waiter.name,
        table: rawOrder.table,
        command: rawOrder.command,
        createHour: rawOrder.createHour,
        checked: false,
        products,
      }
      
      return order
    })))
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
    if(order.checked === false) {
      return order
    }
  })

  function handleOpenNewOrderScreen() {
    setNewOrderModalVisible(!newOrderModalVisible)
  }

  const checkedOrderList = orders.filter((order) => {
    if(order.checked) {
      return order
    }
  })

  return(
    <SafeAreaView style={styles.container} >
      <NewOrderModal 
        visible={newOrderModalVisible}
        closeModal={handleOpenNewOrderScreen}
      />
      <View style={styles.actionButtons} >
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => handleOpenNewOrderScreen()}
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
        <Text style={styles.labelText}>Últimos Pedidos - Chopps</Text>
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
      
    </SafeAreaView>
  )
}