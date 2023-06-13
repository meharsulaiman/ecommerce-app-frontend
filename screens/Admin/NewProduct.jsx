import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyle,
} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { Avatar, Button, TextInput } from 'react-native-paper';
import SelectComponent from '../../components/SelectComponent';

const NewProduct = ({ navigation, route }) => {
  const loading = false;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Laptop');
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };

  useEffect(() => {
    if (route.params?.image) setImage(route.params?.image);
  }, [route.params]);

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
        }}
      >
        <Header back={true} />
        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                height: 650,
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: 'center',
                  marginBottom: 20,
                }}
              >
                <Avatar.Image
                  size={80}
                  style={{ backgroundColor: colors.color1 }}
                  source={{
                    uri: image ? image : null,
                  }}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('camera', { newProduct: true })
                  }
                >
                  <Avatar.Icon
                    icon={'camera'}
                    size={30}
                    color={colors.color3}
                    style={{
                      backgroundColor: colors.color2,
                      position: 'absolute',
                      bottom: 0,
                      right: -5,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                {...inputOptions}
                placeholder='Name'
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder='Description'
                value={description}
                onChangeText={setDescription}
              />
              <TextInput
                {...inputOptions}
                placeholder='Price'
                value={price}
                keyboardType='number-pad'
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder='Stock'
                value={stock}
                keyboardType='number-pad'
                onChangeText={setStock}
              />

              <Text
                style={{
                  ...inputStyle,
                  textAlign: 'center',
                  borderRadius: 3,
                  textAlignVertical: 'center',
                }}
                onPress={() => setVisible(true)}
              >
                {category}
              </Text>

              <Button
                onPress={submitHandler}
                loading={loading}
                disabled={loading}
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
              >
                Create
              </Button>
            </View>
          </ScrollView>
        )}
      </View>
      <SelectComponent
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
      />
    </>
  );
};

export default NewProduct;
