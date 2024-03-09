import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require('../../assets/images/bread.png')} />
        <Text style={styles.logoText}>Sign Up</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.idText}>ID</Text>
        <TextInput style={styles.input} />
        <Text style={styles.nameText}>이름</Text>
        <TextInput style={styles.input} />
        <Text style={styles.pwText}>password</Text>
        <TextInput style={styles.input} />
        <Text style={styles.ppwText}>픽업용 password</Text>
        <Text style={styles.infText}>보관함에서 픽업 시 입력하는 비밀번호입니다. 번호 4자리로 입력해주세요</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    conatainer:{
        backgroundColor:'white',
    },
    logoContainer:{
        flexDirection: 'row',
    },
    image:{
        marginTop: 70,
        marginLeft: 70,
        height:90,
        width: 90,
    },logoText: {
        marginTop: 90,
        marginLeft: 5,
        fontSize: 50,
        fontFamily: 'ZenMaruGothic-bold',
        color: 'black',
        fontWeight: 'bold'
      },
      idText: {
        marginTop: 30,
        marginLeft: 60,
        fontSize: 20,
        fontFamily: 'ZenMaruGothic-bold',
        color: 'black',
        fontWeight: 'bold'
      },
      input: {
        marginLeft:60,
        width: width * 0.75,
        height: height * 0.06,
        backgroundColor: '#FAEBE1',
        borderRadius: 20,
        textAlign: 'center',
        marginTop: height * 0.01
      },
      nameText:{
        marginTop: 30,
        marginLeft: 60,
        fontSize: 20,
        fontFamily: 'ZenMaruGothic-bold',
        color: 'black',
        fontWeight: 'bold'
      },
      pwText: {
        marginTop: 30,
        marginLeft: 60,
        fontSize: 20,
        fontFamily: 'ZenMaruGothic',
        color: 'black',
        fontWeight: 'bold'
      },
      ppwText:{
        marginTop: 30,
        marginLeft: 60,
        fontSize: 20,
        fontFamily: 'ZenMaruGothic',
        color: 'black',
        fontWeight: 'bold'
      },
      infText: {
        marginTop: 10,
        marginLeft: 60,
        fontSize: 8,
        color: 'grey'
      },
      button: {
        marginTop: 70,
        marginLeft: 40,
        marginBottom: 30,
        width: width * 0.8,
        height: height * 0.07,
        backgroundColor: '#FECBA4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      buttonText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
      },
});

export default SignUpScreen;