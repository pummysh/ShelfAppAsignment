import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import { useSelector } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export const Group = ({navigation}) => {
  const {groupData}=useSelector(state=>state.groupReducer)
 
  return (
    <View style={{backgroundColor:"white",flex:1}}>
        <Header title='Group' enableBack={true} onBackPress={()=>navigation.navigate("ContactDetails")}/>
      <ScrollView>
      {groupData.map((e,index) => (
        <View  style={{padding:8,maxHeight:150,backgroundColor:"#98AFC7",margin:8}}>
          <Text style={{fontSize:16,fontWeight:"bold"}}>Group {index+1}</Text>
          <Text style={{fontSize:16,fontWeight:"bold"}}>All Group Members:-</Text>
          <FlatList data={e} renderItem={({item})=><View>
            <Text style={{fontSize:14}}>{item.displayName}</Text>
          </View>}/>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};
