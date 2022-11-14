import { FC, useContext } from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Context, Store } from './Store';
import theme from './Theme';
import logo from './assets/logo.png';

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
        <Typography variant='h5'>
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
                <Grid container justifyContent='center' alignContent='center' flexGrow={3}>
                    <Grid container justifyContent='center' alignContent='center' >
                        <Box component='img' src={logo} sx={{ height: '10em', m: '1em' }} />
                    </Grid>
                    <Grid container justifyContent='center' alignContent='center' >
                        <Typography variant='h3' style={{ fontSize: '8em' }}>
                            bokoup
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container flexGrow={1} alignContent='flex-end' justifyContent='center' sx={{ m: '1em' }}>
                    <Copyright />
                </Grid>
            </Grid>
        </Paper>
    );
};
