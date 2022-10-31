import { useState } from 'react'
import { Modal, ModalProps, Text, TouchableOpacity, View, TextInput } from "react-native";

import { CaretDown, Plus, X } from "phosphor-react-native";
import { THEME } from "../../theme";
import { CloseButton } from "../CloseButton";
import { styles } from "./styles";
import { ChoppsModal } from './ChoppsModal';

interface NewOrderModalProps extends ModalProps {
  closeModal: () => void,
}

export function NewOrderModal({closeModal , ...rest }: NewOrderModalProps) {
  const [ isChoppsModalOpen, setChoppsModalOpen ] = useState(false)
  const [ table, setTable ] = useState<string>('')
  const [ command, setCommand ] = useState<string>('')

  function onChangeTable(number: string) {
    console.log(table)
    setTable(number)
  }

  function onChangeCommand(number: string) {
    console.log(command)
    setCommand(number)
  }

  function handleOpenChoppsModal() {
    setChoppsModalOpen(!isChoppsModalOpen)
  }
  
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
              {/*---- TABLE ----*/}
              <View style={styles.tableButton}>
                <Text style={styles.tableCommandTitle} >Mesa</Text>
                <TextInput
                  style={styles.tableCommandInput}
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={(e) => onChangeTable(e)}
                  value={table}
                  cursorColor={THEME.COLORS.BRAND_500}
                />
                {/* <CaretDown size={20} color={THEME.COLORS.BRAND_500}/> */}
              </View>

              {/*---- COMMAND ----*/}
              <View style={styles.commandButton}>
                <Text style={styles.tableCommandTitle}>Comanda</Text>
                <TextInput
                  style={styles.tableCommandInput}
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={(e) => onChangeCommand(e)}
                  value={command}
                  cursorColor={THEME.COLORS.BRAND_500}
                />
                {/* <CaretDown size={20} color={THEME.COLORS.BRAND_500}/> */}
              </View>
            </View>

            {/*---- CHOPPS ----*/}
            <TouchableOpacity style={styles.choppsPortionsButton} onPress={handleOpenChoppsModal}>
              <Text style={styles.choppsPortionsTitle}>Chopps</Text>
              <CaretDown size={28}/>
            </TouchableOpacity>

            <ChoppsModal 
              visible={isChoppsModalOpen}
            />

            {/*---- PORTIONS ----*/}
            <TouchableOpacity style={styles.choppsPortionsButton}>
              <Text style={styles.choppsPortionsTitle}>Porções</Text>
              <CaretDown size={28}/>
            </TouchableOpacity>
          </View>
          <View style={styles.itemListContainer}>
            <Text style={styles.itemListTitle} >
              Itens do pedido
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}