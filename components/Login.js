import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ChevronLeft, Eye, QuestionMark} from '../reuse/svg';
import styles from '../styling/LoginStyle';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.iconHeader}>
        <ChevronLeft onPress={() => navigation.navigate('Carousel')} />
        <QuestionMark />
      </View>

      <Text style={styles.loginHeader}>Login</Text>

      <View style={styles.infoBox}>
        <TextInput
          style={styles.mailBox}
          placeholder="Email or Mobile"
          label="Email or Mobile"
        />

        <View style={styles.keyContent}>
          <TextInput
            style={styles.passwordBox}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Eye style={styles.eyeIcon} />
        </View>
      </View>

      <View style={styles.recoverDetails}>
        <View style={styles.text}>
          <Text style={styles.texts}>Forget Password?</Text>
          <Text style={styles.span}>Recover</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.texts}>Login with</Text>
          <Text style={styles.span}> FaceID</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={styles.login}>LOG IN</Text>
        </TouchableOpacity>

        <Text style={styles.or}>or</Text>

        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={styles.register}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
