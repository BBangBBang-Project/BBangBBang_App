import React, { useState } from 'react';
import { View, StyleSheet,Text,Image } from 'react-native';

const PurchaseList = ({item}) => {
    return (
        <View style = {[styles.purchaseListContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            
            <View style = {styles.rowPurchaseContainer}>
            <View style = {styles.listImageContainer}>
                <Image style = {styles.listImage}source={require('../../../assets/images/bread.png')}/>
            </View>
            <Text style = {styles.listName}>{item.productName}</Text>

            <View style = {styles.quantityContainer}>
                <Text style={styles.quantityTitle}>구매수량</Text>
                <Text style={styles.quantityText}>{item.quantity}개</Text>
                </View>
                <Text style={styles.priceText}>{item.price}원</Text>     
        </View>
        </View>
    );
};



const styles = StyleSheet.create({
    purchaseListContainer: {
        flex : 1,
        backgroundColor : 'white',
    },
    rowPurchaseContainer : {
        flexDirection: 'row',
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
    quantityContainer :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft : -100,
    }, 
    quantityTitle : {
        color : '#4C4C4C',
        fontSize : 17,
    },
    quantityText : {
        marginLeft : 20,
        color : '#000000',
        fontSize : 17,
        
    },
    priceText : {
        marginTop : 80,
        marginLeft : -80,
        color: '#CE3030',
        fontSize : 17,       
    },  
});

export default PurchaseList;