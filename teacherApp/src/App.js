import React from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';

registerScreens();
registerScreenVisibilityListener();

const tabs = [{
  label: 'メンター面談',
  screen: 'studyquestion.Meeting',
  icon: require('../img/handshake.png'),
  title: 'メンター面談',
}, {
  label: '質問する',
  screen: 'studyquestion.QuestionLog',
  icon: require('../img/discuss-issue.png'),
  title: '質問履歴',
}, {
  label: 'マイページ',
  screen: 'studyquestion.Mypage',
  icon: require('../img/user.png'),
  title: 'マイページ',
}];

Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'fade' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#eaeaea',
    tabBarButtonColor: '#5E6977',
    tabBarSelectedButtonColor: '#eacd56',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#224BA7',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#224BA7',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  }
});