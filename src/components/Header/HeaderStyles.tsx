import {StyleSheet} from 'react-native';
import {Display} from '../../utils/index';

export default StyleSheet.create({
  searchStack: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  backIconStack: {
    paddingVertical: 8,
    paddingRight: 12,
  },
  headerStack: {
    borderWidth: 1,
    borderRadius: 30,
    borderBlockColor: '#424548',
    alignItems: 'center',
    marginLeft: 16,
    paddingHorizontal: 16,
  },
  nonSearch: {
    borderWidth: 0,
    marginLeft: 16,
  },
  inputContent: {
    height: 44,
    fontSize: 16,
    backgroundColor: 'transparent',
    width: '100%',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  iconsContent: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  icons: {
    paddingLeft: 10,
  },
  titleStack: {
    position: 'absolute',
    width: Display.setWidth(100) - 184,
  },
  title: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
});
