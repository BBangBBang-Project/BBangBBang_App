import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const EmptyCart = () => {

    return (
        <View style={styles.emptyCartContainer}>
            <Icon style = {styles.cartIcon}name = "shoppingcart" size={200} color="black"></Icon>
            <Text style={styles.itisEmptyText}>장바구니가 비어있습니다. </Text>
            <Text style={styles.getMenuText}>원하는 메뉴를 장바구니에 담고</Text>
            <Text style={styles.orderText}>한 번에 주문해보세요</Text>
            <TouchableOpacity>
            <View style={styles.orderButton}>
                <Text style={styles.buttonText}>메뉴 담으러 가기</Text>
            </View>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({

    emptyCartContainer :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    cartIcon : {
        marginTop : -100,
    },
    itisEmptyText : {
        fontSize : 22,
        fontWeight : 'bold'
    },
    getMenuText : {
        marginTop : 20,
        fontSize : 17,
    },
    orderText : {
        marginTop : 3,
        fontSize : 17,
    },
    orderButton : {
        marginTop : 30,
        backgroundColor : '#FFD1B2',
        width : 200,
        height : 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 20,
    },
    buttonText : {
        fontSize : 15,
        textAlign: 'center',
        fontWeight : 'bold'
    }
})

export default EmptyCart;