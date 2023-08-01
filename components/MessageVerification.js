import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {ChevronLeft, QuestionMark} from '../reuse/svg';
import styles from '../styling/MessageVerificationStyle';

const MessageVerification = ({navigation}) => {
  const inputBox1 = useRef(null);
  const inputBox2 = useRef(null);
  const inputBox3 = useRef(null);
  const inputBox4 = useRef(null);

  const handleInputChange1 = text => {
    {
      text.length === 1 && inputBox2.current.focus();
    }
  };
  const handleInputChange2 = text => {
    {
      text.length === 1 && inputBox3.current.focus();
    }
  };
  const handleInputChange3 = text => {
    {
      text.length === 1 && inputBox4.current.focus();
    }
  };

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
        <TextInput
          ref={inputBox1}
          autoFocus
          maxLength={1}
          onChangeText={handleInputChange1}
          style={styles.box1}
          placeholder=""
          keyboardType="numeric"></TextInput>
        <TextInput
          ref={inputBox2}
          maxLength={1}
          onChangeText={handleInputChange2}
          style={styles.box2}
          placeholder=""
          keyboardType="numeric"></TextInput>
        <TextInput
          ref={inputBox3}
          maxLength={1}
          onChangeText={handleInputChange3}
          style={styles.box3}
          placeholder=""
          keyboardType="numeric"></TextInput>
        <TextInput
          ref={inputBox4}
          maxLength={1}
          style={styles.box4}
          placeholder=""
          keyboardType="numeric"></TextInput>
      </View>

      <Text style={styles.time}>The text should arrive within 45 seconds</Text>

      <Text style={styles.changeNo}>Change my phone number</Text>

      <View style={styles.continueBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('PinCreation')}>
          <Text style={styles.continue}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MessageVerification;
