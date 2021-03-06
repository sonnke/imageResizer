import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const StopWatch = styled.View`
  height: 150px;
  border: solid thin red;
`;

export default function App() {
  return (
    <MainContainer>
      <StopWatch></StopWatch>
    </MainContainer>
  );
}
