import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Image } from 'react-native';

const OrderList = () => {

    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style = {[styles.orderListContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>

            <TouchableOpacity onPress={toggleCheckbox}>
                <Text style={styles.orderDate}>2023.03.16</Text>
            </TouchableOpacity>
            
            <View style = {styles.rowOrderContainer}>
            <View style = {styles.listImageContainer}>
                <Image style = {styles.listImage}source={require('../../../assets/images/bread.png')}/>
            </View>
            <Text style = {styles.listName}>쫄깃쫄깃 식빵</Text>


            <View style = {styles.priceContainer}>
            <Text style={styles.salePrice}>2,500원</Text>
            <Text style={styles.originalPrice}>5,000원</Text>  
                
                </View>

    <TouchableOpacity style={styles.addSameMunuButton}>
        <Text style={styles.addSameMunuText}>같은 메뉴 담기</Text>
    </TouchableOpacity>
        </View>
        </View>
    );
};



const styles = StyleSheet.create({
    orderListContainer: {
        flex : 1,
        backgroundColor : 'white',
    },
    rowOrderContainer : {
        flexDirection: 'row',
    },
    orderDate : {
        marginLeft : 20,
        marginTop : 10,
        fontSize : 13,
        fontFamily : 'Strait',
    },
    listImageContainer : {
        marginTop : 10,
        marginLeft : 30,
        marginBottom : 10,
        width : 90,
        height : 90,
        borderRadius: 45,
        backgroundColor : '#FAEBE1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listImage : {
        width: '70%',
        height: '70%',
        resizeMode : 'contain',
    },
    listName : {
        fontSize : 20,
        marginLeft : 50,
    },
    salePrice : {
        marginTop : 35,
        marginLeft : -75,
        color: 'rgba(225, 36, 36, 0.66)',
        fontSize : 17,       
    },  
    originalPrice :{
        marginTop : 0,
        textDecorationLine: 'line-through',
        marginLeft : -65,
        fontSize : 12,
        color : '#9A9A9A',
    },
    addSameMunuButton: {
        borderWidth: 1,
        borderColor: '#FF7E7E',
        marginTop : 75,
        marginLeft : 0,
        width : 90,
        height : 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 5,
      },
      addSameMunuText: {
        color: '#FF7E7E',
        fontSize : 13,
      },
});

export default OrderList;