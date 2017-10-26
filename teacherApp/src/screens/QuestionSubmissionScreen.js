import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ImageUploadButton from '../components/ImageUploadButton';
import SubjectSelection from '../components/SubjectSelection';
import QuestionTextArea from '../components/QuestionTextArea';

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
        id: 'submit',
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
        <View style={styles.container}>
          <SubjectSelection />
          <QuestionTextArea />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default QuestionSubmissionScreen;