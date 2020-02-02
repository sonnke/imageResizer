import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex-direction: column;
`;

export default function App() {
  return (
    <MainContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
    </MainContainer>
  );
}
