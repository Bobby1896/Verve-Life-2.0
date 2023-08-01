import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  overAllContainer: {},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '80@s',
    paddingTop: '15@s',
  },

  icons: {
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: '10@s',
  },
  launchIcon: {
    alignItems: 'center',
  },
  launch: {
    alignItems: 'center',
    transform: [{scale: 2.5}],
    marginTop: '-15@s',
    marginBottom: '16@s',
  },
});

export default styles;
