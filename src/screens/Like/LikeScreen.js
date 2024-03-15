import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LikeList from './components/LikeList';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LikeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style = {styles.likeScreenContainer}> 
        <View style = {[styles.titleContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>찜한 상품 </Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <LikeList/>
        <LikeList/>
        <LikeList/>
        <LikeList/>
        <LikeList/>
        </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    likeScreenContainer : {
        flex : 1,
        backgroundColor : 'white',
        
    },
    titleContainer : {
        justifyContent : 'flex-start',
        alignContent : 'center',
        flexDirection: 'row',
    },
    goBackButton : {
        marginLeft : 10,
        marginTop : 60,
        fontSize : 40,
    },
    titleText : {
        marginTop : 40,
        marginLeft : 20,
        fontSize : 40,
        marginBottom : 40,

    }
});

export default LikeScreen;
