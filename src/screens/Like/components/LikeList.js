import React from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Image,Alert } from 'react-native';
import axios from 'axios';
import { useLikes } from '../../../contexts/LikesContext';
import { MY_IP_ADDRESS } from '../../../config/config';

const LikeList = ({ item, customerId }) => {
    const { name, price, imageUrl} = item;
    const salePrice = parseInt(price * 0.7);
    const { removeLike } = useLikes();

  // 상품을 찜 목록에서 삭제하는 함수
  const removeFromFavorites = async () => {
    removeLike(item.productId, customerId);
    console.log("name : ", name)
    console.log("id : ", item.productId )
};

        // 상품을 장바구니에 추가하는 함수
    const addToCart = () => {
        axios.post(`http://${MY_IP_ADDRESS}:8080/customer/2/cart`, {
        breadId: item.productId, // 상품 ID
        quantity: 1, // 선택한 수량
        })
        .then(response => {
        console.log('장바구니에 추가됨:', response.data); // 모달 창 닫기
        Alert.alert("장바구니에 담겼습니다")
        })
        .catch(error => {
            console.error('장바구니에 상품 추가 에러:', error);
        });
    };
    
    return (
        <View style = {[styles.likeListContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <View style = {styles.rowLikeContainer}>

            <View style = {styles.listImageContainer}>
                <Image style = {styles.listImage} source={{ uri: imageUrl }} />
            </View>

            <Text style = {styles.listName}>{name}</Text>
            </View>
            <View style = {styles.priceContainer}>
            <Text style={styles.originalPrice}>{price}원</Text>  
            <Text style={styles.salePrice}>{salePrice}원</Text>      
        </View>
       
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={removeFromFavorites} >
              <Text style={styles.deleteText}>삭제</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inMyBagButton} onPress={addToCart}>
              <Text style={styles.inMyBagText}>장바구니 담기</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    likeListContainer: {
        flex : 1,
        backgroundColor : 'white',
       
    },
    rowLikeContainer : {
        flexDirection: 'row',
    },
    listImageContainer : {
        marginTop : 20,
        marginLeft : 30,
        width : 95,
        height : 95,
        borderRadius: 50,
        backgroundColor : '#FAEBE1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listImage : {
        width: '75%',
        height: '75%',
        resizeMode :'contain',
    },
    listName : {
        fontSize : 20,
        marginTop : 30,
        marginLeft : 45,
    },
    salePrice : {
        marginTop : -60,
        marginLeft : 290,
        color: 'rgba(225, 36, 36, 0.66)',
        fontSize : 17,
        
    },  
    originalPrice :{
        marginTop : -60,
        marginBottom : 20,
        textDecorationLine: 'line-through',
        marginLeft : 300,
        fontSize : 12,
        color : '#9A9A9A',
    },
    buttonContainer : {
        flexDirection: 'row',
        marginBottom : 10,
        marginTop : -30,
    },
    deleteButton : {
        backgroundColor: '#ffffff',
        marginLeft : 170,
        width : 60,
        height : 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 7,
        borderWidth: 1,
        borderColor : '#000000'
    }, 
    deleteText : {
        color: 'black',
        fontSize : 14,
    },
    inMyBagButton: {
        borderWidth: 1,
        borderColor: '#FF7E7E',
        marginLeft : 20,
        width : 100,
        height : 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 7,
      },
      inMyBagText: {
        color: '#FF7E7E',
        fontSize : 14,
      },
});

export default LikeList;