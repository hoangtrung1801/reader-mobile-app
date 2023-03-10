import React from 'react';
import {View, Text, HStack, VStack} from 'native-base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HighlightItem = () => {
  return (
    <View borderWidth="2" marginBottom={4} borderColor="gray.400" padding={3}>
      <VStack space={4}>
        <Text fontSize="md">
          Don't worry, your conversation data is preserved! Check back soon.
        </Text>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="md">In the Book 1</Text>
          <HStack space={2}>
            <MaterialCommunityIcon
              name="pencil-outline"
              size={24}
              color="black"
            />
            <MaterialCommunityIcon name="trash-can" size={24} color="black" />
          </HStack>
        </HStack>
      </VStack>
    </View>
  );
};

export default HighlightItem;
