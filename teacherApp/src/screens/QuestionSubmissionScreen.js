/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ImageUploadButton from '../components/ImageUploadButton';

class QuestionSubmissionScreen extends React.Component<{}> {

  static navigatorButtons = {
    rightButtons:[
      {
        id: 'Write',
        title: '質問する',
        disabled: true,
        disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonFontSize: 16,
        buttonFontWight: '600',
      },
      {
        id: 'write',
      }
    ],
  };

  static navigatorStyle = {
    tabBarHidden: true
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageUploadButton />
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
});

export default QuestionSubmissionScreen;