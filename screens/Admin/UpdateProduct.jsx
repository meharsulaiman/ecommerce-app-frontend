import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyle,
} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { Button, TextInput } from 'react-native-paper';
import SelectComponent from '../../components/SelectComponent';

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const images = [
    {
      _id: 'hdfksajfg',
      url: 'https://assets.sutori.com/user-uploads/image/d2b2b74d-8c49-4089-b709-27b4ef8afb26/17a21af7c77dda3c92f78a623a49274c.jpeg',
    },
    {
      _id: 'afhaldjfg',
      url: 'https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_1280.jpg',
    },
  ];

  const [id] = useState(route.params.id);
  const [name, setName] = useState('');
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
          <Text style={formHeading}>Update Product</Text>
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
              <Button
                textColor={colors.color1}
                onPress={() =>
                  navigation.navigate('productimages', {
                    id,
                    images,
                  })
                }
              >
                Manage Images
              </Button>

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
                onChangeText={setPrice}
                keyboardType='number-pad'
              />
              <TextInput
                {...inputOptions}
                placeholder='Stock'
                keyboardType='number-pad'
                value={stock}
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
                loading={loadingOther}
                disabled={loadingOther}
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
              >
                Update
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

export default UpdateProduct;
