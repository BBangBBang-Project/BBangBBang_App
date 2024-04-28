import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import { MY_IP_ADDRESS } from '../../config/config';

const screenHeight = Dimensions.get('window').height;

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [quantity, setQuantity] = useState(1);
  const {item} = route.params;
  const [totalPrice, setTotalPrice] = useState(item.salePrice);

  useEffect(() => {
    // 수량이 변경될 때마다 총 가격을 업데이트
    setTotalPrice(
      quantity * parseFloat(item.salePrice.replace(/[^0-9-.]/g, '')),
    );
  }, [quantity, item.salePrice]);

  const handleQuantityChange = type => {
    if (type === 'increase') {
      setQuantity(prevQuantity => prevQuantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const navigateToNutrition = item => {
    navigation.navigate('Nutrition', {item});
  };

    // 상품을 장바구니에 추가하는 함수
const addToCart = () => {
  axios.post(`http://${MY_IP_ADDRESS}:8080/customer/2/cart`, {
    breadId: item.id, // 상품 ID
    quantity: quantity, // 선택한 수량
  })
  .then(response => {
    console.log('장바구니에 추가됨:', response.data); // 모달 창 닫기
  })
  .catch(error => {
    console.error('장바구니에 상품 추가 에러:', error);
  });
};

// PurchaseScreen으로 네비게이션하며 item 데이터 전달
const goToPurchaseScreen = (item) => {
  // API 호출을 위한 URL 및 데이터 설정
  const customerId = '2';
  const url = `http://${MY_IP_ADDRESS}:8080/customer/${customerId}/checkout`;
  const purchaseData = { 
    id: item.id,
    count : quantity,
  };

  // API 호출하여 구매 처리
  axios.post(url, purchaseData)
    .then(response => {
      // 구매 성공 시, PurchaseScreen으로 네비게이션하며 주문 정보 전달
      navigation.navigate('Purchase', { from: 'direct', item:response.data, id: item.id, quantity:quantity,customerId :'2'});
      console.log('넘겨준 데이터:', response.data);
      console.log('id: ', item.id);
      console.log('quantity:', quantity);
    })
    .catch(error => {
      console.error('데이터 넘기는 중 에러 발생:', error);
    });
};


  return (
    <View style={styles.detailContainer}>
      <Header />
      <TouchableOpacity onPress={navigateToNutrition}>
        <View style={styles.breadInfo}>
          <Text style={styles.breadName}>{item.name}</Text>
          <Image
            style={styles.breadImage}
            source={require('../../assets/images/bread.png')}
          />
          <Text style={styles.infoTitle}>
            특별한 재료를 넣어서 아주 맛있는 식빵
          </Text>
          <Text style={styles.infoText}>
            아주 쫄깃쫄깃해서 많이 팔리는 베스트 셀러
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bakedDateContainer}>
        <Text style={styles.bakedDateInfo}>2024.03.18 제조</Text>
      </View>
      <View style={styles.modalView}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.quantityControl}>
          <View style={styles.quantityBox}>
            <TouchableOpacity onPress={() => handleQuantityChange('decrease')}>
              <Icon name="minus" style={styles.controlButton}></Icon>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange('increase')}>
              <Icon name="plus" style={styles.controlButton}></Icon>
            </TouchableOpacity>
          </View>
          <Text style={styles.itemPrice}>{`${totalPrice}원`}</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.cartButton} onPress={addToCart}>
            <Text style={styles.cartText}>장바구니</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton} onPress={() => goToPurchaseScreen(item)}>
            <Text style={styles.buyNowText}>바로구매</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  breadInfo: {
    alignItems: 'center',
    marginTop: 50,
    height: screenHeight * 0.4,
  },
  breadName: {
    fontSize: 30,
  },
  breadImage: {
    marginTop: 30,
    height: 155,
    width: 266,
    resizeMode: 'contain',
  },
  infoTitle: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 15,
  },
  infoText: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
  bakedDateContainer: {
    marginTop: 50,
    height: screenHeight * 0.1,
    backgroundColor: '#FFE9DB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bakedDateInfo: {
    fontSize: 15,
  },
  modalView: {
    height: screenHeight * 0.25,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute', // 위치를 절대적으로 설정
    bottom: 0, // 화면의 바닥부터 시작
    width: '100%',
  },
  itemName: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'ZenMaruGothic-Medium',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  quantityBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    width: 90,
    height: 30,
    borderRadius: 10,
  },

  controlButton: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 17,
  },
  itemPrice: {
    marginTop: 10,
    marginLeft: 100,
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  cartButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 30,
    width: 146,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  cartText: {
    color: 'black',
    fontSize: 17,
  },
  buyNowButton: {
    backgroundColor: '#FF7E7E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 146,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buyNowText: {
    color: 'white',
    fontSize: 17,
  },
});

export default DetailScreen;
