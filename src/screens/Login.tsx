import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Login(){
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const [text2, setText2] = useState('');
  const [isFocused2, setIsFocused2] = useState(false);
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
        <TextInput style={styles.campo}
        placeholder={isFocused ? '' : 'Email'}
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}/>

        <TextInput style={styles.campo}
        placeholder={isFocused2 ? '' : 'Senha'}
        value={text2}
        onChangeText={setText2}
        onFocus={() => setIsFocused2(true)}
        onBlur={() => setIsFocused2(false)}/>

        <TouchableOpacity style={styles.enviar}>

        <Text style={styles.textoenviar}> Entrar </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.cadastrar}>
        
        <Text style={styles.textocadastrar}> Cadastrar </Text>

        </TouchableOpacity>
        <Text style={styles.textoinferior}> Esqueci a senha </Text>
        <Text style={styles.textoinferior}> Continuar sem login </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EBCB4A',
    padding: 15,
  },

  titulo: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  subtitulo:{
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 8,
    marginBottom: 40
  },

  campo:{
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    color: 'black',
    margin: 20,
    padding: 8,
    width: '90%',
    alignSelf: 'center',
    elevation: 5
  },

  enviar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
  },

  textoenviar:{
    fontSize: 15,
    color: '#000000',
  },
   cadastrar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 3,
    padding: 12,
    borderWidth: 0,
    width: '90%',
    backgroundColor:'#545454',
    marginBottom: 40,
    elevation: 5
  },

  textocadastrar:{
    fontSize: 15,
    color: 'white',
  },
   textoinferior: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  campoTitulo:{
    marginRight: 10, // Espaçamento entre o texto e o TextInput
    textAlign: 'left'
  }
});
