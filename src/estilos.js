import { StyleSheet} from "react-native";

const estilo = StyleSheet.create({

container: {
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
},
gradientBackgroud:{
    position:'absolute',
    left: 0,
    right:0,
    top: 0,
    height:400,
    alignItems:'center',
    justifyContent:'center'
},
box: {
    marginTop:150,
    alingItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    width: "60%",
    height: 400,
    marginLeft: 40,
},
input:{
    borderRadius:5,
    width:'80%',
    marginLeft: 4,
    padding: 15,
    borderwidth: 1,

},
viewIcons:{
    width: '100%',
    justifyContent: 'center',
    alingItems: 'center',
    flexDirection: 'row',
    marginTop:35
},
button:{
    padding: 20,
    marginTop: 60,
    alingItems: "center",
    borderRadius: 5
},
text:{
    fontWeigth: 'bold',
    color: 'white'
},
Imagem:{
    position: 'center',
    width: 180,
    height: 180
}


})

export default estilo;