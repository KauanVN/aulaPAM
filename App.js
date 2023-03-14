import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {  View, TextInput,TouchableOpacity, Text, Image } from 'react-native';
import estilo from './src/estilos';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style ={estilo.container}>
    <LinearGradient
    colors = {['black','#FF4500']}
    style = {estilo.gradientBackgroud}

    >
      < Image 
      source ={{ uri:'https: //www.topimagens.com.br/img/imagens01/boa-noite-18763IoeSn8jtWL.jpg'}}
      style ={estilo.image}
      />


    </LinearGradient>

    {/*View com as entradas de dados */}

    <View style = {estilo.box}>

    <View style ={estilo.viewIcons}>
    <Feather name="user" size={24} color="black" />
    <TextInput style = {estilo.input} placeholder='e-mail' />
    </View>

    <View style ={estilo.viewIcons}>
    <FontAwesome5 name="key" size={24} color="black" />
    <TextInput style = {estilo.input} placeholder='senha'/>     
    </View>

<TouchableOpacity style = {{width: '80%'}}>
  <LinearGradient
  colors = {['#D2691e', '#FF4500']}
  style ={estilo.button}
  >
  
  <Text style = {estilo.text}> LOGAR </Text>

  </LinearGradient>


</TouchableOpacity>



  </View>




    </View>
  );
}


