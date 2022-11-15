import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import type { } from '@mui/material/themeCssVarsAugmentation';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/200.css";

const theme = extendTheme({
    typography: {
        h1: {
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial',
            fontWeightRegular: 300,
            fontWeightBold: 400,
            fontWeightLight: 200,
        },
        h6: {
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial',
            fontWeightRegular: 300,
            fontWeightBold: 400,
            fontWeightLight: 200,
        }
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