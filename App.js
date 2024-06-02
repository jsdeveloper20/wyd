import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './constains/theme';

const slider = [
  {
    id:1,
    title:'Walk You Dog',
    image: require('./assets/image_1.jpg')
  },
  {
    id:2,
    title:'Walk You Dog',
    image: require('./assets/image_2.jpg')
  },
  {
    id:3,
    title:'Walk You Dog',
    image: require('./assets/image_3.jpg')
  },
  {
    id:4,
    title:'Walk You Dog',
    image: require('./assets/image_4.jpg')
  },
  
]
export default function App(){
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage){
    return(
      <AppIntroSlider
        data={slider}
        renderItem={({item}) => {
          return(
            <View style={{
              flex: 1,
              alignItems:'center',
              padding: 15,
              paddingTop: 100,
            }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode='contain'
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign:'center',
                paddingTop: 5,
                color: COLORS.title
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Дальше")}
        renderSkipButton={() => buttonLabel("Пропустить")}
        renderDoneButton={() => buttonLabel("Готово")}
        onDone={() =>{
          setShowHomePage(true);
        }} 
      />
    )
  }

  return(
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Home Screen</Text>
    </View>
  )
}