import { FC, useContext } from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import { Context, Store } from './Store';
import theme from './Theme';

export const App: FC = () => {
    return (
        <Store>
            <CssVarsProvider theme={theme}>
                <Content />
            </CssVarsProvider>
        </Store>
    );
};

function Copyright() {
    return (
        <Typography>
            {'Copyright © '}
            <Link href="https://bokoup.com/">
                bokoup.com
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export const Content: FC = () => {
    const { state } = useContext(Context);
    const { mode, setMode } = useColorScheme();
    setMode('dark');

    return (
        <Paper sx={{ height: '100vh' }}>
            <Grid container flexDirection="column" alignContent='center' justifyContent='center' sx={{ height: '100%' }}>
                <Grid container alignContent='center' justifyContent='center' >
                    <Typography variant="h1">
                        bokoup
                    </Typography>
                </Grid>
                <Copyright />
            </Grid>
        </Paper>
    );
};
