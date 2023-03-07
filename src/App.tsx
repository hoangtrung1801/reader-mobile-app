import React from 'react';
import {Appearance, Button, StatusBar, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Hello world</Text>
      <Button title="Post" onPress={() => navigation.navigate('Post')} />
    </View>
  );
}

function PostScreen() {
  return (
    <View>
      <Text>This is a post</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const colorScheme = Appearance.getColorScheme();
  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar
  //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  //       backgroundColor={backgroundStyle.backgroundColor}
  //     />
  //     {/* <Section title="First app">Hello world</Section> */}
  //   </SafeAreaView>
  // );
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
