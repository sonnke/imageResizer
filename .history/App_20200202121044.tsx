import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 20;
`;

export default function App() {
  return (
    <MainContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
    </MainContainer>
  );
}
