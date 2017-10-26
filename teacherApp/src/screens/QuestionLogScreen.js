import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import QuestionSearchTextField from '../components/QuestionSearchTextField';
import QuestionList from '../components/QuestionList';

class QuestionLogScreen extends React.Component {

  static navigatorButtons = {
    rightButtons:[
      {
        id: 'Write',
        disabled: true,
        disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonFontSize: 16,
        buttonFontWight: '600',
      },
      {
        icon: require('../../img/checkbox-pen-outline.png'),
        id: 'write'
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
      <View>
        <QuestionSearchTextField />
        <View style={styles.container}>
          <QuestionList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default QuestionLogScreen;