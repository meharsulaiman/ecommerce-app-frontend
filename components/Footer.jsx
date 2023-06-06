import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper';

const avtarOptions = {
  color: colors.color2,
  size: 50,
  style: {
    backgroundColor: colors.color1,
  },
};

const Footer = ({ activeRoute = 'home' }) => {
  const navigate = useNavigation();
  const isAuthenticated = true;
  const loading = false;

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate('home');
        break;
      case 1:
        navigate.navigate('cart');
        break;
      case 2:
        if (isAuthenticated) navigate.navigate('profile');
        else navigate.navigate('login');
        break;

      default:
        navigate.navigate('home');
        break;
    }
  };
  return (
    loading === false && (
      <View
        style={{
          backgroundColor: colors.color1,
          borderTopLeftRadius: 120,
          borderTopRightRadius: 120,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(1)}
          >
            <Avatar.Icon
              {...avtarOptions}
              icon={activeRoute === 'cart' ? 'shopping' : 'shopping-outline'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(2)}
          >
            <Avatar.Icon
              {...avtarOptions}
              icon={
                isAuthenticated === false
                  ? 'login'
                  : activeRoute === 'profile'
                  ? 'account'
                  : 'account-outline'
              }
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            width: 80,
            height: 80,
            backgroundColor: colors.color2,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: -50,
            alignSelf: 'center',
          }}
        >
          <View
            style={{
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigationHandler(0)}
            >
              <Avatar.Icon
                {...avtarOptions}
                icon={activeRoute === 'home' ? 'home' : 'home-outline'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

export default Footer;
