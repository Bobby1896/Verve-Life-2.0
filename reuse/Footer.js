import {View, Text, SafeAreaView, TouchableHighlight} from 'react-native';
import React from 'react';
import {Home, Wallet, Decal, Setting, Launch} from './svg';
import styles from '../styling/reuse/FooterStyle';

const Footer = () => {
  //   const [clickIcon, setClickIcon] = useState(false);

  //   const handleClickIcon = () => {
  //     setClickIcon(!clickIcon);
  //   };
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.footer}>
        <View style={styles.icons}>
          <Home />
          <Text style={styles.text}>Home</Text>
        </View>

        <View style={styles.icons}>
          <Wallet />
          <Text style={styles.text}>Wallet</Text>
        </View>

        <View style={styles.launchIcon}>
          <Launch style={styles.launch} />
          <Text style={styles.text}>Lauch Activity</Text>
        </View>

        <View style={styles.icons}>
          <Decal />
          <Text style={styles.text}>Verve Deals</Text>
        </View>

        <View style={styles.icons}>
          <Setting />
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
