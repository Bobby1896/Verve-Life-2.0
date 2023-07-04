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
  description: {
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
  name: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20@s',
  },
  firstName: {
    backgroundColor: '#E8E8E8',
    width: '145@s',
    height: '60@s',
    paddingLeft: '20@s',
    fontSize: '16@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  lastName: {
    backgroundColor: '#E8E8E8',
    width: '145@s',
    height: '60@s',
    paddingLeft: '20@s',
    fontSize: '16@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  mailBox: {
    backgroundColor: '#E8E8E8',
    width: '310@s',
    height: '60@s',
    fontSize: '16@s',
    paddingLeft: '15@s',
  },
  contact: {
    flexDirection: 'row',
    gap: '20@s',
  },
  number: {
    backgroundColor: '#E8E8E8',
    width: '100@s',
    height: '60@s',
    paddingLeft: '20@s',
    fontSize: '16@s',
  },
  mobileNo: {
    backgroundColor: '#E8E8E8',
    width: '190@s',
    height: '60@s',
    paddingLeft: '20@s',
    fontSize: '16@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  keyContent: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    width: '310@s',
    justifyContent: 'space-between',
  },
  password: {
    height: '60@s',
    fontSize: '16@s',
    fontFamily: 'Rubik-VariableFont_wght',
    paddingLeft: '15@s',
    paddingLeft: '20@s',
  },
  eyeIcon: {
    marginTop: '15@s',
    marginRight: '10@s',
  },
  registerBtn: {
    marginTop: '30@s',
  },
  register: {
    backgroundColor: '#1A73E8',
    width: '310@s',
    paddingVertical: '15@s',
    paddingHorizontal: '20@s',
    textAlign: 'center',
    borderRadius: '30@s',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '18@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
});

export default styles;
