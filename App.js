import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, Alert } from 'react-native';

function Head() {
  return (
  <View >
    <Text style={styles.text}>ValeBar</Text>
    <StatusBar style="auto" />
  </View>
    
    
  );
}

function Footer() {
  return (
    <View>

    </View>
  )
}
export default function App() {
  const [email, onChangeEmail] = React.useState('');
  const [senha, onChangeSenha] = React.useState('');

  return (
    <SafeAreaView >
      <View style={styles.header}>
        <Head/>
      </View>
      <View>
      
      </View>


      <View style={styles.container}>

        <View>
          <View>
            <Image 
              style={{
                alignSelf: 'center',
                width: 350,
                height: 350,
                
                
              }} 
              source={require('../valebar/assets/logo.png'
            
            )}
            />
          </View>
          
          <View >
            <Text style={{fontSize: 22, padding: 5,fontWeight: 'bold'}}>Login</Text>
          
            <TextInput
              style={stylesInput.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder={'Email'}
              keyboardType="email"
            />
          </View>

          <View>
            <TextInput
              style={stylesInput.input}
              onChangeText={onChangeSenha}
              value={senha}
              placeholder={'Senha'}
              keyboardType={'text'}
            />
          </View>

        </View>
        

        <View >
          <Button 
            title="Entrar"
            color="#7d00b3"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
        <View >
          <Button 
            title="Registrar "
            color= '#dcdcdc'
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
      <View>
        
      </View>
      </View>

      


    </SafeAreaView>
  );

}

const stylesInput = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#101010',
    paddingTop: 30,
    flexDirection: 'row', padding: 10,
  },

  footer: {

  },

  text: {
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    marginLeft: 20,
    
  },
  container: {
    paddingTop: '15%',
  
  
  },

});

