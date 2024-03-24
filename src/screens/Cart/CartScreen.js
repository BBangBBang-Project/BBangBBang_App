import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import EmptyCart from './components/EmptyCart';
import CartList from './components/CartList';
import axios from 'axios';
const CartScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '한성대 입구역', value: '한성'},
    {label: '혜화역', value: '혜화'},
    {label: '성신여대역', value: '성신'},
  ]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // 장바구니 데이터를 가져오는 함수
    const fetchCartItems = async () => {
      try {
        const customerId = '1'; // 예시로 '1'을 사용
        const response = await axios.get(
          `http://localhost:8080/customer/${customerId}/cart`,
        );
        setCartItems(response.data); // 응답 데이터를 상태에 저장
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems(); // 함수 호출
  }, []);
  // 항목의 수량을 서버에 업데이트하는 함수
  const updateItemQuantity = async (customerId, cartItemId, newQuantity) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/customer/${customerId}/cart/items/${cartItemId}/${newQuantity}`,
        {quantity: newQuantity}, // 요청 바디에 quantity를 포함시킴
      );
      console.log('수량 업데이트 성공:', response.data);
    } catch (error) {
      console.error('수량 업데이트 실패:', error);
    }
  };
  // 항목의 수량을 업데이트하는 함수
  const handleQuantityChange = (itemId, newQuantity) => {
    const customerId = '1';
    updateItemQuantity(customerId, itemId, newQuantity); // 서버에 수량 업데이트 요청
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return {...item, quantity: newQuantity};
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <View style={styles.cartScreenContainer}>
      <View
        style={[
          styles.titleContainer,
          {borderBottomColor: '#949393', borderBottomWidth: 1},
        ]}>
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
        dropDownContainerStyle={{
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: 'black',
          width: 250,
          alignSelf: 'center',
          marginTop: 20,
        }}
        textStyle={{fontSize: 20}}
        listItemContainerStyle={{height: 40}}
        zIndex={3000}
        zIndexInverse={1000}
        placeholder="지점을 선택해주세요"
      />
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartList
              key={index}
              item={item}
              onQuantityChange={handleQuantityChange}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </ScrollView>
    </View>
  );
};
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
  dropDown: {
    marginTop: 20,
    width: 250,
    alignSelf: 'center',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});

export default CartScreen;
