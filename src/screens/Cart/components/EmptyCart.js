import React from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const EmptyCart = () => {

    const navigation = useNavigation();

    const handleGoToMenu = () => {
        navigation.navigate('BottomTab');
    };
    return (
        <View style={styles.emptyCartContainer}>
            <Icon style = {styles.cartIcon}name = "shoppingcart" size={150} color="black"></Icon>
            <Text style={styles.itisEmptyText}>장바구니가 비어있습니다. </Text>
            <Text style={styles.getMenuText}>원하는 메뉴를 장바구니에 담고</Text>
            <Text style={styles.orderText}>한 번에 주문해보세요</Text>
            <TouchableOpacity onPress={handleGoToMenu}>
            <View style={styles.orderButton} >
                <Text style={styles.buttonText}>메뉴 담으러 가기</Text>
            </View>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({

    emptyCartContainer :{
        marginTop : 140,
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    cartIcon : {
        marginTop : -100,
    },
    itisEmptyText : {
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold'
    },
    getMenuText : {
        marginTop : 20,
        fontSize : 13,
    },
    orderText : {
        marginTop : 3,
        fontSize : 13,
    },
    orderButton : {
        marginTop : 10,
        backgroundColor : '#FFD1B2',
        width : 150,
        height : 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 20,
    },
    buttonText : {
        fontSize : 12,
        textAlign: 'center',
        fontWeight : 'bold'
    }
})

export default EmptyCart;