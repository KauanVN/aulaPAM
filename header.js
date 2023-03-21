import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from 'react-native';
import estilo from "../estilos";

export default function Header(){
return (
<LinearGradient
    colors={["black", "#FF4500"]}
    style={estilo.gradientBackground}
  >

      <Image source = {{ uri :''}}
      style = {estilo.Image}
      /> 


  </LinearGradient>
)

}
