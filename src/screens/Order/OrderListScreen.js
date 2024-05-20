import React, {useEffect,useState} from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import OrderList from './components/OrderList';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { MY_IP_ADDRESS } from '../../config/config';

const OrderListScreen = () => {

    const navigation = useNavigation();
    const customerId = 2;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
            axios.get(`http://${MY_IP_ADDRESS}:8080/customer/${customerId}/orders`)
                .then(response => {
                    const sortedOrders = response.data.sort((a, b) => b.orderId - a.orderId); // orderId를 기준으로 내림차순 정렬
                    setOrders(sortedOrders); // 정렬된 데이터로 상태 업데이트
                    console.log("data : ", sortedOrders);
                    sortedOrders.forEach((order, orderIndex) => {
                    console.log(`Order ${orderIndex + 1}의 orderItems:`);
                        order.orderItems.forEach((item, itemIndex) => {
                            console.log(`Item ${itemIndex + 1}:`, item);
                        });
                    });
                })
                .catch(error => {
                    console.error('Error fetching orders:', error);
                });
    }, []);
    return (
        <View style = {styles.orderScreenContainer}> 
        <View style = {[styles.titleContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>주문 내역 조회 </Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            {orders.map((order, index) => (
                <OrderList key={index} order={order} /> // 주문 데이터를 props로 전달
            ))}
        </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    orderScreenContainer : {
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
        marginBottom : 30,
    },
    titleText : {
        marginLeft : 20,
        fontSize : 30,
        fontFamily:'Syncopate', 
    }
});

export default OrderListScreen;
