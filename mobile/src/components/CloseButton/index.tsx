import { X } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CloseButtonProps {
  handleClose: () => void,
}

export function CloseButton({handleClose}: CloseButtonProps ) {
  return(
    <TouchableOpacity onPress={handleClose}>
      <X style={styles.x} size={24}/>
    </TouchableOpacity>
  )
}