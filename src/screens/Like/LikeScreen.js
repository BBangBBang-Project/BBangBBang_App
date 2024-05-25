import React,{useEffect, useCallback} from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import LikeList from './components/LikeList';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useLikes } from '../../contexts/LikesContext';

const LikeScreen = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused(); // 페이지 포커스 상태 확인
    const { likes, fetchLikes, removeLike} = useLikes(); // LikesContext에서 찜 목록 데이터와 데이터 로딩 함수를 가져옴
    const customerId = 2;


    useEffect(() => {
        if (isFocused) {
            fetchLikes(); // 화면 포커스 시 찜 목록 갱신
            console.log(likes);
        }
    }, [isFocused]);

    const handleRemoveLike = useCallback(async (productId) => {
        await removeLike(productId, customerId);
        fetchLikes();
    }, [removeLike,fetchLikes, customerId]);

    return (
        <View style = {styles.likeScreenContainer}> 
        <View style = {[styles.titleContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>찜한 상품 </Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {likes.map((item) => (
                    <LikeList key={item.productId} item={item} customerId={customerId} onRemove={handleRemoveLike}/>
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
