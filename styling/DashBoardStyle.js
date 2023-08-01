import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  overAllContainer: {
    paddingTop: '13@s',
    justifyContent: 'center',
    paddingHorizontal: '10@s',
    backgroundColor: '#FFFFFF',
  },

  sideBar: {
    borderRightWidth: 2,
    borderColor: 'red',
  },

  //   Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '4@s',
  },
  hamburger: {
    paddingTop: '30@s',
  },

  // Calendar
  calendar: {
    flexDirection: 'row',
    gap: '5@s',
    justifyContent: 'flex-end',
    marginTop: '20@s',
  },
  date: {
    fontSize: '12@s',
  },

  // Activity Log
  activityLog: {
    marginTop: '15@s',
    marginBottom: '5@s',
    fontWeight: '400',
    fontSize: '14@s',
    color: '#7F8A99',
    paddingLeft: '10@s',
  },
  stats: {
    backgroundColor: '#3077BD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '10@s',
  },
  icons: {
    alignItems: 'center',
    gap: '3@s',
  },
  content: {
    paddingVertical: '20@s',
    paddingHorizontal: '10@s',
    alignItems: 'center',
    gap: '12@s',
  },
  texts: {
    color: '#FFFFFF',
    fontSize: '12@s',
    textAlign: 'center',
    fontWeight: '400',
  },
  number: {
    color: '#FFFFFF',
    fontSize: '18@s',
    textAlign: 'center',
    fontWeight: '700',
  },
  arrowRight: {
    backgroundColor: '#2D71B3',
    paddingHorizontal: '5@s',
    justifyContent: 'center',
    borderTopRightRadius: '10@s',
    borderBottomRightRadius: '10@s',
  },

  //   Fitness & Food

  infos: {
    marginTop: '15@s',
    gap: '10@s',
  },
  fitFood: {
    backgroundColor: '#E3E9F580',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '15@s',
    borderRadius: '5@s',
  },
  fitFoodContent: {
    justifyContent: 'space-between',
  },
  fitness: {
    color: '#00425F',
    fontSize: '22@s',
    fontWeight: '700',
  },
  verve: {
    color: '#00425F',
    fontSize: '14@s',
  },
  getStarted: {
    fontSize: '12@s',
    color: '#EE312A',
    fontWeight: '600',
  },

  //   posts
  postBg: {
    backgroundColor: '#FBFBFB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '10@s',
    paddingHorizontal: '5@s',
    marginBottom: '10@s',
  },
  postContainer: {
    flexDirection: 'row',
    gap: '5@s',
  },
  posts: {
    marginTop: '20@s',
  },
  postsTexts: {
    paddingBottom: '10@s',
    color: '#00425F',
    fontSize: '14@s',
    fontWeight: '400',
  },
  carbsImg: {
    width: '125.02@s',
    resizeMode: 'contain',
    height: '132.78@s',
  },
  carbsImg2: {
    width: '133@s',
    resizeMode: 'cover',
    height: '132.78@s',
  },
  carbsImg3: {
    width: '90@s',
    resizeMode: 'cover',
    height: '132.78@s',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '125.02@s',
    borderRadius: '5@s',
    height: '132.78@s',
  },
  overlay2: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '133@s',
    borderRadius: '5@s',
    height: '132.78@s',
  },
  cardsDetails: {
    padding: '8@s',
  },
  healthy: {
    color: '#FFFFFF',
    fontSize: '10@s',
    fontWeight: '600',
  },
  gain: {
    color: '#FFFFFF',
    fontSize: '10@s',
    fontWeight: '600',
    paddingTop: '55@s',
  },
  lifeStyle: {
    color: '#FFFFFF',
    fontSize: '8@s',
    fontWeight: '500',
    paddingTop: '10@s',
  },

  emptyBg: {
    backgroundColor: '#FBFBFB',
    marginVertical: '10@s',
    paddingVertical: '15@s',
    paddingHorizontal: '5@s',
  },

  //   Verve Offers
  verveOffers: {
    color: '#00425F',
    fontWeight: '400',
    fontSize: '14@s',
    marginBottom: '10@s',
  },
  section4: {
    marginBottom: '10@s',
  },
  verveCard: {
    width: '100%',
    borderRadius: '5@s',
  },
});

export default styles;
