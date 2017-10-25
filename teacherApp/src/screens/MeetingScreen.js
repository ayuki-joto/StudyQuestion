import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MeetingButton from '../components/MeetingButton';

class MeetingScreen extends React.Component {

  static navigatorButtons = {
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
      <Text style={styles.welcome}>
        時間になりました！
      </Text>
      <MeetingButton />
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
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default MeetingScreen;