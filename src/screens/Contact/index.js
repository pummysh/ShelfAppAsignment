import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  ScrollView,
  Button,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Header from '../../component/Header';

const ContactScreen = ({navigation}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const requestContactPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          retrieveContacts();
        } else {
          console.log('Contacts permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestContactPermission();
  }, []);

  const retrieveContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.warn('Permission to access contacts was denied');
      } else {
        setContacts(contacts);
      }
    });
  };

  return (
    <View>
      <Header title="Contact" />
      <View style={{margin:10}}><Button title='Create Group' style={{margin: 10}} onPress={()=>navigation.navigate("Contact",{data:contacts})}/></View>
    <View style={{margin:10}}>
    <Button title='All Group'  onPress={()=>navigation.navigate("Group")}/>
    </View>
      
      <ScrollView style={{margin: 10,marginBottom:60}}>
        {contacts.map((contact, index) => (
            <View
              style={{
                padding: 20,
                backgroundColor: 'white',
                marginBottom: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: 'black'}}>{contact.displayName}</Text>
              <Text>{contact.phoneNumbers[0]?.number}</Text>
            </View>
        
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactScreen;
