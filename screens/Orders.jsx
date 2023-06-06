import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { colors, defaultStyle, formHeading } from '../styles/styles';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { Headline } from 'react-native-paper';
import OrderItem from '../components/OrderItem';

const orders = [
  {
    _id: 1,
    shippingInfo: {
      address: 'address address',
      city: 'new York',
      country: 'United States',
      pinCode: '123',
    },
    createdAt: '2015-01-01T00:00:00',
    orderStatus: 'processing',
    paymentMethod: 'COD',
    totalAmount: 2099,
  },
  {
    _id: 2,
    shippingInfo: {
      address: 'address address',
      city: 'new York',
      country: 'United States',
      pinCode: '123',
    },
    createdAt: '2015-01-01T00:00:00',
    orderStatus: 'processing',
    paymentMethod: 'COD',
    totalAmount: 5099,
  },
];

const Orders = () => {
  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  index={index}
                  id={item._id}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderOn={item.createdAt.split('T')[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: 'center' }}>No Order Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
