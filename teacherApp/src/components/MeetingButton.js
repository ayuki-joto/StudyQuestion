import React from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class MeetingButton extends React.Component<{}> {
    render(){
        return (
            <View>
            <TouchableOpacity
            onPress={() => '/'}
            style={styles.opeacity}
            >
                <Image source={require('../../img/enter.png')} />
                <Text style={styles.mendan_text}>面談室に入る</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    opeacity: {
        borderRadius: 30, 
        overflow: 'hidden',
        backgroundColor: '#ffa500',
        width: 300,
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        padding: 10,
    }, 
    mendan_text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default MeetingButton;