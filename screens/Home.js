import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

import api from '../services/api';

const Home = ({navigation}) => {

  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   api.get('restaurants').then(response => {
  //     console.log(response.data);
  //     setRestaurants(response.data);
  //   });

  // }, []);

  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "Amélia Rodrigues",
    gps: {
        latitude: -23.42539914052051,
        longitude: -46.43180423147537
    }
  }

  const categoryData = [
      {
          id: 1,
          name: "Burgers",
          icon: icons.hamburger,
      },
      {
          id: 2,
          name: "Massas",
          icon: icons.noodle,
      },
      {
          id: 3,
          name: "Oriental",
          icon: icons.sushi,
      },
      {
          id: 4,
          name: "Drinks",
          icon: icons.drink,
      },
      {
          id: 5,
          name: "Refeição",
          icon: icons.rice_bowl,
      },
      {
          id: 6,
          name: "Pizza",
          icon: icons.pizza,
      },
      {
          id: 7,
          name: "Petiscos",
          icon: icons.fries,
      },
      {
          id: 8,
          name: "Lanches",
          icon: icons.hotdog,
      },
      {
          id: 9,
          name: "Doces",
          icon: icons.donut,
      },
      {
          id: 10,
          name: "Saladas",
          icon: icons.salad,
      },

  ]

  // price rating
  const cheap = 1
  const fair = 2
  const expensive = 3

  const restaurantData = [
      {
          id: 1,
          name: "SEVEN Burger",
          rating: 5,
          categories: [1, 7],
          priceRating: cheap,
          photo: images.burger_restaurant_1,
          duration: "40 - 55 min",
          location: {
              latitude: -23.427303268992986,
              longitude: -46.43229729660534,
          },
          courier: {
              avatar: images.avatar_1,
              name: "Renata"
          },
          menu: [
              {
                  menuId: 1,
                  name: "Cheddar Bacon",
                  photo: images.crispy_chicken_burger,
                  description: "Hambúrguer 180g, cheddar e bacon",
                  calories: 300,
                  price: 18
              },
              {
                  menuId: 2,
                  name: "Clássico SEVEN",
                  photo: images.honey_mustard_chicken_burger,
                  description: "Hambúrguer 180g, mussarela, alface e tomate",
                  calories: 232,
                  price: 10
              },
              {
                  menuId: 3,
                  name: "Super Fritas",
                  photo: images.baked_fries,
                  description: "Batata frita com páprica",
                  calories: 186,
                  price: 7
              }
          ]
      },
      {
          id: 2,
          name: "Pizzaria do Chefe",
          rating: 4.2,
          categories: [6],
          priceRating: fair,
          photo: images.pizza_restaurant,
          duration: "30 - 45 min",
          location: {
            latitude: -23.427303268992986,
            longitude: -46.43229729660534,
          },
          courier: {
              avatar: images.avatar_2,
              name: "Wilson"
          },
          menu: [
              {
                  menuId: 4,
                  name: "À Moda",
                  photo: images.hawaiian_pizza,
                  description: "Bacon canadense e cream cheese.",
                  calories: 880,
                  price: 50
              },
              {
                  menuId: 5,
                  name: "Mussarela",
                  photo: images.pizza,
                  description: "Clássica mussarela com azeitonas",
                  calories: 800,
                  price: 35
              },
              {
                  menuId: 6,
                  name: "Calabresa",
                  photo: images.hawaiian_pizza,
                  description: "Calabresa e cebola",
                  calories: 650,
                  price: 35
              },
              {
                  menuId: 7,
                  name: "Marguerita",
                  photo: images.pizza,
                  description: "Mussarela e manjericão",
                  calories: 721,
                  price: 40
              },
          ]
      },
      {
          id: 3,
          name: "Lanches da Mamãe",
          rating: 3.9,
          categories: [8],
          priceRating: cheap,
          photo: images.hot_dog_restaurant,
          duration: "15 - 20 min",
          location: {
            latitude: -23.427303268992986,
            longitude: -46.43229729660534,
          },
          courier: {
              avatar: images.avatar_3,
              name: "Maria"
          },
          menu: [
              {
                  menuId: 8,
                  name: "Dogão Completo",
                  photo: images.chicago_hot_dog,
                  description: "Dog completo (bacon, catupiry, milho, ervilha, batata palha)",
                  calories: 234,
                  price: 9
              }
          ]
      },
      {
          id: 4,
          name: "China Feliz",
          rating: 4.5,
          categories: [3],
          priceRating: expensive,
          photo: images.japanese_restaurant,
          duration: "10 - 15 min",
          location: {
            latitude: -23.427303268992986,
            longitude: -46.43229729660534,
          },
          courier: {
              avatar: images.avatar_4,
              name: "José"
          },
          menu: [
              {
                  menuId: 9,
                  name: "Combo sushi",
                  photo: images.sushi,
                  description: "Temaki de salmão cru ou grelhado, hot-roll, uramaki",
                  calories: 112,
                  price: 40
              }
          ]
      },
      {
          id: 5,
          name: "Cozinha italiana",
          rating: 4.3,
          categories: [2, 5],
          priceRating: expensive,
          photo: images.noodle_shop,
          duration: "30 - 50 min",
          location: {
            latitude: -23.427303268992986,
            longitude: -46.43229729660534,
          },
          courier: {
              avatar: images.avatar_4,
              name: "Francisco"
          },
          menu: [
              {
                  menuId: 10,
                  name: "Carbonara",
                  photo: images.kolo_mee,
                  description: "Macarrão à carbonara",
                  calories: 250,
                  price: 16
              },
              {
                  menuId: 11,
                  name: "Caldo Verde",
                  photo: images.sarawak_laksa,
                  description: "Caldo verde com calabresa e couve",
                  calories: 200,
                  price: 6
              },
              {
                  menuId: 12,
                  name: "Executivo Frango",
                  photo: images.nasi_lemak,
                  description: "Arroz, feijão e frango empanado",
                  calories: 300,
                  price: 18
              },
              {
                  menuId: 13,
                  name: "Risoto",
                  photo: images.nasi_briyani_mutton,
                  description: "Risoto de arroz e carne cozida",
                  calories: 300,
                  price: 20
              },

          ]
      },
      {

          id: 6,
          name: "Doces da Malu",
          rating: 4.9,
          categories: [9, 10],
          priceRating: cheap,
          photo: images.kek_lapis_shop,
          duration: "30 - 45 min",
          location: {
            latitude: -23.427303268992986,
            longitude: -46.43229729660534,
          },
          courier: {
              avatar: images.avatar_1,
              name: "Malu"
          },
          menu: [
              {
                  menuId: 12,
                  name: "Copo da Felicidade",
                  photo: images.teh_c_peng,
                  description: "Merengue, Nutella, Morango e tudo o que há de bom",
                  calories: 350,
                  price: 2
              },
              {
                  menuId: 13,
                  name: "Açaí",
                  photo: images.ice_kacang,
                  description: "Açaí batido, 2 frutas e complementos",
                  calories: 200,
                  price: 3
              },
              {
                  menuId: 14,
                  name: "Chocolate Artesanal",
                  photo: images.kek_lapis,
                  description: "Barra de 120g de chocolate artesanal",
                  calories: 250,
                  price: 20
              }
          ]

      }


  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation);


  function onSelectCategory(category) {
    //filter restaurants
    let restaurantList = restaurantData.filter(a => a.categories.includes(category.id));

    setRestaurants(restaurantList);

    setSelectedCategory(category);
}

  function getCategoryNameById(id) {
      let category = categories.filter(a => a.id == id);

      if (category.length > 0)
          return category[0].name

      return "";
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', height: 50, marginTop: 5}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding *2,
            justifyContent: 'center'
          }}
        >
          <Image 
            source={icons.pin}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: '#ee5253'
            }}
          />
        </TouchableOpacity>
  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius
            }}
          >
            <Text>{currentLocation.streetName}</Text>
          </View>
        </View>
        
        <TouchableOpacity
            style={{
              width: 50,
              paddingRight: SIZES.padding *2,
              justifyContent: 'center'
            }}
          >
            <Image 
              source={icons.basket}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#ff9f43'
              }}
            />
          </TouchableOpacity>
      </View>)
  }

  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding,
            backgroundColor: (selectedCategory?.id == item.id) ? '#ff9f43' : COLORS.white,
            borderRadius: SIZES.radius / 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: "center",
              backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : '#ff9f43'
            }}
          >
            <Image 
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30
              }}
            />

          </View>
          
          <Text
            style={{
              marginTop: SIZES.padding,
              color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
              ...FONTS.body4,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )

    }
    return (
      <View style={{padding: SIZES.padding *2}}>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding}}
        />
      </View>
    )
  }

  function renderRestaurantList() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{marginBottom: SIZES.padding *2}}
        onPress={() => navigation.navigate("Restaurant", {
          item,
          currentLocation
        })}
      >

        {/* Restaurant Info */}
        <Text style={{...FONTS.body2}}>{item.name}</Text>
        
        <View
          style={{
            marginTop: SIZES.padding / 2,
            marginBottom: SIZES.padding / 2,
            flexDirection: 'row'
          }}
        >
          {/* Rating */}
          <Image 
            source={icons.star}
            style={{
              height: 18,
              width: 18,
              tintColor: '#ff9f43',
              marginRight: 5
            }}
          />

            <Text style={{...FONTS.body3}}>{item.rating}</Text>
        
          {/* Categories */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10
            }}
          >
            {
              item.categories.map((categoryId) => {
                return (
                  <View
                    style={{flexDirection: 'row'}}
                    key={categoryId}
                  >
                    <Text style={{...FONTS.body3}}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                    <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                  </View>
                )
              })
            }

            {/* Price */}
            {
              [1, 2, 3].map((priceRating) => (
                <Text
                  key={priceRating}
                  style={{
                    ...FONTS.body3,
                    color: (priceRating <= item.priceRating) ?
                    COLORS.black : COLORS.darkgray
                  }}
                >
                  $
                </Text>
              ))
            }
          </View>
        </View>
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding
          }}
        >
          <Image 
            source={item.photo}
            // source={{uri: 'https://...'}}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.radius / 2
            }}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: 50,
              width: SIZES.width *0.3,
              backgroundColor: COLORS.white,
              borderTopLeftRadius: SIZES.radius / 2,
              borderBottomRightRadius: SIZES.radius / 2,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow
            }}
          >
            <Text style={{...FONTS.h4}}>{item.duration}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )

    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item._id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding *2,
          paddingBottom: 30
        }}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
      elevation:1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
})

export default Home;