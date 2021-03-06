import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native-elements';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 40px;
`;

const StopWatch = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border-width: 1px;
  border-color: grey;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 320px;
  /* border-width: 1px; */
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

//Set allowed Property types for a component
interface OwnProps {
  seconds: number;
  imageSize: number;
  imageSource: string;
  toggleSlider: boolean;
  sliderNum: number;
  setSliderValue: (value: number) => void;
  message: string;
}

const MainScreen: React.FunctionComponent<OwnProps> = ({
  seconds,
  imageSize,
  imageSource,
  toggleSlider,
  sliderNum,
  setSliderValue,
  message
}) => {
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
          style={{
            width: "100%"
          }}
          thumbStyle={{
            backgroundColor: toggleSlider ? "green" : "red"
          }}
        />
        <Text>{message}</Text>
      </SliderContainer>
    </MainContainer>
  );
};

export default MainScreen as any;
