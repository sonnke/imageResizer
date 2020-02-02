import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  flex: 1;
  border-width: 1px;
  border-color: red;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.View`
  flex: 1;
  border-width: 1px;
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
  return (
    <MainContainer>
      <StopWatch>
        <StopWatchText>23:32</StopWatchText>
      </StopWatch>
      <ImageContainer></ImageContainer>
      <SliderContainer></SliderContainer>
    </MainContainer>
  );
}
