import { Text, TouchableOpacity, View, FlatList } from "react-native";

import { Plus, PencilLine } from "phosphor-react-native";

import { styles } from './styles'

const orders = [
  {
    id: 1,
    products: [
      { name: 'Chopp Pilsen 500ml', count: 2 },
      { name: 'Chopp Vinhedo 500ml', count: 2 },
      { name: 'Chopp Puro Malte 500ml', count: 2 }
    ],
    table: 12,
    number: 24,
    waiter: 'Bruno',
    hour: '21:32',
  },
  {
    id: 2,
    products: [
      { name: 'Chopp Pilsen 500ml', count: 2 },
    ],
    table: 8,
    number: 12,
    waiter: 'Bruno',
    hour: '21:32',
  },
]

export function Home() {
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
        <Text style={styles.countLabelText}>03</Text>
      </View>
      {/* <FlatList
        contentContainerStyle={styles.contentList}
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => (

        )}
      /> */}
      
    </View>
  )
}