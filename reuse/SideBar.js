import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import styles from '../styling/reuse/SideBarStyle';
const SideBar = () => {
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.topContainer}>
        <Image source={require('../images/WhiteVervelifeLogo.png')} />
        <View style={styles.identity}>
          <Text style={styles.name}>
            Hi, Olaniyi {'\n'}
            <Text style={styles.email}>olaniyiakinmunmi@gmail...</Text>
          </Text>
          <Image
            style={styles.icon}
            source={require('../images/userpic.png')}
          />
        </View>
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.eCash}>eCash Balance</Text>
        <Text style={styles.amount}>N4, 657.04</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableHighlight>
          <Text style={styles.contents}>Home Page</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.contents}>Friends</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.contents}>Events</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.contents}>Groups</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.contents}>Settings</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.contents}>Log out</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default SideBar;
