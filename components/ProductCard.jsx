import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../styles/styles';
import { Button } from 'react-native-paper';

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCartHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('productdetails', { id })}
      activeOpacity={1}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
            position: 'absolute',
            left: 50,
            top: 105,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            width: '100%',
            // alignItems: 'center',
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: '300',
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            ${price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            width: '100%',
            borderBottomEndRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <Button
            textColor={i % 2 === 0 ? colors.color1 : colors.color2}
            onPress={() => addToCartHandler(id, stock)}
          >
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
