import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../styles/styles';
import { Button } from 'react-native-paper';

const OrderItem = ({
  id,
  price,
  address,
  orderOn,
  status,
  paymentMethod,
  updateHandler,
  admin = false,
  loading,
  index = 0,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: index % 2 === 0 ? colors.color2 : colors.color3,
      }}
    >
      <Text
        style={{
          ...styles.text,
          backgroundColor: index % 2 === 0 ? colors.color3 : colors.color1,
        }}
      >
        ID - #{id}
      </Text>

      <TextBox title={'Address'} value={address} index={index} />
      <TextBox title={'Ordered On'} value={orderOn} index={index} />
      <TextBox title={'Price'} value={`$${price}`} index={index} />
      <TextBox title={'Status'} value={status} index={index} />
      <TextBox title={'Payment Method'} value={paymentMethod} index={index} />

      {admin && (
        <Button
          textColor={index % 2 === 0 ? colors.color2 : colors.color3}
          icon={'update'}
          mode='contained'
          style={{
            width: 120,
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: index % 2 === 0 ? colors.color3 : colors.color2,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      )}
    </View>
  );
};

const TextBox = ({ title, value, index }) => (
  <Text
    style={{
      marginVertical: 6,
      color: index === 0 ? colors.color3 : colors.color2,
    }}
  >
    <Text style={{ fontWeight: '900' }}>{title} - </Text>
    {value}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: '900',
    marginHorizontal: -20,
    marginTop: -20,
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default OrderItem;
