import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ChevronLeft, Eye, QuestionMark} from '../reuse/svg';
import styles from '../styling/RegisterStyle';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.iconHeader}>
        <ChevronLeft onPress={() => navigation.navigate('Login')} />
        <QuestionMark />
      </View>

      <Text style={styles.description}>Tell us about you.</Text>

      <View style={styles.infoBox}>
        <View style={styles.name}>
          <TextInput style={styles.firstName} placeholder="First Name" />
          <TextInput style={styles.lastName} placeholder="Last Name" />
        </View>
        <TextInput style={styles.mailBox} placeholder="Email Address" />

        <View style={styles.contact}>
          <TextInput style={styles.number} placeholder="+234" />
          <TextInput style={styles.mobileNo} placeholder="Mobile Number" />
        </View>

        <View style={styles.keyContent}>
          <TextInput
            style={styles.password}
            placeholder="Set Password"
            secureTextEntry={true}
          />
          <Eye style={styles.eyeIcon} />
        </View>

        <View style={styles.registerBtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MessageVerification')}>
            <Text style={styles.register}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
