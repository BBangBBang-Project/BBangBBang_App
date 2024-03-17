import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Octicons'

const PurchaseComplete = () => {

    return (
        <View style = {styles.purchaseCompleteContainer}> 
        <View style = {styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>주문 완료</Text>
            </View>
            <View style = {styles.completeTitleContainer}>
                <Icon2 style={styles.checkCircle}name = "check-circle"></Icon2>
                <Text style={styles.completeText}>픽업 주문을 완료했어요!</Text>
                <Text style={styles.passwordText}>키오스크에서 간편 비밀번호를 </Text>
                <Text style={styles.insertText}>입력해주세요!</Text>
            </View>
            <View style={styles.storeContainer} >
                <Text style={styles.stationTitle}>한성대 입구역</Text>
                <Text style={styles.stationText}>서울특별시 성북구 삼선동1가 14</Text>
                <Text style={styles.OpeningTitle}>영업시간</Text>
                <Text style={styles.OpeningText}>월 ~ 일 : 24시간 운영</Text>
                <Text style={styles.directionTitle}>오시는 방법</Text>
                <Text style={styles.directionText}>지하철 2번 출구로 내려와서 2분 도보</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    purchaseCompleteContainer :{
        flex : 1,
        backgroundColor : 'white',
    },
    titleContainer : {
        justifyContent : 'flex-start',
        alignContent : 'center',
        flexDirection: 'row',
        marginTop : 50,
    },
    goBackButton : {
        marginLeft : 10,
        fontSize : 40,
        marginBottom : 10,
    },
    titleText : {
        marginLeft : 20,
        fontSize : 30,
        fontFamily:'Syncopate', 
    },
    completeTitleContainer :{
        marginTop : 10,
        alignItems : 'center',
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 12,
    },
    checkCircle : {
        marginTop : 10,
        color : '#FF7E7E',
        fontSize : 120,
        fontWeight : '500',
    },
    completeText : {
        marginTop : 30,
        fontSize : 29,
    },
    passwordText : {
        marginTop : 30,
        fontSize : 20,
    },
    insertText : {
        marginTop : 3,
        fontSize : 20,
        marginBottom : 30,
    },
    storeContainer : {
        alignItems : 'center',
        marginTop : 15,
    },
    stationTitle : {
        marginTop : 10,
        fontSize : 25,
    },
    stationText : {
        marginTop : 5,
        fontSize : 15,
    },
    OpeningTitle : {
        marginTop : 20,
        fontSize : 25,
    },
    OpeningText : {
        marginTop : 5,
        fontSize : 15,
    },
    directionTitle : {
        marginTop : 20,
        fontSize : 25,
    },
    directionText : {
        marginTop : 5,
        fontSize : 15,
    }
})


export default PurchaseComplete;