import React from 'react';
import {Platform, StyleSheet,Dimensions, ListView, View, Text, TouchableOpacity,} from 'react-native';
import QuestionSearchTextField from '../components/QuestionSearchTextField';

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
        id: 'write',
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

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.itemWidth = Dimensions.get('window').width
    this.itemHeight = Dimensions.get('window').height
    this.state = {
      dataSource: ds.cloneWithRows([
          {'subject':'国語', 'question':'どのように質問を書くかがわからない。', 'id':'0'},
          {'subject':'数学', 'question':'forの二重ループがわからん。', 'id':'0'},
          {'subject':'英語', 'question':'I cannot implmenent application completlity. ', 'id':'0'}, 
          {'subject':'理科', 'question':'弾道計算ができません。助けて。', 'id':'0'},
          {'subject':'社会', 'question':'徳川なんでしたっけ？', 'id':'0'}]), 
    };
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
    if(event.type === 'NavBarButtonPress') {
      if( event.id == 'write' ){
        this.props.navigator.push({
          screen: 'studyquestion.Submission',
          title: '質問内容を入力',
        });
      }
    }
  }

  onPressed(id) {
    this.props.navigator.push({
      screen: 'studyquestion.Room',
      title: '質問ルーム',
      passProps: {
        id : id
      }
    })
  }

  setColor(subjectText){
    let color = subjectText === '国語' ? '#f39aa1' : 
                  subjectText === '数学' ? '#859ecc' :
                  subjectText === '英語' ? '#fee032' :
                  subjectText === '理科' ? '#9ac03f' :
                  subjectText === '社会' ? '#ffb02e' : '#99db81';
    return ({
      borderRadius: 30,
      backgroundColor : color,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center', 
      margin: 2,
    });
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity style={styles.opacity} 
        onPress={()=>{this.onPressed(rowData.id)}}>
        <View style={styles.renderRow_container}>
          <View style={this.setColor(rowData.subject)}>
            <Text style={styles.subject}>{rowData.subject[0]}</Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.questionText}>質問内容　{rowData.question}</Text>
            <Text style={styles.answerText}>ベストアンサー: 未選択　回答数: 1件</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

  render() {
    return (
      <View>
        <QuestionSearchTextField />
        <View style={styles.container}>
          <ListView
            style={{height: this.itemHeight}}
            dataSource = {this.state.dataSource}
            renderRow = {this.renderRow.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  subjectView : {
    borderRadius: 30,
    backgroundColor : "#99db81",
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center', 
    margin: 2,
  },
  subject: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff', 
    textAlign: 'left',
  },
  opacity: {
    padding: 10,
    borderWidth: 1, 
    borderColor: '#000000', 
  },
  renderRow_container: {
    flexDirection: 'row',
  },
  rightContent: {
    padding: 10,
  },
  answerText: {
    padding: 10,
  },
});

export default QuestionLogScreen;