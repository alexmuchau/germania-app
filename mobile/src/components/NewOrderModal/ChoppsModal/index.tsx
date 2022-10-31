import { Modal, ModalProps, View } from 'react-native'
import { CloseButton } from '../../CloseButton'
import { styles } from './styles'

interface ChoppsModalProps extends ModalProps {
  handleOpenChoppsModal: () => void
}

export function ChoppsModal({ handleOpenChoppsModal, ...rest}: ChoppsModalProps) {
  return(
    <Modal 
      {...rest}
      statusBarTranslucent
      transparent
    >
      <View style={styles.container}>
        <CloseButton 
          handleClose={handleOpenChoppsModal}
        />
        <View style={styles.content}></View>
      </View>
    </Modal>
  )
}