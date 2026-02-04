import {ThemeProvider} from '@shopify/restyle';
import React, { JSX } from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import { Icon } from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Primary" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />
          <Button disabled preset="outline" title="Lading" />
        <Icon name='eyeOff' color='error' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;