import React,{ useState,useEffect } from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import LikeList from './components/LikeList';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { MY_IP_ADDRESS } from '../../config/config';

const LikeScreen = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused(); // 페이지 포커스 상태 확인
    const [likeList, setLikeList] = useState([]);
    const customerId = 1;

    useEffect(() => {
        const fetchLikeList = async () => {
            if (isFocused){
            try {
                const response = await axios.get(`http://${MY_IP_ADDRESS}:8080/customer/${customerId}/favorite`);
                setLikeList(response.data);
                
                console.log("product : ",response.data);
            } catch (error) {
                console.error('Error fetching like list:', error);
                console.log("product : ",response.data);
            }
        }
        };
        fetchLikeList();
        }, [isFocused]);

        // 삭제 콜백 함수
    const removeFromFavorites = productId => {
        setLikeList(prevList => prevList.filter(likedItem => likedItem.productId !== productId));
        Alert.alert('찜 목록에서 삭제되었습니다!');
    };

    return (
        <View style = {styles.likeScreenContainer}> 
        <View style = {[styles.titleContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>찜한 상품 </Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            {likeList.map((item) => (
          <LikeList key={item.favorite_id} item={item} onDelete={removeFromFavorites} customerId={customerId}/>
        ))}
        </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    likeScreenContainer : {
        flex : 1,
        backgroundColor : 'white',
        
    },
    titleContainer: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 50,
      },
      goBackButton: {
        marginLeft: 10,
        fontSize: 40,
        marginBottom: 20,
      },
      titleText: {
        marginLeft: 20,
        fontSize: 30,
        fontFamily: 'Syncopate',
      },
});

export default LikeScreen;
