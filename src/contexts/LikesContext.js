import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { MY_IP_ADDRESS } from '../config/config';

const LikesContext = createContext();

export const useLikes = () => useContext(LikesContext);

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  const fetchLikes = async () => {
    try {
      const response = await axios.get(`http://${MY_IP_ADDRESS}:8080/customer/2/favorite`);
      setLikes(response.data || []);
    } catch (error) {
      console.error('Failed to fetch likes:', error);
      Alert.alert('찜 목록을 불러오는 데 실패했습니다.');
    }
  };

  const addLike = async (product) => {
    try {
      const response = await axios.post(`http://${MY_IP_ADDRESS}:8080/customer/${product.customerId}/favorite`, { id: product.id });
      if (response.status === 200) {
        setLikes(prevLikes => [...prevLikes, product]);
        Alert.alert('찜 목록에 추가되었습니다!');
      }
    } catch (error) {
      console.error('찜 추가 에러:', error);
      Alert.alert('찜 목록 추가 실패');
    }
  };

  const removeLike = async (productId, customerId) => {
    try {
      const response = await axios.delete(`http://${MY_IP_ADDRESS}:8080/customer/${customerId}/favorite`, { data: { id: productId } });
      if (response.status === 200) {
        setLikes(prevLikes => prevLikes.filter(item => item.id !== productId));
        Alert.alert('찜 목록에서 삭제되었습니다!');
      }
    } catch (error) {
      console.error('찜 목록 삭제 에러:', error);
      Alert.alert('찜 목록 삭제 실패');
    }
  };

  return (
    <LikesContext.Provider value={{ likes, fetchLikes, addLike, removeLike }}>
      {children}
    </LikesContext.Provider>
  );
};
