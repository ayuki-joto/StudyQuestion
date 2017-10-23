import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

class UserInfo extends React.Component<{}> {

    render() {
        return (
          <View style={{ borderRadius: 30, borderWidth: 5, padding: 10, borderColor: '#003a66', margin: 5, width: 250, height: 250, justifyContent: 'center',alignItems: 'center'}}>
              <Image source={require('../../img/teacher.png')} style={{}} />
              <Text>ひろゆき</Text>
              <Text>学校　静岡県立掛川工業高等学校</Text>
              <Text>学年　1年生</Text>
              <Text>志望校　国立東京大学</Text>
          </View>
        );
    }
}

export default UserInfo;