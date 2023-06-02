import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import Heading from '../components/Heading';
import { Button, RadioButton } from 'react-native-paper';

const isAuthenticated = true;

const Payment = ({ navigation, route }) => {
  const redirectToLogin = () => {};
  const codHandler = () => {};
  const onlineHandler = () => {
    navigation.navigate('login');
  };

  const [paymentMethod, setPaymentMethod] = useState('COD');
  console.log(paymentMethod);
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        text1={'Payment'}
        text2={'Method'}
        containerStyle={{ paddingTop: 70 }}
      />
      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Cash On Delivery</Text>
            <RadioButton color={colors.color1} value='COD' />
          </View>

          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>online</Text>
            <RadioButton color={colors.color1} value='ONLINE' />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : paymentMethod === 'COD'
            ? codHandler
            : onlineHandler
        }
      >
        <Button
          textColor={colors.color2}
          icon={
            paymentMethod === 'COD' ? 'check-circle' : 'circle-multiple-outline'
          }
        >
          {paymentMethod === 'COD' ? 'Place Order' : 'Pay'}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: 'center',
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'uppercase',
    color: colors.color2,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});

export default Payment;
