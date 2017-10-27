import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ImageUploadButton from '../components/ImageUploadButton';
import SubjectSelection from '../components/SubjectSelection';
import QuestionTextArea from '../components/QuestionTextArea';
import SubmitButton from '../components/SubmitButton';

class QuestionSubmissionScreen extends React.Component<{}> {

  static navigatorButtons = {
    rightButtons:[
      {
        id: 'submit',
        title: '質問する',
        disabled: true,
        disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonFontSize: 16,
        buttonFontWight: '600',
      },
      {
        id: 'submit',
        icon: require('../../img/boy.png'),

      }
    ],
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if(event.type === 'NavBarButtonPress') {
      if( event.id === 'submit' ){
        console.log("ddd");
      }
    }
  }

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