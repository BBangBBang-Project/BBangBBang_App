import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useLikes } from '../../../contexts/LikesContext';

const LikeButton = ({productId, customerId, liked}) => {
  const { addLike, removeLike } = useLikes();

  const handlePress = async () => {
    if (liked) {
      await removeLike(productId, customerId);
    } else {
      await addLike({ id: productId, customerId });
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
