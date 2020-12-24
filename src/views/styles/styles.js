import {Dimensions} from 'react-native';
import * as fontSize from './fontSize';
const {height, width} = Dimensions.get('window');

module.exports = {
  containerRoot: {
    flex: 1,
    flexDirection: 'column',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
  },
  containetTextInput: {
    margin: 10,
    backgroundColor: '#1a2a44',
    width: width * 0.8,
    borderRadius: 5,
  },
  hintext: {color: 'white', fontSize: fontSize.large},
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    backgroundColor: '#ff4086',
    height: height * 0.06,
    borderRadius: 5,
    marginVertical: height * 0.06,
  },
  textButton: {color: 'white', fontSize: fontSize.large},
  viewRowIcon: {flexDirection: 'row', alignItems: 'center'},
  iconLogo: {width: width * 0.4, height: width * 0.4},
  viewIconInput: {flex: 1, alignItems: 'center'},
  viewLogo: {justifyContent: 'flex-start', marginBottom: 50},
};
