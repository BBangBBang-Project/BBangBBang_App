import React from 'react';
import { View, ScrollView,StyleSheet } from 'react-native';
import BreadCard from '../../components/BreadCard';
import Header from '../../components/Header';

const breadData = [
  {
    imageUrl: require("../../assets/images/bread.png"),
    name: "쫄깃쫄깃 식빵",
    originalPrice: "₩5,000",
    salePrice: "₩2,500",
  },
  {
    imageUrl: require("../../assets/images/bread.png"),
    name: "쫄깃쫄깃 식빵",
    originalPrice: "₩5,000",
    salePrice: "₩2,500",
  },
  {
    imageUrl: require("../../assets/images/bread.png"),
    name: "쫄깃쫄깃 식빵",
    originalPrice: "₩5,000",
    salePrice: "₩2,500",
  },
  {
    imageUrl: require("../../assets/images/bread.png"),
    name: "쫄깃쫄깃 식빵",
    originalPrice: "₩5,000",
    salePrice: "₩2,500",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.screenContainer}>
      <ScrollView
  horizontal={true}
  style={styles.scrollViewContainer}
  contentContainerStyle={{ alignItems: 'center' }}
>
        <View style={styles.cardContainer}>
          {breadData.map((bread, index) => (
            <BreadCard
              key={index}
              imageUrl={bread.imageUrl}
              name={bread.name}
              originalPrice={bread.originalPrice}
              salePrice={bread.salePrice}
            />
          ))}
        </View>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'white'
    },
    scrollViewContainer:{
        flexGrow: 1
    },
    screenContainer : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer:{
        flexDirection: 'row',
        alignItems: 'center',

    }
});

export default HomeScreen;
