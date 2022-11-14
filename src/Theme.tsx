import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import type { } from '@mui/material/themeCssVarsAugmentation';

const theme = extendTheme({
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial',
        fontWeightBold: '100',
        fontWeightLight: '100',
        fontWeightRegular: '100',
        fontWeightMedium: '100',
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#006B58'
                },
                secondary: {
                    main: '#006397'
                },
                error: {
                    main: '#BA1A1A'
                },
                background: {
                    paper: '#001E2C',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#00E0BA'
                },
                secondary: {
                    main: '#92CCFF'
                },
                error: {
                    main: '#FFB4AB'
                },
                background: {
                    paper: '#001E2C',
                },
            },
        },
    },
});

export default theme