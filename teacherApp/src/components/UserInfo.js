import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

class UserInfo extends React.Component<{}> {

    render() {
        return (
          <View style={styles.container}>
              <Image source={require('../../img/boy.png')} style={styles.image} />
              <Text style={styles.name}>まさ</Text>
              <View style={{justifyContent: 'space-around'}}>
              <Text>学校　私立○○高等学校</Text>
              <Text>学年　　　1年生</Text>
              <Text>志望校　慶應義塾大学</Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container : { 
        borderRadius: 30, 
        borderWidth: 3, 
        padding: 10, 
        borderColor: '#224BA7', 
        margin: 5, 
        width: 250, 
        height: 250, 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    image: {
        backgroundColor : "#99db81",
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    name : {
        fontSize: 24,
        textAlign: 'center',
        color: '#224BA7',
        margin: 5,
        fontWeight: 'bold',
    }
});

export default UserInfo;