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
  border-color: grey;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 320px;
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
  border-radius: 10px;
`;

const StopWatchText = styled.Text`
  font-size: 50px;
  color: grey;
`;

export default function App() {
  const [sliderNum, setSliderNum] = useState<number>(0); //slider values
  const [imageSize, setImageSize] = useState<number>(150); //default image height
  const [toggleSlider, setToggleSlider] = useState<boolean>(false); //disable or enable slider
  const [seconds, setSeconds] = useState<number>(0); //seconds for a timer

  //set Slider values
  const setSliderValue = (value: number) => {
    //parse slider value to float number and set 2 decimal values
    const sliderValue = parseFloat(value.toFixed(2));

    //Sum of slider value and default image height of 150
    const totalImgSize = sliderValue + 150;

    //set values to a state
    setSliderNum(sliderValue);
    setImageSize(totalImgSize);
  };

  const stopWatch = () => {
    const sec = new Date().getSeconds();

    //If 30 seconds, then disable slider
    if (sec === 30) {
      setToggleSlider(true);
    }

    //if less then 30 seconds then enable slider
    if (sec === 0) {
      setToggleSlider(false);
    }

    //save seconds for display
    setSeconds(sec);
  };

  //executes every 1 seconds
  setInterval(stopWatch, 1000);

  //Message
  const message = `Slider will be ${
    toggleSlider ? `disabled` : `enabled`
  } after 30 seconds`;

  return (
    <MainContainer>
      <StopWatch>
        <StopWatchText>{seconds}</StopWatchText>
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
          disabled={toggleSlider}
          value={sliderNum}
          onValueChange={setSliderValue}
          maximumValue={100}
          minimumValue={0}
          animateTransitions={true}
          minimumTrackTintColor={"#808080"}
          trackStyle={{
            width: 350
          }}
          thumbStyle={{
            backgroundColor: toggleSlider ? "#808080" : "red"
          }}
        />
        <Text>{message}</Text>
      </SliderContainer>
    </MainContainer>
  );
}
