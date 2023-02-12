import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {ImagePath} from '../assets/Images/ImagePath';

const Header = ({title, enableBack,onBackPress}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor:"#FAFAFA",padding:8}}>
        {enableBack && (
          <TouchableOpacity style={{flex: 0.5,}} onPress={onBackPress}><Image source={ImagePath.backIcon} style={{width: 45, height: 45}} /></TouchableOpacity>
        )}
  
        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{fontSize:19,color:"black",fontWeight:"bold"}}>{title}</Text>
        </View>

        {enableBack && <View style={{flex:0.5}}></View>}
      </View>
    );
  };
  
const styles = StyleSheet.create({});
export default Header;
