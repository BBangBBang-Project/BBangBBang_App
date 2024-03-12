import React,{useState} from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import AddButton from './AddButton';

const BreadCard = ({ imageUrl, name, originalPrice, salePrice, onAddPress}) => {

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
            <Image source={imageUrl} style={styles.image} />
            </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.salePrice}>{salePrice}</Text>
        <View style={styles.addButtonContainer}>
        <AddButton onPress={onAddPress} />
            </View>
        </View>
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
      backgroundColor:'#FAEBE1',
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
      color : 'grey'
    },
    salePrice: {
      fontSize: 15,
      color: 'rgba(225, 36, 36, 0.66)',
      marginTop: 1,
    },
    addButtonContainer : {
      position: 'absolute',
      bottom: 13,
      right: 10,
    },
  });
  

export default BreadCard;