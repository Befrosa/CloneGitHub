import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import style from '../Style/style';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const singIn = () =>{
    navigation.navigate("Home")
  }
    return (
    <View style={style.conteiner}>
      <View style={style.conteiner}>
        <Image style={style.imagem} source={require('../assets/original.png')} />
        <Text style={style.texto}>Sign in to GitHub</Text>
      </View>
      
      <View style={style.box}>
  
        <Text style={style.nome}>Username or email address</Text>
        <TextInput style={style.login} underlineColorAndroid='transparent' />
  
        <Text style={style.forget}>Forgot password?</Text>
  
        <Text style={style.nome}>Password</Text>
        <TextInput style={style.login} underlineColorAndroid='transparent' secureTextEntry={true} />
        
        <TouchableOpacity onPress={() => singIn()} style = {style.botao}>
        <Text  style={style.tbutao}>Sign in</Text>
      </TouchableOpacity>
  
      <View style={style.new}>
      <Text style={style.texto1}>New to GitHub?
      <Text style={style.create}> Create an account
      <Text style={style.texto1}>.</Text></Text></Text>
  
      </View>
      <Text style={style.texto2}>Terms     Privacy      Security    Contact GitHub</Text>
      </View>    
    </View>
    );
  };
  
  export default Login;