import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LikeList = () => {

    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style = {[styles.likeListContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
            <View style = {styles.rowLikeContainer}>
            <TouchableOpacity onPress={toggleCheckbox}>
                <Icon style={styles.checkbox} name={isChecked ? "checkbox-outline" : "checkbox"}></Icon>
            </TouchableOpacity>

            <View style = {styles.listImageContainer}>
                <Image style = {styles.listImage}source={require('../../../assets/images/bread.png')}/>
            </View>

            <Text style = {styles.listName}>쫄깃쫄깃 식빵</Text>
            </View>
            <View style = {styles.priceContainer}>
            <Text style={styles.originalPrice}>5,000원</Text>  
                <Text style={styles.salePrice}>2,500원</Text>
            
        </View>
       
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton} >
              <Text style={styles.deleteText}>삭제</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inMyBagButton}>
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
    checkbox : {
        marginTop : 10,
        marginLeft : 15,
        fontSize : 25,
        color : '#FF7E7E',
    },
    listImageContainer : {
        marginTop : 20,
        marginLeft : 10,
        width : 90,
        height : 90,
        borderRadius: 50,
        backgroundColor : '#FAEBE1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listImage : {
        width: '70%',
        height: '70%',
        resizeMode :'contain',
    },
    listName : {
        fontSize : 20,
        marginTop : 20,
        marginLeft : 10,
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