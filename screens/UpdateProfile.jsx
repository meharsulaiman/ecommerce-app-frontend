import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from '../styles/styles';

const UpdateProfile = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const loading = false;

  const submitHandler = () => {
    alert('Yeah');
  };

  const disableBtn =
    !name || !email || !address || !city || !country || !pinCode;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Edit Profile</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View>
          <TextInput
            {...inputOptions}
            placeholder='Name'
            value={name}
            onChangeText={setName}
          />
          <TextInput
            {...inputOptions}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
          />
          <TextInput
            {...inputOptions}
            placeholder='Address'
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            {...inputOptions}
            placeholder='City'
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            {...inputOptions}
            placeholder='Country'
            value={country}
            onChangeText={setCountry}
          />

          <TextInput
            {...inputOptions}
            placeholder='Pin Code'
            value={pinCode}
            onChangeText={setPinCode}
          />

          <Button
            style={styles.btn}
            textColor={colors.color2}
            disabled={disableBtn}
            onPress={submitHandler}
            loading={loading}
          >
            Update
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },

  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 5,
  },
  or: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '100',
    color: colors.color2,
  },
  link: {
    color: colors.color2,
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
    textTransform: 'uppercase',
  },
});

export default UpdateProfile;
