import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {ChevronLeft, QuestionMark} from '../reuse/svg';
import styles from '../styling/PinCreationStyle';
import {useNavigation} from '@react-navigation/native';

const PinCreation = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const inputBox1 = useRef(null);
  const inputBox2 = useRef(null);
  const inputBox3 = useRef(null);
  const inputBox4 = useRef(null);

  const handleInputChange1 = text => {
    if (text.length === 1) {
      inputBox2.current.focus();
    }
  };

  const handleInputChange2 = text => {
    if (text.length === 1) {
      inputBox3.current.focus();
    }
  };

  const handleInputChange3 = text => {
    if (text.length === 1) {
      inputBox4.current.focus();
    }
  };
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.iconHeader}>
        <ChevronLeft onPress={handleGoBack} />
        <QuestionMark />
      </View>

      <Text style={styles.description}>Create Your 4-Digit PIN</Text>
      <Text style={styles.smsTexts}>
        To protect the security of youe Verve eCash wallet, please register a
        4-Digit PIN code.
      </Text>

      <View style={styles.boxContainer}>
        <TextInput
          ref={inputBox1}
          maxLength={1}
          onChangeText={handleInputChange1}
          autoFocus
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

      <View style={styles.savePinBtn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomTabNavigator')}>
          <Text style={styles.pin}>SAVE PIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PinCreation;
