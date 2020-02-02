import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
`;

const StopWatch = styled.View`
  width: 100%;
  height: 100px;
  border-width: 1px;
  border-color: red;
`;

export default function App() {
  return (
    <MainContainer>
      <StopWatch></StopWatch>
    </MainContainer>
  );
}
