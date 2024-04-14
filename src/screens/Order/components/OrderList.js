import React, { useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Image, Alert } from 'react-native';
import axios from 'axios';
import { MY_IP_ADDRESS } from '../../../config/config';

const OrderList = ({ order }) => {

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }

        // 상품을 장바구니에 추가하는 함수
        const addToCart = (productId) => {
            axios.post(`http://${MY_IP_ADDRESS}:8080/customer/1/cart`, {
            breadId: productId, // 상품 ID
            quantity: 1, // 선택한 수량
            })
            .then(response => {
            console.log('장바구니에 추가됨:', response.data); // 모달 창 닫기
            Alert.alert('장바구니에 추가되었습니다!');
            })
            .catch(error => {
                console.error('장바구니에 상품 추가 에러:', error);
            });
        };
    
    return (
            
        <View style = {[styles.orderListContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
                <Text style={styles.orderDate}>{formatDate(order.orderDate)}</Text>
            {order.orderItems.map((item, index) => (
            <View key={index} style = {styles.rowOrderContainer}>
            <View style = {styles.listImageContainer}>
                <Image style = {styles.listImage}source={require('../../../assets/images/bread.png')}/>
            </View>
            <Text style = {styles.listName}>{item.productName}</Text>

            <View style = {styles.priceContainer}>
            <Text style={styles.salePrice}>{item.price}원</Text>
            <Text style={styles.originalPrice}>5,000원</Text>  
            <Text style={styles.quantityText}>{item.quantity}개</Text> 
                
                </View>

    <TouchableOpacity style={styles.addSameMunuButton} onPress={() => addToCart(item.productId)}>
        <Text style={styles.addSameMunuText}>같은 메뉴 담기</Text>
    </TouchableOpacity>
        </View>
        ))}
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
        marginLeft : -65,
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
    quantityText : {
        marginLeft : 30,
        marginTop: -20,
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