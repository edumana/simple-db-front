import { createTheme } from '@mui/material/styles';
import Colors from './constants/colors';
import fontSettings from './constants/fontSettings';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.stYellow,
      light: Colors.stLightYellow
    },
    secondary:{
      main: Colors.stBlue,
      light: Colors.stLightBlue,
    },
    error: {
      main: Colors.stRed,
    },
  },
  typography: {
    h1: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.black,
      fontSize: fontSettings.xl,
      letterSpacing: '0.01em'
    },
    h2: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.black,
      fontSize: fontSettings.lg,
    },
    h3: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.bold,
      fontSize: fontSettings.md,
    },
    h4: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.bold,
      fontSize: fontSettings.sm,
    },
    h5: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.bold,
      fontSize: fontSettings.xs,
    },
    subtitle1: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.medium,
      fontSize: fontSettings.md,
      textTransform: 'capitalize',
    },
    subtitle2: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.medium,
      fontSize: fontSettings.sm,
      textTransform: 'capitalize',
    },
    body1: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.regular,
      fontSize: fontSettings.sm,
    },
    body2: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.regular,
      fontSize: fontSettings.xs,
    },
    caption: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.bold,
      fontSize: fontSettings.md,
      color: '#313b46'
    },
    overline: {
      fontFamily: fontSettings.main,
      fontWeight: fontSettings.bold,
      fontSize: fontSettings.md,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#FFF'
      },
      containedPrimary: {
        color: '#FFF'
      },
      containedSecondary: {
        color: '#FFF'
      },
    }
  }
});

export default theme;
