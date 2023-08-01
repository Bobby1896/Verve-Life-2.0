import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../styling/DashBoardStyle';
import {
  Hamburger,
  Shoes,
  Wind,
  Flame,
  Clock,
  ChevronRight,
  Calendar,
  DownArrow,
} from '../reuse/svg';
import React, {useState} from 'react';
import Footer from '../reuse/Footer';
import SideBar from '../reuse/SideBar';
import SideMenu from 'react-native-side-menu';

const DashBoard = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <SideMenu
      menu={<SideBar />}
      isOpen={toggle}
      style={styles.sideBar}
      onChange={handleToggle}>
      <SafeAreaView style={styles.overAllContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleToggle}>
              <Hamburger style={styles.hamburger} />
            </TouchableOpacity>
            <Image source={require('../images/verveLogo.png')} />
            <Text></Text>
          </View>

          <View style={styles.calendar}>
            <Calendar />
            <Text style={styles.date}>Mon, 18th Nov, 2020</Text>
          </View>

          <Text style={styles.activityLog}>ACTIVITY LOG</Text>

          <View style={styles.stats}>
            <View style={styles.content}>
              <Text style={styles.texts}>Step{'\n'}Count</Text>
              <View style={styles.icons}>
                <Shoes />
                <Text style={styles.number}>1440</Text>
                <Text style={styles.texts}>STEPS</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.texts}>Active{'\n'}Time</Text>
              <View style={styles.icons}>
                <Clock />
                <Text style={styles.number}>120</Text>
                <Text style={styles.texts}>MIN</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.texts}>Calories{'\n'}Burnt</Text>
              <View style={styles.icons}>
                <Flame />
                <Text style={styles.number}>7.4</Text>
                <Text style={styles.texts}>KCAL</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.texts}>Distance{'\n'}Covered</Text>
              <View style={styles.icons}>
                <Wind />
                <Text style={styles.number}>11</Text>
                <Text style={styles.texts}>KM</Text>
              </View>
            </View>
            <View style={styles.arrowRight}>
              <ChevronRight />
            </View>
          </View>

          <View style={styles.infos}>
            <View style={styles.fitFood}>
              <View style={styles.fitFoodContent}>
                <Text style={styles.fitness}>Fitness</Text>
                <Text style={styles.verve}>
                  Don't Sit, Get Fit with {'\n'}Verve Life
                </Text>
                <Text style={styles.getStarted}>GET STARTED</Text>
              </View>

              <Image source={require('../images/lady.png')} />
            </View>

            <View style={styles.fitFood}>
              <View style={styles.fitFoodContent}>
                <Text style={styles.fitness}>Food</Text>
                <Text style={styles.verve}>
                  Eat Right, Be Healthy{'\n'}with Verve Life
                </Text>
                <Text style={styles.getStarted}>GET STARTED</Text>
              </View>

              <Image source={require('../images/meal.png')} />
            </View>
          </View>

          <View style={styles.posts}>
            <View style={styles.postBg}>
              <Text style={styles.postsTexts}>
                Posts based on your interest
              </Text>
              <DownArrow />
            </View>
            <View style={styles.postContainer}>
              <ImageBackground
                style={styles.carbsImg}
                source={require('../images/carbs.png')}>
                <View style={styles.overlay}>
                  <View style={styles.cardsDetails}>
                    <Text style={styles.healthy}>HEALTHY LIVING</Text>
                    <Text style={styles.gain}>
                      How to avoid weight gain over this Christ...
                    </Text>
                    <Text style={styles.lifeStyle}>GRACIOUSMI LIFESTYLE</Text>
                  </View>
                </View>
              </ImageBackground>

              <ImageBackground
                style={styles.carbsImg2}
                source={require('../images/vegies.png')}>
                <View style={styles.overlay2}>
                  <View style={styles.cardsDetails}>
                    <Text style={styles.healthy}>HEALTHY LIVING</Text>
                    <Text style={styles.gain}>
                      How to avoid weight gain over this Christ...
                    </Text>
                    <Text style={styles.lifeStyle}>GRACIOUSMI LIFESTYLE</Text>
                  </View>
                </View>
              </ImageBackground>

              <ImageBackground
                style={styles.carbsImg3}
                source={require('../images/glass.png')}>
                <View style={styles.overlay}>
                  <View style={styles.cardsDetails}>
                    <Text style={styles.healthy}>HEALTHY LIVING</Text>
                    <Text style={styles.gain}>
                      How to avoid weight gain over this Christ...
                    </Text>
                    <Text style={styles.lifeStyle}>GRACIOUSMI LIFESTYLE</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View style={styles.emptyBg}></View>
          <View style={styles.section4}>
            <Text style={styles.verveOffers}>Verve offers</Text>
            <Image
              style={styles.verveCard}
              source={require('../images/pics.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SideMenu>
  );
};

export default DashBoard;
