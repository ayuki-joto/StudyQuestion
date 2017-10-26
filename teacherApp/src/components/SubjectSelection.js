import React from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons';

class QuestionSearchTextField extends React.Component<{}> {

    selectSubject(text) {
        console.log(text);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.textinput}
                    placeholder="▼科目"
                    placeholderTextColor='#a3a3a3'
                    onChangeText={(subject)=>{this.selectSubject(subject)}}
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

export default QuestionSearchTextField;