import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native-elements';
import styled from 'styled-components/native';

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
  height: 400px;
  border-width: 1px;
  border-color: grey;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: 150px;
  /* border-width: 1px; */
  border-color: red;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const StopWatchText = styled.Text`
  font-size: 50px;
  color: grey;
`;

export default function App() {
  const [sliderNum, setSliderNum] = useState<number>(0);

  return (
    <MainContainer>
      <StopWatch>
        <StopWatchText>23:32</StopWatchText>
      </StopWatch>
      <ImageContainer></ImageContainer>
      <SliderContainer>
        <Slider
          value={sliderNum}
          onValueChange={value => setSliderNum(value)}
          maximumValue={100}
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
