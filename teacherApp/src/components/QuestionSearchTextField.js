import React from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons';

class QuestionSearchTextField extends React.Component<{}> {

    searchQuestion (text) {
        console.log(text);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.textinput}
                    placeholder="🔍 教科や単元、キーワードなど"
                    placeholderTextColor='#a3a3a3'
                    onChangeText={(searchText)=>{this.searchQuestion(searchText)}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#224BA7',
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }, 
    textinput: {
        flex: 1,
        backgroundColor: '#112656', 
        color: '#a3a3a3',
        textAlign: 'left',
        fontSize: 10,
        padding: 10, 
    },
});

export default QuestionSearchTextField;