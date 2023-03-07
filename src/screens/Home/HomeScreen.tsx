import React from 'react';
import {Button, Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Hello world</Text>
      <Button title="Post" onPress={() => navigation.navigate('Post')} />
    </View>
  );
}
