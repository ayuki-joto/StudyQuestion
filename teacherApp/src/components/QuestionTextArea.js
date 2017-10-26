import React from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons';

class QuestionTextArea extends React.Component<{}> {

    selectSubject(text) {
        console.log(text);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.textinput}
                    placeholder='内容&#13;&#10;例）人生に悩んでいます。&#13;&#10;働くたくないのです。&#13;&#10;でも、お金を稼ぎたい。&#13;&#10;では、どうしたらいいの？&#13;&#10;'
                    placeholderTextColor='#a3a3a3'
                    onChangeText={(subject)=>{this.selectSubject(subject)}}
                    multiline = {true}
                    numberOfLines = {7}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#a3a3a3',
        margin: 20,
    }, 
    textinput: {
        flex: 1,
        color: '#a3a3a3',
        textAlign: 'left',
        fontSize: 16,
        padding: 10,
    },
});

export default QuestionTextArea;