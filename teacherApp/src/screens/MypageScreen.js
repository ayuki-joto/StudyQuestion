import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MypageMenu from '../components/MypageMenu';
import UserInfo from '../components/UserInfo';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class MypageScreen extends React.Component {

  static navigatorButtons = {
    rightButtons:[
      {
        id: 'UserSetting',
        disabled: true,
        disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonFontSize: 16,
        buttonFontWight: '600',
      },
      {
        icon: require('../../img/user-setting.png'),
        id: 'user-setting'
      }
    ],
    leftButtons: [
      {
        id: 'Notification',
        disabled: true,
        disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonFontSize: 16,
        buttonFontWight: '600',
      },
      {
        icon: require('../../img/bell.png'),
        id: 'notification'
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if(event.type === 'DeepLink') {
      const parts = event.link.split('/');
      if ( parts[0] === 'tab1' ) {
        this.props.navigator.push({
          screen: parts[1]
        });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <UserInfo />
      <MypageMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MypageScreen;