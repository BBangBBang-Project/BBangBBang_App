import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';

const CartList = ({item, onQuantityChange,onDeleteCartItem}) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const {imageUrl} = item;
  const salePrice = parseInt(item.price * item.quantity * 0.7);
  const originalPrice = parseInt(item.price * item.quantity);

  const handleQuantityChange = (type) => {
    const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
    if (type === 'decrease' && item.quantity <= 1) {
      return; // 수량이 1 이하로 내려가지 않도록 합니다.
    }
    onQuantityChange(item.cartItemId, newQuantity);
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
            source={{ uri: imageUrl }}
          />
        </View>
        <Text style={styles.listName}>{item.productName}</Text>
        <View style={styles.quantityBox}>
          <TouchableOpacity onPress={() => handleQuantityChange('decrease')}>
            <Icon2 name="minus" style={styles.controlButton}></Icon2>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange('increase')}>
            <Icon2 name="plus" style={styles.controlButton}></Icon2>
          </TouchableOpacity>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.salePrice}>{salePrice}</Text>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
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
    width: 100,
  },
  salePrice: {
    marginTop: 35,
    marginLeft: 30,
    color: 'rgba(225, 36, 36, 0.66)',
    fontSize: 17,
    width: 70,
  },
  originalPrice: {
    marginTop: 0,
    textDecorationLine: 'line-through',
    marginLeft: 35,
    fontSize: 12,
    color: '#9A9A9A',
    width: 70,
  },
  quantityBox: {
    marginLeft: -120,
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
