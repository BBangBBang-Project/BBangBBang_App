import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { MY_IP_ADDRESS } from '../../../config/config';

const CartList = ({item, onQuantityChange,onDeleteCartItem}) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [quantity, setQuantity] = useState(item.quantity);
  const salePrice = parseInt(item.price * 0.7);

  const handleQuantityChange = async(type) => {
    const customerId = '2'; 
    const { cartItemId } = item; // 카트 아이템의 ID
    let newQuantity = quantity;
    if (type === 'increase') {
      newQuantity = quantity + 1;
    } else if (type === 'decrease' && quantity > 1) {
      newQuantity = quantity - 1;
    }

    setQuantity(newQuantity);
    
    try {
      const response = await axios.patch(
          `http://${MY_IP_ADDRESS}:8080/customer/${customerId}/cart/items/${cartItemId}`,
          { quantity: newQuantity }
      );
      console.log('수량 업데이트 성공:', response.data);
      
  } catch (error) {
      console.error('수량 업데이트 실패:', error);
  }
};

// 장바구니 물품 삭제 함수 정의
const handleDelete = () => {
  onDeleteCartItem(item.cartItemId);
};


  return (
    <View
      style={[
        styles.cartListContainer,
        {borderBottomColor: '#949393', borderBottomWidth: 1},
      ]}>
        <View style={styles.iconContainer}>
      <TouchableOpacity onPress={toggleCheckbox}>
        <Icon
          style={styles.checkbox}
          name={isChecked ? 'checkbox' : 'checkbox-outline'}></Icon>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Icon3 style={styles.delteIcon} name='delete'></Icon3>
      </TouchableOpacity>
      </View>

      <View style={styles.rowCartContainer}>
        <View style={styles.listImageContainer}>
          <Image
            style={styles.listImage}
            source={require('../../../assets/images/bread.png')}
          />
        </View>
        <Text style={styles.listName}>{item.productName}</Text>
        <View style={styles.quantityBox}>
          <TouchableOpacity onPress={() => handleQuantityChange('decrease')}>
            <Icon2 name="minus" style={styles.controlButton}></Icon2>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange('increase')}>
            <Icon2 name="plus" style={styles.controlButton}></Icon2>
          </TouchableOpacity>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.salePrice}>{salePrice}</Text>
          <Text style={styles.originalPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartListContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconContainer : {
    flexDirection: 'row',
    marginTop: 10,
  },
  rowCartContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    marginLeft: 15,
    fontSize: 23,
    color: '#FF7E7E',
  },
  delteIcon :{
    fontSize: 13,
    marginLeft : 310,
  },
  listImageContainer: {
    marginTop: 10,
    marginLeft: 50,
    marginBottom: 10,
    marginRight: 40,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FAEBE1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  listName: {
    fontSize: 20,
    marginLeft: 30,
  },
  salePrice: {
    marginTop: 35,
    marginLeft: 30,
    color: 'rgba(225, 36, 36, 0.66)',
    fontSize: 17,
  },
  originalPrice: {
    marginTop: 0,
    textDecorationLine: 'line-through',
    marginLeft: 35,
    fontSize: 12,
    color: '#9A9A9A',
  },
  quantityBox: {
    marginLeft: -80,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
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
