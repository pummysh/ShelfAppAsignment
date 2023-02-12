import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import {FlatList} from 'react-native-gesture-handler';
import {deals} from './constant';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title={'Home'} />

      <View
        style={{
          width: '90%',
          marginVertical: 16,
          height: 250,
          backgroundColor: '#00334d',
          alignSelf: 'center',
          borderRadius: 10,
        }}></View>
      <View>
        <FlatList
          data={deals}
          showsHorizontalScrollIndicator={false}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 8, height: 8}} />}
          style={{paddingHorizontal: 16, marginTop: 8,marginRight:10}}
          renderItem={({item}) => {
            const {companyName, offer, timeLeft, icon} = item;
            return (
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderWidth: 1,
                  height: 150,
                  borderRadius:10
                }}>
                <Image
                  style={{width: 60, height: 60}}
                  source={{
                    uri: icon,
                  }}
                />
                <Text>{companyName}</Text>
                <Text>{offer}</Text>
                <Text>{timeLeft}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default Home;
