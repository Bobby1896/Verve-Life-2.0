import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  overAllContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#00425F',
    padding: '20@s',
  },
  identity: {
    flexDirection: 'row',
    padding: '10@s',
    gap: '7@s',
  },
  topDetails: {
    flexDirection: 'row',
  },
  name: {
    color: '#FFFFFF',
    fontSize: '18@s',
    fontWeight: '400',
  },
  email: {
    color: '#FFFFFF',
    fontSize: '12@s',
    paddingTop: '10@s',
  },
  midContainer: {
    backgroundColor: '#3077BD',
    padding: '20@s',
  },
  eCash: {
    paddingLeft: '12@s',
    color: '#FFFFFF',
  },
  amount: {
    paddingLeft: '12@s',
    color: '#FFFFFF',
    fontSize: '18@s',
    fontWeight: '400',
  },
  bottomContainer: {
    padding: '32@s',
    gap: '20@s',
  },
  contents: {
    color: '#00425F',
    fontSize: '18@s',
  },
});

export default styles;
