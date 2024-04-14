import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { MY_IP_ADDRESS } from '../../../config/config';

const LikeButton = ({productId, customerId}) => {
  const [liked, setLiked] = useState(false);

  const handlePress = async () => {
    if (liked) {
      // 찜 목록에서 삭제
      try {
        const response = await axios.delete(
          `http://${MY_IP_ADDRESS}:8080/customer/${customerId}/favorite`,
          {data: {id: productId}},
        );
        if (response.status === 200) {
          setLiked(false);
          Alert.alert('찜 목록에서 삭제되었습니다!');
          console.log('liked : ', liked);
          console.log('productId : ', productId);
          console.log('customerId : ', customerId);
        }
      } catch (error) {
        console.error(error);
        console.log('liked : ', liked);
        console.log('productId : ', productId);
        console.log('customerId : ', customerId);
      }
    } else {
      // 찜 목록에 추가
      try {
        const response = await axios.post(
          `http://${MY_IP_ADDRESS}:8080/customer/${customerId}/favorite`,
          {id: productId},
        );
        if (response.status === 200) {
          setLiked(true);
          Alert.alert('찜 목록에 추가되었습니다!');
          console.log('liked : ', liked);
          console.log('productId : ', productId);
          console.log('customerId : ', customerId);
        }
      } catch (error) {
        console.error(error);
        console.log('liked : ', liked);
        console.log('productId : ', productId);
        console.log('customerId : ', customerId);
      }
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View>
        <Icon
          name={liked ? 'heart' : 'heart-outline'}
          style={styles.text}></Icon>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7E7E',
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default LikeButton;
