import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width } = Dimensions.get('window'); // 화면의 가로 길이를 가져옴

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
      <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
      <Icon style={styles.search} name="search" size={width * 0.08} color="black"></Icon>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Icon2
        style={styles.icon}
        name="shopping-bag"
        size={width * 0.06}
        color="black"></Icon2>
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
    marginTop: width * 0.03
  },
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    height: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: width * 0.08,
    width: width * 0.08,
  },
  logotext: {
    marginLeft: 10,
    fontSize: width * 0.042,
    fontFamily: 'Syncopate',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginRight: width * 0.03,
  },
  icon: {
    marginRight: 0,
  },
});
export default Header;
