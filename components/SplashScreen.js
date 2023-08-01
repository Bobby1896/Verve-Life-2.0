import React, {useEffect} from 'react';
import {ImageBackground, Image, StatusBar} from 'react-native';
import styles from '../styling/SplashScreenStyle';
import {useState} from 'react';

const SplashScreen = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Carousel');
    }, 4000);
  });

  //  useEffect(() => {
  //    setTimeout(() => {
  //      isLoggedIn
  //        ? navigation.replace('BottomTabNavigator')
  //        : navigation.replace('Carousel');
  //    }, 4000);
  //  });

  return (
    <ImageBackground
      source={require('../images/gradients.png')}
      style={[styles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        hidden={false}
      />
      <Image source={require('../images/verveBigLogo.png')} />
    </ImageBackground>
  );
};

export default SplashScreen;
