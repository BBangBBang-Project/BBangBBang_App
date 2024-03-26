import React, {useEffect, useState}from 'react';
import PurchaseList from './components/PurchaseList';
import {useNavigation, useRoute} from '@react-navigation/native';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PurchaseScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { from, item, count, customerId,orderInfo } = route.params;

    useEffect(() => {
        if (from === 'cart') {
          // 장바구니 구매 API 호출
          axios.post(`http://localhost:8080/customer/${customerId}/cart/purchase`)
            .then(response => {
              console.log('장바구니 구매 성공:', response.data);
            })
            .catch(error => {
              console.error('장바구니 구매 실패:', error);
            });
        } else if (from === 'direct') {
          // 바로 구매 API 호출
          axios.post(`http://localhost:8080/customer/${customerId}/purchase`, { id: item.id, count: count })
            .then(response => {
              console.log('바로 구매 성공:', response.data);
            })
            .catch(error => {
              console.error('바로 구매 실패:', error);
            });
        }
      }, []);

      // 총 가격 상태 추가
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // 주문 상품의 가격을 합산하여 총 가격 계산
        const calculatedTotalPrice = orderInfo.orderItems.reduce((acc, item) => acc + (item.price * 0.7 ), 0);
        setTotalPrice(calculatedTotalPrice);
    }, [orderInfo.orderItems]);

    // const calculatedTotalPrice = orderInfo.orderItems.reduce((acc, item) => acc + (item.price * 0.7 * item.quantity), 0);

    return (
        <View style = {styles.purchaseScreenContainer}> 
        <View style = {styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>결제하기</Text>
            </View>
            <View style = {styles.pickUpContainer}>
                <Text style = {styles.pickUpText}>픽업 매장</Text>
                <Text style = {styles.pickUpStore}>한성대 입구역</Text>
            </View>
            <View style = {styles.orderItemContainer}>
                <Text style = {styles.orderItemText}>주문 상품</Text>
            </View>
            <ScrollView style={styles.scrollViewStyle}>
            {orderInfo.orderItems.map((item, index) => (
    <PurchaseList key={index} item={{...item, price: item.price * 0.7}} />
  ))}
        </ScrollView>
        <View style = {styles.purchaseItemContainer}>
                <Text style = {styles.purchaseText}>결제 금액</Text>
                <Text style = {styles.priceText}>{totalPrice}원</Text>
            </View>
            <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>결제하기</Text>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    purchaseScreenContainer : {
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
        marginBottom : 20,
    },
    titleText : {
        marginLeft : 20,
        fontSize : 30,
        fontFamily:'Syncopate', 
    },
    pickUpContainer :{
        marginTop : 10,
        flexDirection: 'row',
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 12,
    },
    pickUpText : {
        marginLeft : 60,
        marginBottom : 10,
        fontSize : 20,
        fontWeight : 'bold',
    },
    pickUpStore :{
        marginLeft : 80,
        fontSize : 20,
    },
    orderItemContainer : {
        paddingBottom : 10,
        borderBottomColor: '#949393',
        borderBottomWidth: 1
    },
    orderItemText : {
        marginLeft : 60,
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold',
    },
    scrollViewStyle : {
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 30,
    },
    purchaseItemContainer : {
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 12,
        borderTopColor: '#F4F4F4',
        borderTopWidth: 12,
        flexDirection: 'row',
        marginTop : 20,
        marginBottom : 20,
        alignContent : 'center',
    },
    purchaseText : {
        marginBottom : 15,
        marginLeft : 60,
        marginTop : 15,
        fontSize : 20,
        fontWeight : 'bold',
    },
    priceText : {
        marginLeft : 120,
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold',
    },
    payButton: {
        backgroundColor: '#FFD1B2',
        height: 47,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 35,
        borderRadius: 20, 
        marginTop : 20,
    },
    payButtonText: {
        fontSize: 17,
        color: 'black',
    },

    
});

export default PurchaseScreen;