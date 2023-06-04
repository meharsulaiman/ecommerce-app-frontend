import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const loading = false;

  const submitHandler = () => {
    alert('Yeah');
    // Remove in the future
    navigation.navigate('verify');
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Forget Password</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
          />

          <Button
            style={styles.btn}
            textColor={colors.color2}
            disabled={email === ''}
            onPress={submitHandler}
            loading={loading}
          >
            Send OTP
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={styles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
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

export default ForgetPassword;
