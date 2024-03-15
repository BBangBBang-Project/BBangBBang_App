import React from 'react';
import { useNavigation } from '@react-navigation/native';
import OrderList from './components/OrderList';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderListScreen = () => {

    const navigation = useNavigation();

    return (
        <View style = {styles.likeScreenContainer}> 
        <View style = {[styles.titleContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>주문 내역 조회 </Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    likeScreenContainer : {
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
    },
    titleText : {
        marginLeft : 20,
        fontSize : 30,
        marginBottom : 40,
        fontFamily:'Syncopate', 
    }
});

export default OrderListScreen;
