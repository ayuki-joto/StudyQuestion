import React from 'react';
import {StyleSheet, Dimensions, ListView, View, Text, TouchableOpacity, } from 'react-native';

class QuestionList extends React.Component <{}>{

    constructor(){
        super();
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


    renderRow(rowData) {
        return (
                <TouchableOpacity style={styles.opacity} onPress={()=>{}}>
                    <View style={styles.container}>
                        <View style={styles.subjectView}>
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

    render () {
        return (
            <ListView
                style={{height: this.itemHeight}}
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow}
            />
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
    container: {
        flexDirection: 'row',
    },
    rightContent: {
        padding: 10,
    },
    answerText: {
        padding: 10,
    },
    japanese : {
        borderRadius: 30,
        backgroundColor : "#fcb2ff",
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center', 
        margin: 2,
    },
});

export default QuestionList;