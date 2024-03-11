import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const AddButton = () => {
  // 버튼을 클릭했을 때 실행될 함수
  const handlePress = () => {
    // 여기서 다른 창을 띄우는 로직을 구현합니다.
    // 예시로 Alert를 사용해 간단한 메시지를 보여주고 있습니다.
    Alert.alert("Button Pressed", "Here you can open a new screen.");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7E7E',
    width: 50,
    height: 50,
    borderRadius: 25, // width와 height의 절반으로 설정하여 원 모양을 만듭니다.
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default AddButton;
