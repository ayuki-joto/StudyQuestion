import React from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class ImageUploadButton extends React.Component<{}> {
    render(){
        return (
            <View>
            <TouchableOpacity
            onPress={() => '/'}
            style={styles.opeacity}
            >
                <Image source={require('../../img/photo-camera.png')} />
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    opeacity: {
        borderRadius: 10, 
        overflow: 'hidden',
        borderWidth: 3, 
        borderColor: '#a3a3a3',
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        padding: 30,
        marginTop: 30, 
    }, 
});

export default ImageUploadButton;