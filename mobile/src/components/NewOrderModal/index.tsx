import { CaretDown, Plus, X } from "phosphor-react-native";
import { Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import { CloseButton } from "../CloseButton";
import { styles } from "./styles";

interface NewOrderModalProps extends ModalProps {
  closeModal: () => void,
}

export function NewOrderModal({closeModal , ...rest }: NewOrderModalProps) {
  return(
    <Modal
      {...rest}
      statusBarTranslucent
      transparent
    >
      <View style={styles.container}>
        <CloseButton 
          handleClose={closeModal}
        />
        <View style={styles.content} >
          <View style={styles.titleContainer} >
            <Plus size={32}/>
            <Text style={styles.title}>Novo Pedido</Text>
          </View>
          <View style={styles.buttonsList} >

            <View style={styles.tableCommandContainer} >
              <TouchableOpacity style={styles.tableButton}>
                <Text style={styles.tableCommandTitle} >Mesa</Text>
                <CaretDown style={styles.tableCommandIcon}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.commandButton}>
                <Text style={styles.tableCommandTitle}>Comanda</Text>
                <CaretDown style={styles.tableCommandIcon}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.choppsPortionsButton}>
              <Text style={styles.choppsPortionsTitle}>Chopps</Text>
              <CaretDown size={28}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.choppsPortionsButton}>
              <Text style={styles.choppsPortionsTitle}>Porções</Text>
              <CaretDown size={28}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}