import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
  inputOptions,
} from '../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const Signup = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const loading = false;

  const submitHandler = () => {
    alert('Yeah');
    // Remove in the future
    navigation.navigate('verify');
  };

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  useEffect(() => {
    if (route.params?.image) setAvatar(route.params?.image);
  }, [route.params]);
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Sign Up</Text>
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
          <View style={{ minHeight: 900 }}>
            <Avatar.Image
              style={{ alignSelf: 'center', backgroundColor: colors.color1 }}
              size={80}
              source={{ uri: avatar ? avatar : defaultImg }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('camera')}>
              <Button textColor={colors.color2}>Change Photo</Button>
            </TouchableOpacity>

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
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
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
              Sign Up
            </Button>

            <Text style={styles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('login')}
            >
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer activeRoute='profile' />
    </>
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

export default Signup;
