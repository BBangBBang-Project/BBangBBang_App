import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions,Alert } from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');
const SignUpScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [quickPassword, setQuickPassword] = useState('');

  const handleSignUp = ({navigation}) => {
    axios.post('http://localhost:8080/customer/signup', {
      username :username,
      password : password,
      name : name,
      quickPassword : quickPassword,
    })
    .then(response => {
      Alert.alert("회원가입 성공", "회원가입이 성공적으로 완료되었습니다.");
      navigation.navigate('Home');
    })
    .catch(error => {
      Alert.alert("회원가입 실패", "오류가 발생했습니다. 다시 시도해주세요.");
      console.error(error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require('../../assets/images/whiteBread.png')} />
        <Text style={styles.logoText}>Sign Up</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.idText}>ID</Text>
        <TextInput style={styles.input} onChangeText={setUsername} value={username} />
        <Text style={styles.nameText}>이름</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <Text style={styles.pwText}>password</Text>
        <TextInput style={styles.input} onChangeText={setPassword} value={password}/>
        <Text style={styles.ppwText}>픽업용 password</Text>
        <Text style={styles.infText}>보관함에서 픽업 시 입력하는 비밀번호입니다. 번호 4자리로 입력해주세요</Text>
        <TextInput style={styles.input} onChangeText={setQuickPassword} value={quickPassword} />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white',
    },
    logoContainer:{
      flex : 0.25,
      flexDirection: 'row',
    },
    image:{
        marginTop: 80,
        marginLeft: 70,
        height:70,
        width: 70,
    },logoText: {
        marginTop: 80,
        marginLeft: 5,
        fontSize: 50,
        fontFamily: 'ZenMaruGothic-bold',
        color: 'black',
        fontWeight: 'bold'
      },
      lowerContainer: {
        flex : 0.75,
      },
      idText: {
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
        marginLeft: 90,
        fontSize: 8,
        color: 'grey'
      },
      button: {
        marginTop: 30,
        marginLeft: 40,
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