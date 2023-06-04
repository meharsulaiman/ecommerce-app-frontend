import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import Heading from '../components/Heading';
import { colors, defaultStyle } from '../styles/styles';
import { Button } from 'react-native-paper';
import CartItem from '../components/CartItem';
import { useNavigation } from '@react-navigation/native';

export const cartItems = [
  {
    name: 'Item 1',
    image:
      'https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_1280.jpg',
    product: 1, //id
    stock: 5,
    price: 1999,
    quantity: 5,
  },
  {
    name: 'Item 2',
    image:
      'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
    product: 2, //id
    stock: 5,
    price: 2999,
    quantity: 10,
  },
  {
    name: 'Item 2',
    image:
      'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
    product: 3, //id
    stock: 5,
    price: 2999,
    quantity: 10,
  },
  {
    name: 'Item 2',
    image:
      'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
    product: 4, //id
    stock: 5,
    price: 2999,
    quantity: 10,
  },
  {
    name: 'Item 2',
    image:
      'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
    product: 5, //id
    stock: 5,
    price: 2999,
    quantity: 10,
  },
  {
    name: 'Item 2',
    image:
      'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
    product: 6, //id
    stock: 5,
    price: 2999,
    quantity: 10,
  },
  {
    name: 'Item 2',
    image:
      'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
    product: 7, //id
    stock: 5,
    price: 2999,
    quantity: 10,
  },
  {
    name: 'Item 2',
    image:
      'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
    product: 8, //id
    stock: 5,
    price: 2999,
    quantity: 10,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, quantity, stock) => {
    console.log('incrementHandler', id, quantity, stock);
  };
  const decrementHandler = (id, quantity) => {
    console.log('decrementHandler', id, quantity);
  };

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      <Header emptyCart={true} back={true} />
      {/* Heading  */}
      <Heading
        text1={'Shopping'}
        text2={'Cart'}
        containerStyle={{ marginLeft: 35, paddingTop: 70 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item, index) => (
            <CartItem
              navigate={navigate}
              key={item.product}
              id={item.product}
              name={item.name}
              stock={item.stock}
              price={item.price}
              imgSrc={item.image}
              index={index}
              quantity={item.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.color3,
          borderRadius: 100,
          padding: 5,
          margin: 30,
        }}
        activeOpacity={0.9}
        onPress={
          cartItems.length > 0 ? () => navigate.navigate('confirmorder') : null
        }
      >
        <Button textColor={colors.color2} icon={'cart'}>
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
