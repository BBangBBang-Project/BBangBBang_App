import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Image, Dimensions } from 'react-native';
import Header from '../../components/Header';

const NutritionScreen = () => {
    return (
        <View style = {styles.nutritionContainer}>
            <Header/>
        <View style = {styles.breadInfo}>
            <Text style = {styles.breadName}>쫄깃쫄깃 식빵</Text>
            <Image style = {styles.breadImage} source={require('../../assets/images/bread.png')}/>
            <Text style = {styles.infoTitle}>특별한 재료를 넣어서 아주 맛있는 식빵</Text>
            <Text style = {styles.infoText}>아주 쫄깃쫄깃해서 많이 팔리는 베스트 셀러</Text>
        </View>
        <View style = {styles.nutritionTitle}>
            <Text>총 내용량 : 90g</Text>
            <Text>칼로리 : 300kcal</Text>
            <Text style = {styles.startNutrition}>나트륨            247mg         12%</Text>
            <Text>탄수화물         54.4g           17%</Text>
            <Text>당류                15.9g           16%</Text>
            <Text>식이섬유          6.9g             28%</Text>
            <Text>지방               3.3g                6%</Text>
            <Text>트랜스지방        0g                       </Text>
            <Text>포화지방           1.7g              11%</Text>
            <Text>콜레스테롤        0mg              0%</Text>
            <Text>단백질              6.4g             12%</Text>
        </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    nutritionContainer : {
        flex : 1,
        backgroundColor : 'white',
    },
    breadInfo : {
        alignItems : 'center',
        marginTop : 50,
    },
    breadName : {
        fontSize : 30,
    },
    breadImage : {
        marginTop : 30,
        height : 155,
        width : 266,
        resizeMode : 'contain',
    },    
    infoTitle :{
        marginTop : 30,
        fontWeight : 'bold',
        fontSize : 15,
    },
    infoText : {
        marginTop : 5,
        fontWeight : 'bold',
        fontSize : 15,
    },
    nutritionTitle : {
        marginTop : 40,
        alignItems : 'center',
    },
    startNutrition : {
        marginTop : 10,
    }
})

export default NutritionScreen;