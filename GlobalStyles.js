import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });
