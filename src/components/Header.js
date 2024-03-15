import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const Header = () => {
    
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/whiteBread.png')} />
        <Text style={styles.logotext}>BBANGBBANG</Text>
        <Icon style={styles.search} name="search" size={30} color="black"></Icon>
        <Icon2 style={styles.icon} name="shopping-basket" size={20} color="black"></Icon2>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      
    },
    image: {
        marginTop: 30,
        marginLeft: 24,
        height: 35,
        width : 35,
    },
    logotext: {
        marginTop: 40,
        marginLeft: 10,
        fontSize: 15, 
        fontFamily:'Syncopate', 
    },
    search:{
        marginTop: 34,
        marginLeft: 105,
    },
    icon: {
        marginTop: 37,
        marginLeft: 10,
    }
});
export default Header;