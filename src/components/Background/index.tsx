import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { User, CaretDown } from 'phosphor-react-native'

import bg from '../../assets/bg.png'
import logo from '../../../assets/logo-germania-preto.png'

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return(
    <ImageBackground
      source={bg}
      defaultSource={bg}
      style={styles.container}
    >
      <Image
        style={styles.logo}
        source={logo}
      />
      <TouchableOpacity style={styles.userIcon}>
        <User size={12}/>
        <CaretDown size={12}/>
      </TouchableOpacity>
      {children}
    </ImageBackground>
  )
}