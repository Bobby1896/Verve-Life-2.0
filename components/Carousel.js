import {TouchableOpacity, StatusBar, View, Text, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import styles from '../styling/CarouselStyle';
import ChevronRight from '../reuse/svg';

const Carousel = ({navigation}) => {
  return (
    <View style={styles.overAllContainer}>
      <Swiper
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        autoplay={true}
        autoplayInterval={8000}>
        <View style={styles.container1}>
          <StatusBar backgroundColor={'#00000033'} hidden={false} />
          <Image source={require('../images/img1.png')} style={styles.slide1} />

          <View style={styles.texts}>
            <Text style={styles.text1}>Your Best Life {'\n'} Starts Here</Text>

            <Text style={styles.text2}>
              Smash your goals control your money, {'\n'} and make every day
              count!
            </Text>

            <TouchableOpacity>
              <View style={styles.btnContainer}>
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={styles.btn}>
                  Get Started
                </Text>

                <ChevronRight style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container2}>
          <Image source={require('../images/img2.png')} style={styles.slide1} />

          <View style={styles.texts}>
            <Text style={styles.text1}>
              The Support System {'\n'} You Always Wished For
            </Text>

            <Text style={styles.text2}>
              Tips and tricks from professional {'\n'} instructors, Connect wih
              fitness buddies {'\n'}from across the world.
            </Text>

            <TouchableOpacity>
              <View style={styles.btnContainer}>
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={styles.btn}>
                  Get Started
                </Text>

                <ChevronRight style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container3}>
          <Image source={require('../images/img3.png')} style={styles.slide3} />

          <View style={styles.texts}>
            <Text style={styles.text1}>
              Digital Payments {'\n'} In One Touch
            </Text>

            <Text style={styles.text2}>
              Anytime purchase, E-cash transfers, {'\n'} Inter-bank transfers,
              Card management
            </Text>

            <TouchableOpacity>
              <View style={styles.btnContainer}>
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={styles.btn}>
                  Get Started
                </Text>

                <ChevronRight style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Carousel;
