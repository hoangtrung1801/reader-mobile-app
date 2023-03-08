import React from 'react';
import {HStack, VStack, Text, Center} from 'native-base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <HStack justifyContent="space-between">
      <VStack>
        <Text fontSize="lg">Hi,</Text>
        <Text fontSize="lg" bold>
          Hoang Trung
        </Text>
      </VStack>
      <Center>
        <MaterialCommunityIcon name="bell" size={30} color="black" />
      </Center>
    </HStack>
  );
}
