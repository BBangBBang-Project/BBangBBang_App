import React, {useState} from 'react';
import { View, ScrollView,StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BreadCard from './components/BreadCard';
import Header from '../../components/Header';
import ModalScreen from './ModalScreen';

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

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

// 모달을 보여주는 함수
  const showModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setModalVisible(false);
  };

// DetailScreen으로 네비게이션하며 item 데이터 전달
  const goToDetailScreen = (item) => {
    navigation.navigate('Detail', { item }); 
  };

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
              onAddPress={() => showModal(bread)}
              onCardPress={() => goToDetailScreen(bread)}
            />
          ))}
        </View>
      </ScrollView>
      </View> 
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={hideModal}>
          <View style={styles.modalContainer} >
          <ModalScreen item={selectedItem} onClose={hideModal} isVisible={modalVisible} />
          </View>
        </TouchableOpacity>
      </Modal>
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
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end', // 모달을 화면의 바닥에 맞추기
      backgroundColor: 'rgba(0,0,0,0.5)', // 배경 투명도 조정
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
});

export default HomeScreen;
