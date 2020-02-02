import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <MainContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
    </MainContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
