import {Box, View} from 'native-base';
import React from 'react';
import Header from './Header';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Box padding={4}>
        <Header />
      </Box>
    </View>
  );
}
