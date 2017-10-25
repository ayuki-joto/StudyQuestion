import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

class MypageMenu extends React.Component<{}> {

    render() {
        return (
          <View>
          <View style={styles.container}>
          <TouchableOpacity 
            onPress={() => '/'} 
            style={styles.opeacity}
            >
            <View style={styles.menu}>
              <Image source={require('../../img/teacher.png')} />
              <Text style={styles.menu_text}>担当メンター</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => '/'} 
            style={styles.opeacity}
            >
            <View style={styles.menu}>
              <Image source={require('../../img/calendar-with-a-clock-time-tools.png')}  />
              <Text style={styles.menu_text}>スケジュール</Text>
            </View>
          </TouchableOpacity>
          </View>

          <View style={styles.container}>
          <TouchableOpacity 
            onPress={() => '/'} 
            style={styles.opeacity}
            >
            <View style={styles.menu}>
              <Image source={require('../../img/wallet.png')} />
              <Text style={styles.menu_text}>支払い情報</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => '/'} 
            style={styles.opeacity}
            >
            <View sytle={styles.menu}>
              <Image source={require('../../img/on-time-support.png')}  />
              <Text style={styles.menu_text}>通話履歴</Text>
            </View>
          </TouchableOpacity>
          </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  opeacity: {
    margin: 5, 
    borderRadius: 2, 
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu_text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#224BA7',
    margin: 5,
  },
});

export default MypageMenu;