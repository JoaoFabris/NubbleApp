import { ThemeProvider } from '@shopify/restyle';
import React, { JSX } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';
import { Icon } from './src/components/Icon/Icon';

import { Text } from './src/components/Text/Text';
import { TextInput } from './src/components/TextInput/TextInput';
import { theme } from './src/theme/theme';
import { LoginScreen } from './src/screen/auth/LoginScreen/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUpScreen } from './src/screens/auth/SignUpScreen/SignUpScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
        {/* <SignUpScreen /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
