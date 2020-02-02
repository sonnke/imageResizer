import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native-elements';
import styled from 'styled-components/native';

import imageSource from './images.jpeg';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

const StopWatch = styled.View`
  width: 100%;
  height: 100px;
  border-width: 1px;
  border-color: red;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 350px;
  border-width: 1px;
  border-color: grey;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: 150px;
  border-color: red;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Graphic = styled.Image`
  height: ${({ imgSize }) => imgSize}px;
`;

const StopWatchText = styled.Text`
  font-size: 50px;
  color: grey;
`;

export default function App() {
  const [sliderNum, setSliderNum] = useState<number>(0);
  const [imageSize, setImageSize] = useState<number>(150);

  //set Slider value
  const setSliderValue = (value: number) => {
    const decimalPoint = parseFloat(value.toFixed(2));
    const totalImgSize = decimalPoint + 150;
    setSliderNum(decimalPoint);
    setImageSize(totalImgSize);
  };

  return (
    <MainContainer>
      <StopWatch>
        <StopWatchText>{sliderNum}</StopWatchText>
      </StopWatch>
      <ImageContainer>
        <Graphic
          imgSize={imageSize}
          resizeMode={"contain"}
          source={imageSource}
        />
      </ImageContainer>
      <SliderContainer>
        <Slider
          value={sliderNum}
          onValueChange={setSliderValue}
          maximumValue={100}
          minimumValue={0}
          animateTransitions={true}
          minimumTrackTintColor={"#808080"}
          trackStyle={{
            // backgroundColor: "#808080",
            width: 350
          }}
        />
      </SliderContainer>
    </MainContainer>
  );
}
