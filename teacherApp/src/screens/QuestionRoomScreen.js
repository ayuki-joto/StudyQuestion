import React from 'react';
import {Platform, StyleSheet, Text, View, Image, ListView, TouchableOpacity} from 'react-native';

class QuestionRoomScreen extends React.Component {

  static navigatorStyle = {
    tabBarHidden: true
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        question: {'subject':'国語','question':'日本語が難しい。'},
        answer: ds.cloneWithRows([
            {'teacher':'上東先生','answer':'Railsは嫌い'}, 
            {'teacher':'牛島先生','answer':'Bootstrampにドハマリ'},
        ])
    }
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
        <View style={styles.container}>
        <View style={styles.renderRow_container}>
            <View style={styles.containers}>
                <Image source={require('../../img/teacher.png')} style={styles.subjectView}/>
            </View>
            <View style={styles.rightContent}>
                <Text>{rowData.teacher}</Text>
                <Text>解答内容 {rowData.answer}</Text>
            </View>
        </View>
            <TouchableOpacity onPress={()=>{console.log("best!!")}} style={{}}>
                <Text style={styles.bestAnswer}>ベストアンサー</Text>
            </TouchableOpacity>
        </View>
      );
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
        <View style={styles.renderRow_container}>
            <View style={this.setColor(this.state.question.subject)}>
                <Text style={styles.subject}>{this.state.question.subject[0]}</Text>
            </View>
            <View style={styles.rightContent}>
                <Text style={styles.questionText}>質問内容　{this.state.question.question}</Text>
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
        <Image source={require('../../img/picture.png')} style={styles.image}/>
        </View>
        </View>
        <ListView 
            dataSource = {this.state.answer}
            renderRow = {this.renderRow.bind(this)}
        />
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
  }, rightContent: {
    padding: 10,
  }, renderRow_container: {
    flexDirection: 'row',
  }, container: {
    padding: 10,
    borderWidth: 1, 
    borderColor: '#000000', 
  },image: {
    backgroundColor : "#5E6977",
    padding: 10,
    margin: 10, 
  },bestAnswer: {
      color: '#eacd56',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#eacd56',
      textAlign: 'center',
      padding: 3, 
      width: 150, 
      margin: 3, 
      marginLeft: 200,
  }
});

export default QuestionRoomScreen;