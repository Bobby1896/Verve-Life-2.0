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
    fontSize: '18@s',
    fontWeight: '700',
    color: '#00425F',
  },
  smsTexts: {
    fontSize: '15@s',
    fontWeight: '600',
  },
  boxContainer: {
    flexDirection: 'row',
    gap: '10@s',
    marginTop: '20@s',
  },
  box1: {
    backgroundColor: '#E8E8E8',
    width: '60@s',
    height: '60@s',
    textAlign: 'center',
    fontSize: '18@s',
  },
  box2: {
    backgroundColor: '#E8E8E8',
    width: '60@s',
    height: '60@s',
    textAlign: 'center',
    fontSize: '18@s',
  },
  box3: {
    backgroundColor: '#E8E8E8',
    width: '60@s',
    height: '60@s',
    textAlign: 'center',
    fontSize: '18@s',
  },
  box4: {
    backgroundColor: '#E8E8E8',
    width: '60@s',
    height: '60@s',
    textAlign: 'center',
    fontSize: '18@s',
  },
  savePinBtn: {
    marginTop: '20@s',
  },
  pin: {
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
});

export default styles;
