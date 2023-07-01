import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  dot: {
    marginBottom: '70@s',
    color: '#EEF3F5',
  },
  activeDot: {
    color: '#03435F',
    marginBottom: '70@s',
  },
  overAllContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
  container3: {
    flex: 1,
  },
  slide1: {
    flex: 0.9,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  slide2: {
    flex: 0.9,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  slide3: {
    flex: 0.9,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  texts: {
    alignItems: 'center',
    marginTop: '10@s',
  },
  text1: {
    fontSize: '22@s',
    fontWeight: '300',
    color: '#233539',
    textAlign: 'center',
    fontFamily: 'Roboto-Thin',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  text2: {
    fontSize: '16@s',
    fontWeight: '300',
    color: '#75888C',
    marginBottom: '30@s',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  btnContainer: {
    marginTop: '10@s',
    marginBottom: '-30@s',
    flexDirection: 'row',
    backgroundColor: '#1A73E8',
    width: '320@s',
    borderRadius: '4@s',
    justifyContent: 'space-between',
  },
  btn: {
    color: '#FFFFFF',
    textAlign: 'left',
    padding: '10@s',
    fontSize: '20@s',
    fontFamily: 'Rubik-VariableFont_wght',
  },
  icon: {
    padding: '10@s',
    paddingRight: '30@s',
    marginTop: '15@s',
  },
});

export default styles;
