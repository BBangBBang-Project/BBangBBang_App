import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const Header = () => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.image}
          source={require('../assets/images/whiteBread.png')}
        />
        <Text style={styles.logotext}>BBANGBBANG</Text>
      </TouchableOpacity>
      <Icon style={styles.search} name="search" size={30} color="black"></Icon>
      <Icon2
        style={styles.icon}
        name="shopping-basket"
        size={20}
        color="black"></Icon2>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginTop: 30,
    marginLeft: 24,
    height: 35,
    width: 35,
  },
  logotext: {
    marginTop: 40,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'Syncopate',
  },
  search: {
    marginTop: 34,
    marginLeft: 105,
  },
  icon: {
    marginTop: 37,
    marginLeft: 10,
  },
});
export default Header;
