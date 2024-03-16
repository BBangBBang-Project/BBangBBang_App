import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PurchaseList from './components/PurchaseList';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PurchaseScreen = () => {

    const navigation = useNavigation();

    return (
        <View style = {styles.purchaseScreenContainer}> 
        <View style = {[styles.titleContainer, { borderBottomColor: '#949393', borderBottomWidth: 1}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.goBackButton} name = "chevron-back-outline"></Icon>
            </TouchableOpacity>
            <Text style={styles.titleText}>결제하기</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <PurchaseList/>
        <PurchaseList/>
        <PurchaseList/>
        <PurchaseList/>
        <PurchaseList/>
        <PurchaseList/>
        <PurchaseList/>
        </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    purchaseScreenContainer : {
        flex : 1,
        backgroundColor : 'white',
    },
    titleContainer : {
        justifyContent : 'flex-start',
        alignContent : 'center',
        flexDirection: 'row',
        marginTop : 50,
    },
    goBackButton : {
        marginLeft : 10,
        fontSize : 40,
        marginBottom : 30,
    },
    titleText : {
        marginLeft : 20,
        fontSize : 30,
        fontFamily:'Syncopate', 
    }
});

export default PurchaseScreen;