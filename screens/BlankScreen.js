import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const BlankScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Button
        onPress={() => {
          const handler = async () => {
            try {
              await openImagePickerUtil({
                mediaTypes: 'All',
                allowsEditing: false,
                quality: 0.2,
              });
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        style={StyleSheet.applyWidth(
          GlobalStyles.ButtonStyles(theme)['Button'],
          dimensions.width
        )}
        title={'Get Started'}
      />
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
