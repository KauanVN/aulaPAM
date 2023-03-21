import React from "react"
import { Text, View } from "react-native"
import estilo from "../estilos"


export default function Footer(){
    return(
      
        <View style={estilo.Botoes}>
            
        <Text style={estilo}> Esqueci minha senha?</Text>
        <Text> Cadastrar-se</Text>
        </View>
        
    )
}