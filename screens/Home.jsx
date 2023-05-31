import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const categories = [
  { category: 'jeans', _id: 1 },
  { category: 'pants', _id: 2 },
  { category: 'cap', _id: 3 },
  { category: 'shirts', _id: 4 },
  { category: 'shirts', _id: 5 },
  { category: 'shirts', _id: 6 },
  { category: 'shirts', _id: 7 },
  { category: 'shirts', _id: 8 },
];
const products = [
  {
    _id: 1,
    name: 'Sample',
    price: 1999,
    stock: 12,
    images: [
      {
        url: 'https://assets.sutori.com/user-uploads/image/d2b2b74d-8c49-4089-b709-27b4ef8afb26/17a21af7c77dda3c92f78a623a49274c.jpeg',
      },
    ],
  },
  {
    _id: 2,
    name: 'MacBook',
    price: 1999,
    stock: 12,
    images: [
      {
        url: 'https://assets.sutori.com/user-uploads/image/d2b2b74d-8c49-4089-b709-27b4ef8afb26/17a21af7c77dda3c92f78a623a49274c.jpeg',
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id, stock) => {
    console.log('add to cart', id, stock);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={{ ...defaultStyle, flex: 1 }}>
        {/* Header */}
        <Header />

        {/* Heading row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Main Heading */}
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
          </View>

          {/* Searchbar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={'magnify'}
                color='gray'
                size={50}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View
          style={{
            flexDirection: 'row',
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : 'gray',
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                key={item._id}
                id={item._id}
                i={index}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                navigate={navigate}
                stock={item.stock}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={'home'} />
    </>
  );
};

export default Home;
