import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import EmptyCart from './components/EmptyCart';
import CartList from './components/CartList';
const CartScreen = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: '한성대 입구역', value: '한성'},
        {label: '혜화역', value: '혜화'},
        {label: '성신여대역', value: '성신'},
    ]);
    const [cartItems, setCartItems] = useState([]);

    return (
        <View style={styles.cartScreenContainer}> 
            <View style={[styles.titleContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon style={styles.goBackButton} name="chevron-back-outline"></Icon>
                </TouchableOpacity>
                <Text style={styles.titleText}>장바구니</Text>
                </View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.dropDown}
                    dropDownContainerStyle={{ borderWidth: 1, borderTopWidth :1, borderColor: 'black', width : 250, alignSelf: 'center', marginTop : 20}}
                    textStyle={{ fontSize: 20 }}
                    listItemContainerStyle={{ height: 40 }}
                    zIndex={3000}
                    zIndexInverse={1000}
                    placeholder='지점을 선택해주세요'
                />
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
               <CartList/>
               <CartList/>
               <CartList/>
               <CartList/>
               </ScrollView>
        </View>
    );
};
// {cartItems.length === 0 ? <EmptyCart/> : <CartList cartItems={cartItems} />}
const styles = StyleSheet.create({
    cartScreenContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    titleContainer: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
    goBackButton: {
        marginLeft: 10,
        fontSize: 40,
        marginBottom: 20,
    },
    titleText: {
        marginLeft: 20,
        fontSize: 30,
        fontFamily: 'Syncopate',
    },
    dropDown : {
        marginTop : 20,
        width : 250,
        alignSelf: 'center',
        borderWidth : 0,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
});

export default CartScreen;
