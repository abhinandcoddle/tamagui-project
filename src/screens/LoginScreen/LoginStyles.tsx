import {Platform, StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
export default StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 20,
    backgroundColor: 'white',
  },
  headerStack: {
    marginBottom: 24,
  },
  loginText: {
    fontFamily: Fonts.AVERTA_STD_BOLD,
    fontSize: 32,
  },
  subText: {
    fontFamily: Fonts.AVERTA_STD,
    fontSize: 16,
    lineHeight: 24,
  },
  subStack: {
    marginTop: 8,
    alignItems: 'center',
  },
  anchorButton: {
    padding: 0,
    height: 'auto',
    backgroundColor: 'transparent',
  },
  createButton: {
    marginLeft: 8,
  },
  showButton: {
    position: 'absolute',
    top: -40,
    right: 18,
  },
  forgotButton: {
    marginVertical: 16,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  signinButton: {
    height: 54,
  },
  socialButtons: {
    height: 54,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: 'white',
  },
  inputStack: {
    borderRadius: 8,
    borderWidth: 1,
    height: 112,
    borderColor: '#E2E2E2',
  },
  inputField: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    height: '50%',
    borderTopColor: '#E2E2E2',
  },
  userInput: {
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 1.5,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  createText: {
    fontFamily: Fonts.AVERTA_STD_BOLD,
    fontSize: 16,
    textDecorationLine: 'underline',
    lineHeight: 20,
  },
  buttonText: {
    fontFamily: Fonts.AVERTA_STD_BOLD,
    fontSize: 16,
    textDecorationLine: 'underline',
    lineHeight: 20,
  },
  seperator: {
    height: 16,
    marginVertical: 24,
    alignItems: 'center',
    position: 'relative',
  },
  seperatorLine: {
    width: '100%',
    height: 1.1,
    backgroundColor: '#E2E2E2',
  },
  seperatorText: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? -6 : -7,
    width: '100%',
    justifyContent: 'center',
  },
  orText: {
    fontFamily: Fonts.AVERTA_STD,
    fontSize: 12,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    textAlign: 'center',
    color: '#595D62',
  },
  errorStack: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  errorContent: {
    width: '100%',
    alignItems: 'center',
  },
  errorImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: Fonts.AVERTA_STD_BOLD,
    maxWidth: 300,
    textAlign: 'center',
    marginBottom: 8,
  },
  errorSubText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.AVERTA_STD,
    maxWidth: 225,
    textAlign: 'center',
    marginBottom: 24,
  },
  contactStack: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  helpHeader: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.AVERTA_STD_BOLD,
  },
  emailStack: {
    alignItems: 'center',
  },
  emailUs: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.AVERTA_STD_BOLD,
  },
  emailUsSub: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: Fonts.AVERTA_STD,
  },
});
