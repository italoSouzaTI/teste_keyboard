import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, ScrollView,View, Keyboard, TextInput, TouchableOpacity, TouchableNativeFeedback, KeyboardAvoidingView, Platform } from 'react-native';

// import { Container } from './styles';

const teste_keyboard = () => {
  const [status, setStatus] =useState(false)
  const [txtValue, setTxtValue] =useState(null)

  useEffect(()=>{
    
    setStatus(true)
    alert(status)
  },[txtValue])
  

  const HandleInput = () => {
    Keyboard.dismiss()
  }

  return (
    <KeyboardAvoidingView style={styles.Container}
      behavior={Platform.OS == "ios" ? "height" : "height"} >
      <StatusBar style="auto" />
      <ScrollView style={styles.ContainerView}>
        <Text style={styles.label}>Digite algo</Text>
        <TextInput
          style={styles.containerInput}
          multiline={true}
          autoFocus={status}
          placeholder="Digite algo"
          value={txtValue}
          onChangeText={value =>setTxtValue(value)}
        />
        <TouchableOpacity
          style={styles.btnConcluir}
        >
          <Text style={styles.textBTn}>Concluir</Text>
        </TouchableOpacity>
      </ScrollView>
      {!status &&(
        <View style={styles.ContainerBtnInput}>
        <TouchableNativeFeedback
          style={styles.btnCloseInput}
          onPress={HandleInput}
        >
          <Text style={styles.TxtBtn}>Fechar Input</Text>
        </TouchableNativeFeedback>
      </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    position: 'relative'
  },
  ContainerView: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerInput: {
    flex: 1,
    width: '100%',
    minHeight: 200,
    backgroundColor: '#ECE9E9',
    marginBottom: 10,
    borderRadius: 6,
    paddingLeft: 10,
    paddingTop: 10,
    textAlignVertical: 'top'
  },
  btnConcluir: {
    width: '100%',
    height: 50,
    backgroundColor: '#2b9348',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 6
  },
  textBTn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  ContainerBtnInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#F6F4F4',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
    marginVertical: 0,
    bottom:0,
    position: 'absolute'
  },
  btnCloseInput: {
    height: '100%',
    alignItems: 'center',
  },
  TxtBtn: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default teste_keyboard;