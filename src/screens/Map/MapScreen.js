import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, PermissionsAndroid, TouchableOpacity, Alert, Image } from "react-native";
import Geolocation from "react-native-geolocation-service";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

async function requestPermission() {
  try {
    if (Platform.OS === "ios") {
      const status = await Geolocation.requestAuthorization("always");
      return status === "granted";
    } else if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

function MapScreen() {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  const getLocation = async () => {
    const hasPermission = await requestPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log("Current position: ", position);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
          });
        },
        (error) => {
          console.log("Error getting current position: ", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleMarkerPress = (title) => {
    Alert.alert(
      `${title}을 클릭했습니다.`,
      `${title}으로 변경됩니다.`,
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ],
      { cancelable: false }
    );
  };

  if (!location) {
    return (
      <View style={styles.splashContainer}>
       <Image
          source={require('../../assets/images/whiteBread.png')} // 실제 스플래시 이미지로 교체
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" style={styles.icon} />
      </TouchableOpacity>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={location}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{ latitude: 37.58840929637797, longitude: 127.00602347678497 }}
          title={"한성대입구역"}
          description={"한성대입구역"}
          icon={require('../../assets/images/marker.png')}
          onPress={() => handleMarkerPress("한성대입구역")}
        />
        <Marker
          coordinate={{ latitude: 37.592694767073134, longitude: 127.01650323455772 }}
          title={"성신여대입구역"}
          description={"성신여대입구역"}
          icon={require('../../assets/images/marker.png')}
          onPress={() => handleMarkerPress("성신여대입구역")}
        />
        <Marker
          coordinate={{ latitude: 37.58215429037538, longitude: 127.00189633072232 }}
          title={"혜화역"}
          description={"혜화역"}
          icon={require('../../assets/images/marker.png')}
          onPress={() => handleMarkerPress("혜화역")}
        />
      </MapView>
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>현재 위치 가져오기</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex :1,
  },
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  splashImage: {
    width: 100,
    height: 100, // 실제 스플래시 이미지 크기로 조정
    resizeMode: 'contain', // 이미지 조정 옵션
  },
  text: {
    textAlign: "center",
    marginTop: 20,
  },
  map: {
    flex: 1,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 25,
    padding: 5,
  },
  icon: {
    fontSize: 30,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -75 }],
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MapScreen;