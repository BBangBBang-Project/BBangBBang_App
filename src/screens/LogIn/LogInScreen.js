import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const LogInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={require('../../assets/images/logo.png')} />
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.idText}>ID</Text>
        <TextInput style={styles.input} />
        <Text style={styles.pwText}>password</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
        <Text style={styles.ifnot}>아직 회원이 아니라면?</Text>
        <TouchableOpacity style={styles.SignUpbutton}
        onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>sign up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  upperContainer: {
    flex: 0.3,
    backgroundColor: '#F3E3D3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: width * 0.4,
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: -40,
  },
  lowerContainer: {
    flex: 0.7,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  login: {
    marginTop: 40,
    fontSize: 50,
    fontFamily: 'ZenMaruGothic-bold',
    color: 'black',
    fontWeight: 'bold'
  },
  idText: {
    marginTop: 30,
    marginLeft: -260,
    fontSize: 20,
    fontFamily: 'ZenMaruGothic-bold',
    color: 'black',
    fontWeight: 'bold'
  },
  input: {
    width: width * 0.8,
    height: height * 0.06,
    backgroundColor: '#FAEBE1',
    borderRadius: 20,
    textAlign: 'center',
    marginTop: height * 0.01
  },
  pwText: {
    marginTop: 30,
    marginLeft: -195,
    fontSize: 20,
    fontFamily: 'ZenMaruGothic',
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: '#FECBA4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: height * 0.05
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
  signUpContainer:{
    flexDirection: 'row',
  },
  ifnot:{
    marginTop:15,
    marginLeft: -110,
    fontSize : 14,
    marginRight: 20,
    color :'black'
  },
  signUpText:{
    fontSize : 14,
    marginLeft:20,
    marginRight: -80,
    marginTop:15,
  }
});

export default LogInScreen;
