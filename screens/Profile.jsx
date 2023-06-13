import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, defaultStyle, formHeading } from '../styles/styles';
import { Avatar, Button } from 'react-native-paper';
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const user = {
  name: 'John',
  email: 'john@example.com',
};

const logoutHandler = () => {
  console.log('sign out');
};

const Profile = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState(null);
  const loading = false;

  const navigateHandler = (text) => {
    switch (text) {
      case 'Admin':
        navigation.navigate('adminpanel');
        break;
      case 'Orders':
        navigation.navigate('orders');
        break;
      case 'Profile':
        navigation.navigate('updateprofile');
        break;
      case 'Password':
        navigation.navigate('changepassword');
        break;
      case 'Sign Out':
        logoutHandler();
        break;

      default:
        navigation.navigate('orders');
        break;
    }
  };
  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params?.image);
    }
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

        {/* Loading */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={100}
                style={{ backgroundColor: colors.color1 }}
              />

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('camera', { updateProfile: true })
                }
              >
                <Button textColor={colors.color2}>Change Photo</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: '300',
                  color: colors.color2,
                }}
              >
                {user?.email}
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-between',
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={'Orders'}
                  icon={'format-list-bulleted-square'}
                />
                <ButtonBox
                  handler={navigateHandler}
                  icon={'view-dashboard'}
                  text={'Admin'}
                  reverse={true}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Profile'}
                  icon={'pencil'}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-evenly',
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={'Password'}
                  icon={'pencil'}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Sign Out'}
                  icon={'exit-to-app'}
                />
              </View>
            </View>
          </>
        )}
      </View>

      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
