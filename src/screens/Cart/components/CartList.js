import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/EvilIcons';

const CartList = () => {

    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (type) => {
      if(type === 'increase') {
        setQuantity(prevQuantity => prevQuantity + 1);
      } else if(type === 'decrease' && quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };

    return (
        <View style = {[styles.cartListContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>

            <TouchableOpacity onPress={toggleCheckbox}>
                <Icon style={styles.checkbox} name={isChecked ? "checkbox-outline" : "checkbox"}></Icon>
            </TouchableOpacity>
            
            <View style = {styles.rowCartContainer}>
            <View style = {styles.listImageContainer}>
                <Image style = {styles.listImage}source={require('../../../assets/images/bread.png')}/>
            </View>
            <Text style = {styles.listName}>쫄깃쫄깃 식빵</Text>
            <View style={styles.quantityBox}>
                    <TouchableOpacity onPress={() => handleQuantityChange('decrease')}>
                        <Icon2 name = 'minus'style={styles.controlButton}></Icon2>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={() => handleQuantityChange('increase')}>
                    <Icon2 name = 'plus'style={styles.controlButton}></Icon2>
                    </TouchableOpacity>          
        </View>
            <View style = {styles.priceContainer}>
            <Text style={styles.salePrice}>2,500원</Text>
            <Text style={styles.originalPrice}>5,000원</Text>  
            </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    cartListContainer: {
        flex : 1,
        backgroundColor : 'white',
    },
    rowCartContainer : {
        flexDirection: 'row',
    },
    checkbox : {
        marginTop : 10,
        marginLeft : 15,
        fontSize : 23,
        color : '#FF7E7E',
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
        marginLeft : 30,
        color: 'rgba(225, 36, 36, 0.66)',
        fontSize : 17,       
    },  
    originalPrice :{
        marginTop : 0,
        textDecorationLine: 'line-through',
        marginLeft : 35,
        fontSize : 12,
        color : '#9A9A9A',
    },
      quantityBox: {
        marginLeft : -130,
        marginTop : 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical : 10,
      },
      
      controlButton: {
        fontSize: 23,
        marginHorizontal: 10,
      },
      quantity: {
        fontSize: 17,
      },
});

export default CartList;