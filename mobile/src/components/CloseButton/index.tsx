import { X } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CloseButtonProps {
  color?: string;
  handleClose: () => void,
}

export function CloseButton({handleClose, color}: CloseButtonProps ) {
  return(
    <TouchableOpacity onPress={handleClose}>
      <X style={styles.x} size={24} color={color}/>
    </TouchableOpacity>
  )
}