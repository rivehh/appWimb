import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function Cad(){
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const [text2, setText2] = useState('');
  const [isFocused2, setIsFocused2] = useState(false);

  const [text3, setText3] = useState('');
  const [isFocused3, setIsFocused3] = useState(false);
  
  const [text4, setText4] = useState('');
  const [isFocused4, setIsFocused4] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar}>
      <Feather name="arrow-left" style={styles.icon}/>
      </TouchableOpacity>
      <View>
      <Text style={styles.titulo}> WIMB </Text>
         <Text style={styles.subtitulo}> WHERE IS MY BUS </Text>
      </View>
        <TextInput style={styles.campo}
        placeholder={isFocused ? '' : 'Nome'}
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}>
        </TextInput>
        <TextInput style={styles.campo} 
        placeholder={isFocused2 ? '' : 'Email'}
        value={text2}
        onChangeText={setText2}
        onFocus={() => setIsFocused2(true)}
        onBlur={() => setIsFocused2(false)}>
        </TextInput>

        <TextInput style={styles.campo}  
        placeholder={isFocused3 ? '' : 'Telefone'}
        value={text3}
        onChangeText={setText3}
        onFocus={() => setIsFocused3(true)}
        onBlur={() => setIsFocused3(false)}>
    </TextInput>

        <TextInput style={styles.campo}
        placeholder={isFocused4 ? '' : 'Senha'}
        value={text4}
        onChangeText={setText4}
        onFocus={() => setIsFocused4(true)}
        onBlur={() => setIsFocused4(false)}>
        </TextInput>
        

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
    alignItems: 'center',
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
  textInput:{
    fontWeight: 'light',
    fontSize: 10,
    marginLeft: 70,
  },

  cadastrar: {
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
  },

  textocadastrar:{
    fontSize: 15,
    color: '#000000',
  },
  
   textoinferior: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  voltar: {
    width: '100%',
    marginBottom: '5%'
  },
  icon: {
    fontSize: 30
  }
});

