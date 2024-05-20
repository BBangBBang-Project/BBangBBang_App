import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
const Header = () => {
    const navigation = useNavigation();
    
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('BottomTab')}>
        <Image
          style={styles.image}
          source={require('../assets/images/whiteBread.png')}
        />
        <Text style={styles.logotext}>BBANGBBANG</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
      <Icon style={styles.search} name="search" size={30} color="black"></Icon>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Icon2
        style={styles.icon}
        name="shopping-bag"
        size={23}
        color="black"></Icon2>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
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
    marginTop: 34,
    marginLeft: 8,
  },
});
export default Header;
