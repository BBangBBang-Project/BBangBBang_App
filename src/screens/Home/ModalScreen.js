// ModalScreen.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const deviceWidth = Dimensions.get('window').width;

const ModalScreen = ({isVisible, onClose, item}) => {
  const [quantity, setQuantity] = useState(1);
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

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.quantityControl}>
            <View style={styles.quantityBox}>
              <TouchableOpacity
                onPress={() => handleQuantityChange('decrease')}>
                <Icon name="minus" style={styles.controlButton}></Icon>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => handleQuantityChange('increase')}>
                <Icon name="plus" style={styles.controlButton}></Icon>
              </TouchableOpacity>
            </View>
            <Text style={styles.itemPrice}>{`${totalPrice}원`}</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.cartButton} onPress={onClose}>
              <Text style={styles.cartText}>장바구니</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNowButton} onPress={onClose}>
              <Text style={styles.buyNowText}>바로구매</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: deviceWidth,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemName: {
    marginTop: 0,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'ZenMaruGothic-Medium',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    paddingHorizontal: 10,
    paddingVertical: 5,
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

export default ModalScreen;
