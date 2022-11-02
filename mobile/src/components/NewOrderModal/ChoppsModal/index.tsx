import { Modal, ModalProps, View, Text, FlatList } from 'react-native'
import { styles } from './styles'

import { Wine } from 'phosphor-react-native'
import { THEME } from '../../../theme'
import { CloseButton } from '../../CloseButton'
import { Item } from './Item'
import { useEffect, useState } from 'react'
import { Chopps } from '../../../@types/types'

interface ChoppsModalProps extends ModalProps {
  handleOpenChoppsModal: () => void
}

export function ChoppsModal({ handleOpenChoppsModal, ...rest}: ChoppsModalProps) {
  const [ chopps, setChopps ] = useState<Chopps[]>([])
  
  useEffect(() => {
    fetch('http://192.168.0.85:3333/chopps/')
    .then(response => response.json())
    .then(data => setChopps(data))
  }, [])
  
  return(
    <Modal 
      {...rest}
      statusBarTranslucent
      transparent
    >
      <View style={styles.container}>
        <CloseButton
          color={THEME.COLORS.TEXT_ZINC_50} 
          handleClose={handleOpenChoppsModal}
        />
        <View style={styles.content}>
          <View style={styles.titleContainer} >
            <Wine size={32} color={THEME.COLORS.TEXT_ZINC_50}/>
            <Text style={styles.title}>Chopp</Text>
          </View>
          <FlatList
            style={styles.choppsList}
            data={chopps}
            keyExtractor={item => Object.keys(item)[0]}
            renderItem={({item}) => (
              <Item
                data={item}
              />
            )}
          />
        </View>
      </View>
    </Modal>
  )
}