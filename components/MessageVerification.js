import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ChevronLeft, QuestionMark} from '../reuse/svg';
import styles from '../styling/MessageVerificationStyle';

const MessageVerification = () => {
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.iconHeader}>
        <ChevronLeft onPress={() => navigation.navigate('Login')} />
        <QuestionMark />
      </View>

      <Text style={styles.description}>We sent you a message</Text>
      <Text style={styles.smsTexts}>
        Please enter the 4 digit code we sent via text message to +2348180000456
      </Text>

      <View style={styles.boxContainer}>
        <TextInput style={styles.box1} placeholder=""></TextInput>
        <TextInput style={styles.box2} placeholder=""></TextInput>
        <TextInput style={styles.box3} placeholder=""></TextInput>
        <TextInput style={styles.box4} placeholder=""></TextInput>
      </View>

      <Text style={styles.time}>The text should arrive within 45 seconds</Text>

      <Text style={styles.changeNo}>Change my phone number</Text>

      <View style={styles.continueBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={styles.continue}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MessageVerification;
