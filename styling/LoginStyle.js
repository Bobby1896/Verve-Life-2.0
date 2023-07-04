import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  overAllContainer: {
    marginTop: '35@s',
    justifyContent: 'center',
    paddingHorizontal: '20@s',
  },
  iconHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  loginHeader: {
    marginTop: '30@s',
    fontFamily: 'Rubik-VariableFont_wght',
    fontSize: '24@s',
    fontWeight: '700',
    color: '#00425F',
  },
  infoBox: {
    marginTop: '30@s',
    gap: '20@s',
  },
  mailBox: {
    backgroundColor: '#E8E8E8',
    width: '310@s',
    height: '60@s',
    borderBottomColor: '#1A73E8',
    borderBottomWidth: '3@s',
    fontSize: '16@s',
    paddingLeft: '15@s',
  },
  keyContent: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    width: '310@s',
    justifyContent: 'space-between',
  },
  passwordBox: {
    height: '60@s',
    fontSize: '16@s',
    fontFamily: 'Rubik-VariableFont_wght',
    paddingLeft: '15@s',
  },
  eyeIcon: {
    marginTop: '15@s',
    marginRight: '10@s',
  },
  recoverDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10@s',
  },
  texts: {
    fontSize: '14@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  text: {
    flexDirection: 'row',
    gap: '2@s',
  },
  span: {
    fontWeight: '700',
    fontSize: '14@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  buttons: {
    marginTop: '50@s',
    gap: '20@s',
    alignItems: 'center',
  },
  or: {
    fontSize: '16@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  login: {
    backgroundColor: '#1A73E8',
    width: '310@s',
    paddingVertical: '12@s',
    paddingHorizontal: '20@s',
    textAlign: 'center',
    borderRadius: '30@s',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '18@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  register: {
    backgroundColor: '#C5EDFF',
    width: '310@s',
    paddingVertical: '12@s',
    paddingHorizontal: '20@s',
    textAlign: 'center',
    borderRadius: '30@s',
    color: '#00425F',
    fontWeight: '700',
    fontSize: '18@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
});

export default styles;
