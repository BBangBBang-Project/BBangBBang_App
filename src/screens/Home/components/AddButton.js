import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const AddButton = ({ onPress }) => {
  // 버튼을 클릭했을 때 실행될 함수
  const handlePress = () => {
    // 여기서 다른 창을 띄우는 로직을 구현
    Alert.alert("Button Pressed", "Here you can open a new screen.");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7E7E',
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default AddButton;
