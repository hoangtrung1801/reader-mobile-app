import React from 'react';
import {Box, ScrollView, View} from 'native-base';
import HighlightItem from './HighlightItem';
import Header from './Header';

export default function HighlightScreen({navigation}) {
  return (
    <View>
      <Box padding={4} paddingBottom={1}>
        <Header />
      </Box>
      <ScrollView padding={4}>
        <HighlightItem />
        <HighlightItem />
        <HighlightItem />
        <HighlightItem />
        <HighlightItem />
        <HighlightItem />
        <HighlightItem />
        <HighlightItem />
      </ScrollView>
    </View>
  );
}
