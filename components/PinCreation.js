import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ChevronLeft, QuestionMark} from '../reuse/svg';
import styles from '../styling/PinCreationStyle';

const PinCreation = ({navigation}) => {
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.iconHeader}>
        <ChevronLeft
          onPress={() => navigation.navigate('MessageVerification')}
        />
        <QuestionMark />
      </View>

      <Text style={styles.description}>Create Your 4-Digit PIN</Text>
      <Text style={styles.smsTexts}>
        To protect the security of youe Verve eCash wallet, please register a
        4-Digit PIN code.
      </Text>

      <View style={styles.boxContainer}>
        <TextInput style={styles.box1} placeholder=""></TextInput>
        <TextInput style={styles.box2} placeholder=""></TextInput>
        <TextInput style={styles.box3} placeholder=""></TextInput>
        <TextInput style={styles.box4} placeholder=""></TextInput>
      </View>

      <View style={styles.savePinBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={styles.pin}>SAVE PIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PinCreation;
