import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LikeButton from './LikeButton';
const BreadCard = ({
  imageUrl,
  name,
  originalPrice,
  salePrice,
  onCardPress,
  customerId,
  productId
}) => {
  useEffect(() => {
    console.log("imageUrl:", imageUrl);
  }, [imageUrl]);  // 이미지 URL이 변경될 때마다 로깅

  return (
    <TouchableOpacity onPress={onCardPress} style={styles.cardTouchable}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} 
               source={{uri: imageUrl}}
        />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.salePrice}>{salePrice}</Text>
        <View style={styles.likeButtonContainer}>
          <LikeButton productId={productId} customerId={customerId} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 227,
    height: 300,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#FAEBE1',
    overflow: 'hidden',
  },
  imageContainer: {
    marginTop: 40,
    width: 124,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 15,
    marginTop: 20,
    textAlign: 'center',
  },
  originalPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    marginTop: 20,
    color: 'grey',
  },
  salePrice: {
    fontSize: 15,
    color: 'rgba(225, 36, 36, 0.66)',
    marginTop: 1,
  },
  likeButtonContainer: {
    position: 'absolute',
    bottom: 13,
    right: 10,
  },
});

export default BreadCard;