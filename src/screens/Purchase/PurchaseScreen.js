import React, {useEffect, useState}from 'react';
import PurchaseList from './components/PurchaseList';
import {useNavigation, useRoute} from '@react-navigation/native';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const PurchaseScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { from, item, quantity, customerId,cartItems } = route.params;
    const [totalPrice, setTotalPrice] = useState(0);
    
    const calculateTotalPrice = (data) => {
        return data.reduce((acc, item) => {
            return acc + item.price * item.quantity * 0.7;
        }, 0);
    };
    
    useEffect(() => {
        if (from === 'cart') {
          // 장바구니 구매 API 호출
          axios.get(`http://localhost:8080/customer/${customerId}/cart`)
            .then(response => {
              console.log('결제하기 불러오기 성공:', response.data);
              const totalPrice = calculateTotalPrice(response.data);

                setTotalPrice(totalPrice);
            })
            .catch(error => {
              console.error('결제하기 불러오기 실패:', error);
            });
        } else if (from === 'direct') {
          // 바로 구매 API 호출
          axios.post(`http://localhost:8080/customer/${customerId}/checkout`, {id : item.breadId, count: quantity})
            .then(response => {
              console.log('바로 구매 성공:', response.data);
              setTotalPrice(item.price * quantity * 0.7);
              console.log('id: ', item.breadId);
              console.log('q:', quantity)
            })
            .catch(error => {
              console.error('바로 구매 실패:', error);
              console.log('item:', item)
              
              console.log('q:', quantity)
              console.log('id: ', item.breadId);
            });
        }
      }, []);

      // 총 가격 상태 추가


    const totalPriceInteger = parseInt(totalPrice);

    // PurchaseScreen으로 네비게이션하며 item 데이터 전달
    const goToPurchaseComplete = (from) => {
    // API 호출을 위한 URL 및 데이터 설정
        const customerId = '1';
        let url;
        let data;

        console.log('From:', from);

        if(from === 'cart'){
            url = `http://localhost:8080/customer/${customerId}/cart/purchase`;
            // 장바구니 항목에서 상품 id와 수량만 추출하여 구매 요청 데이터 생성
                const safeCartItems = cartItems || [];
                data = safeCartItems.map(item => ({
                productId: item.id,
                quantity: item.quantity,
            }));
        }else if(from === 'direct'){
            url = `http://localhost:8080/customer/${customerId}/purchase`; // Use the correct endpoint if different
            data = {
                id: item.breadId, // Confirm this is correctly getting the ID
                count: quantity,
            };
        }
        console.log('URL:', url); // Debug: Check the URL
    console.log('Data:', data);
    // API 호출하여 구매 처리
    axios.post(url, data)
        .then(response => {
        // 구매 성공 시, PurchaseScreen으로 네비게이션하며 주문 정보 전달
        navigation.navigate('Complete', {customerId, item, from });
        console.log('구매 완료 : ',item);
        })
        .catch(error => {
        console.error('구매 처리 중 에러 발생:', error);
        });
    };

    
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
            {cartItems && cartItems.map((item, index) => (
    <PurchaseList key={index} item={{...item, price: item.price * 0.7}} from="cart"/>
    ))}
    {item && (
    <PurchaseList key={'direct'} item={{...item, price: item.price * 0.7}} />
  )}
        </ScrollView>
        <View style = {styles.purchaseItemContainer}>
                <Text style = {styles.purchaseText}>결제 금액</Text>
                <Text style = {styles.priceText}>{totalPriceInteger}원</Text>
            </View>
            <TouchableOpacity style={styles.payButton} onPress={() => goToPurchaseComplete(from)}>
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