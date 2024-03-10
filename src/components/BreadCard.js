import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';

const BreadCard = () =>{
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.salePrice}>{salePrice}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
      width: 227,
      height: 249,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
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
    },
    salePrice: {
      fontSize: 15,
      color: 'red',
      marginTop: 10,
    },
  });
  

export default BreadCard;