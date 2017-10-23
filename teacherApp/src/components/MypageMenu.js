import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

class MypageMenu extends React.Component<{}> {

    render() {
        return (
          <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={() => '/'} 
            style={{ margin: 5, width: this.itemWidth, borderRadius: 2, overflow: 'hidden' }}
            >
            <Image source={require('../../img/teacher.png')} />
            <Text>面談メンター</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => '/'} 
            style={{ margin: 5, width: this.itemWidth,  borderRadius: 2, overflow: 'hidden' }}
            >
            <Image source={require('../../img/calendar-with-a-clock-time-tools.png')}  />
            <Text>スケジュール</Text>
          </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={() => '/'} 
            style={{ margin: 5, width: this.itemWidth, borderRadius: 2, overflow: 'hidden' }}
            >
            <Image source={require('../../img/wallet.png')} />
            <Text>支払い履歴</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => '/'} 
            style={{ margin: 5, width: this.itemWidth,  borderRadius: 2, overflow: 'hidden' }}
            >
            <Image source={require('../../img/on-time-support.png')}  />
            <Text>通話履歴</Text>
          </TouchableOpacity>
          </View>
          </View>
        );
    }
}

export default MypageMenu;