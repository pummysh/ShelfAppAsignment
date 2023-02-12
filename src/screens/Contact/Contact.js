import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import Header from '../../component/Header';
import {setGroupData} from '../../redux/actions/groupAction';

const Contact = ({navigation, route}) => {
  const contacts = route.params.data;
  const [selectContact, setSelectContact] = useState([]);
  const [filterContact, setFilterContact] = useState(contacts);
  const [text, setText] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = contact => {
    const isContactAvailable = selectContact.find(
      e => e.displayName === contact.displayName,
    );
    !isContactAvailable && setSelectContact([...selectContact, contact]);
  };

  const removeSelectContact = contact => {
    const updateSelectContact = selectContact.filter(
      e => e.displayName !== contact.displayName,
    );
    setSelectContact(updateSelectContact);
  };

  const saveGroup = () => {
    const payload = selectContact;
    dispatch(setGroupData(payload));
    navigation.navigate('Group');
  };

  const findContact = () => {
    console.log(text, 'text');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        title="Select Contact"
        enableBack={true}
        onBackPress={() => navigation.goBack()}
      />
      {selectContact && (
        <View>
          <FlatList
            data={selectContact}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingHorizontal: 16, marginTop: 8}}
            ItemSeparatorComponent={() => (
              <View style={{width: 8, height: 8}} />
            )}
            renderItem={({item, index}) => {
              console.log(item, 'contact');
              return (
                <TouchableOpacity onPress={() => removeSelectContact(item)}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 65,
                      width: 65,
                      height: 65,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth:StyleSheet.hairlineWidth
                    }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      {item?.displayName[0] + item?.displayName[1]}
                    </Text>
                    <View style={{position: 'absolute', left: 45, top: 45}}>
                      <Image
                        source={{
                          uri: 'https://img.icons8.com/ios/2x/cancel.png',
                        }}
                        style={{width: 20, height: 20}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
      {selectContact.length >= 2 && (
        <View style={{margin:10}}>
          <Button title="Save Group" onPress={saveGroup}  />
        </View>
      )}
      <ScrollView style={{margin: 10}}>
        {contacts.map((contact, index) => (
          <TouchableOpacity
            onPress={() => handleSelect(contact)}
            key={index}
            delayPressIn={80}>
            <View
              style={{
                padding: 20,
                backgroundColor: '#B097C7',
                marginBottom: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: 'black'}}>{contact.displayName}</Text>
              <Text>{contact.phoneNumbers[0]?.number}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Contact;
