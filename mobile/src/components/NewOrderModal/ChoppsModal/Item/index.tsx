import { Plus, CaretDown } from 'phosphor-react-native';
import { View, Text, FlatList } from 'react-native'; 
import { Chopps, Portions } from '../../../../@types/types';
import { THEME } from '../../../../theme';
import { styles } from './styles';

interface ItemProps {
  data: Chopps,
}

export function Item({data}: ItemProps) {
  const choppTitle = Object.keys(data)[0]
  
  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.choppTitle}>{choppTitle}</Text>
        <CaretDown size={28} color={THEME.COLORS.TEXT_ZINC}/>
      </View>
      <FlatList
        contentContainerStyle={styles.weightList}
        data={data[choppTitle]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.weightContainer}>
            <Text style={styles.weightTitle}>{item.weight}</Text>
            <Plus size={20}/>
          </View>
        )}
      />
    </View>
  )
}