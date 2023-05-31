import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
const Header = ({ back, emptyCart = false }) => {
  const navigate = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => {
    console.log('Empty Cart');
  };
  return (
    <>
      {back && (
        <TouchableOpacity
          style={{ position: 'absolute', left: 20, top: 40, zIndex: 10 }}
          onPress={() => {
            navigate.goBack();
          }}
        >
          <Avatar.Icon
            icon={'arrow-left'}
            style={{ backgroundColor: colors.color4 }}
            color={
              route.name === 'productdetails' ? colors.color2 : colors.color3
            }
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{ position: 'absolute', right: 20, top: 40, zIndex: 10 }}
        onPress={emptyCart ? emptyCartHandler : () => navigate.navigate('cart')}
      >
        <Avatar.Icon
          icon={emptyCart ? 'delete-outline' : 'cart-outline'}
          style={{ backgroundColor: colors.color4 }}
          color={
            route.name === 'productdetails' ? colors.color2 : colors.color3
          }
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;
