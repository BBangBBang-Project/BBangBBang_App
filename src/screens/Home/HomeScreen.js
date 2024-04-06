import React, {useState, useEffect} from 'react';
import { View, ScrollView,StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import BreadCard from './components/BreadCard';
import Header from '../../components/Header';
import BreadData from '../../data/BreadData';

const HomeScreen = ({ navigation }) => {

  const [breadData, setBreadData] = useState([]);
 // const [customerId, setCustomerId] = useState(null);
  const customerId = '1';

// DetailScreen으로 네비게이션하며 item 데이터 전달
  const goToDetailScreen = (item) => {
    navigation.navigate('Detail', { item }); 
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await BreadData(); 
      setBreadData(data);
    };

    fetchData();
  }, []);

  // Fetch customer id

  // useEffect(() => {
  //   const fetchCustomerId = async () => {
  //     const customerId = await getCustomerIdFromSomewhere();
  //     setCustomerId(customerId);
  //   };

  //   fetchCustomerId();
  // }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.screenContainer}>
      <ScrollView
        horizontal={true}
        style={styles.scrollViewContainer}
        contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.cardContainer}>
          {breadData.map((bread, index) => (
            <BreadCard
              key={index}
              imageUrl={bread.imageUrl}
              name={bread.name}
              originalPrice={bread.originalPrice}
              salePrice={bread.salePrice}
              onCardPress={() => goToDetailScreen(bread)}
              customerId={customerId}
              productId={bread.id}
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
    },
});

export default HomeScreen;