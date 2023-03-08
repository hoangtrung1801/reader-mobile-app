import React from 'react';

import {NativeBaseProvider} from 'native-base';
import TabNavigation from './navigation/TabNavigation';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <TabNavigation />
    </NativeBaseProvider>
  );
}

export default App;
