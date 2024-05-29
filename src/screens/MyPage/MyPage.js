import React from "react";
import { Text, View,StyleSheet,TouchableOpacity, Dimensions } from "react-native";
import Header from "../../components/Header";
import { useNavigation } from '@react-navigation/native';
import LogInScreen from "../LogIn/LogInScreen";

const windowHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const MyPage  = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.myPageContainer}>
            <Header />
            <View style={[styles.myContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Text style={styles.myName}>빵빵님</Text>
            </TouchableOpacity>
            </View>
            {/* <View style={[styles.myContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <TouchableOpacity onPress={() => navigation.navigate('LogInS')}> 
            <Text style = {styles.myText}>개인정보 변경</Text>
            </TouchableOpacity>  
            </View> */}
            {/* <View style={[styles.myContainer,{ borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <TouchableOpacity onPress={() => navigation.navigate('LogInS')}>
            <Text style = {styles.myText}>결제수단 관리</Text>
            </TouchableOpacity>
            </View>  */}
            <View style={[styles.myContainer,{ borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <Text style = {styles.myText}>주문내역 조회</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.myContainer,{ borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Like')}>
            <Text style = {styles.myText}>찜한 상품 조회</Text>
            </TouchableOpacity>
            </View>
            {/* <View style={[styles.myContainer,{ borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style = {styles.myText}>재입고 알림</Text>
            </TouchableOpacity>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    myPageContainer : {
        flex : 1,
        backgroundColor : 'white',
    },
    myName : {
        fontSize : 20,
        marginLeft : 50,
    },
    myContainer : {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height : windowHeight / 8,
        width : deviceWidth,
    
    },
    myText : {
        fontSize : 20,
        marginLeft : 40,
    },

});
export default MyPage

