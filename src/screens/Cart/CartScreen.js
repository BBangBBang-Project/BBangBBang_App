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
import {useNavigation} from '@react-navigation/native';
import { MY_IP_ADDRESS } from '../../config/config';

const CartScreen = () => {

  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('한성');
  const [items, setItems] = useState([
    {label: '한성대 입구역', value: '한성'},
    {label: '혜화역', value: '혜화'},
    {label: '성신여대역', value: '성신'},
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    // 장바구니 데이터를 가져오는 함수
    const fetchCartItems = async () => {
      try {
        const customerId = '2';
        const response = await axios.get(
          `http://${MY_IP_ADDRESS}:8080/customer/${customerId}/cart`,
        );
        console.log('장바구니 아이템 데이터:', response.data);
        setCartItems(response.data); // 응답 데이터를 상태에 저장
        
        // 모든 항목을 기본적으로 체크된 상태로 설정
        const initialCheckedItems = response.data.reduce((acc, item) => {
          acc[item.cartItemId] = true;
          return acc;
        }, {});
        setCheckedItems(initialCheckedItems);

      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems(); // 함수 호출
  }, []);

 // 항목의 수량을 업데이트하는 함수
const handleQuantityChange = async (cartItemId, newQuantity) => {
  const customerId = '2';
  const updatedCartItems = cartItems.map((item) => {
    if (item.cartItemId === cartItemId) {
      return {...item, quantity: newQuantity, totalPrice: item.price * newQuantity};
    }
    return item;
  });
  setCartItems(updatedCartItems); // UI 즉시 업데이트

  // 서버에 수량 업데이트 요청
  try {
    const response = await axios.patch(
      `http://${MY_IP_ADDRESS}:8080/customer/${customerId}/cart/items/${cartItemId}`,
      { quantity: newQuantity }
    );
    console.log('수량 업데이트 성공:', response.data);
    // 성공한 경우 여기서 추가적인 상태 업데이트가 필요할 수 있습니다.
  } catch (error) {
    console.error('수량 업데이트 실패:', error);
    // 실패한 경우 UI를 이전 상태로 롤백합니다.
    setCartItems(cartItems);
  }
};

  const handleDeleteCartItem = async (cartItemId) => {
    try {
      const customerId = '2';
      // 서버에 장바구니 항목 삭제 요청 보내기
      await axios.delete(`http://${MY_IP_ADDRESS}:8080/customer/${customerId}/cart/items/${cartItemId}`);
      
      // 서버에서 항목 삭제가 완료되면 클라이언트 상태 업데이트
      const updatedCartItems = cartItems.filter(item => item.cartItemId !== cartItemId);
      setCartItems(updatedCartItems);
  
      // 장바구니가 비어 있는지 확인하고 결제 시도
      if (updatedCartItems.length === 0) {
        console.log('장바구니가 비어 있습니다.');
        return;
      }
    } catch (error) {
      console.error('물품 삭제 중 에러 발생:', error);
    }
  };
  
  const handleCheckboxChange = (cartItemId, isChecked) => {
    setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [cartItemId]: isChecked,
    }));
};

  // 각 항목의 수량을 모두 더하는 함수
  const getTotalQuantity = () => {
    return cartItems.reduce((acc, item) => {
        if (checkedItems[item.cartItemId]) {
            return acc + item.quantity;
        }
        return acc;
    }, 0);
};

// PurchaseScreen으로 네비게이션하며 cartItems 데이터 전달
const goToPurchaseScreen = (cartItems) => {
  // Navigate to PurchaseScreen with cartItems data
  navigation.navigate('Purchase', { from: 'cart', cartItems, customerId :'2'});
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
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={{paddingBottom: 100}}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartList
              key={index}
              item={item}
              onQuantityChange={handleQuantityChange}
              onDeleteCartItem={handleDeleteCartItem}
              onCheckboxChange={handleCheckboxChange}
              isChecked={checkedItems[item.cartItemId] || false}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </ScrollView>
      <Text style={styles.quantityCount}>총 {getTotalQuantity()} 개</Text>
      <TouchableOpacity style={[styles.payButton, cartItems.length === 0 ? styles.payButtonEmpty : null]}
        onPress={() => goToPurchaseScreen(cartItems)}>
        <Text style={styles.payButtonText}>결제하기</Text>
      </TouchableOpacity>
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
  quantityCount: {
    marginLeft: 30,
    fontSize: 17,
    color: 'black',
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
    marginTop: 20,
  },
  payButtonText: {
    fontSize: 17,
    color: 'black',
  },
  payButtonEmpty: {
    backgroundColor: '#FAEBE1',
  },
});

export default CartScreen;
