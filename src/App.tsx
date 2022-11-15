import { FC, useContext } from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
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
        <Typography variant='h6'>
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
            <Grid container flexDirection='column' height='100%'>
                <Grid container alignContent='center' justifyContent='center' flexGrow={1}>
                    <Grid container alignContent='center' justifyContent='center'>
                        <Box component='img' src={logo} sx={{ height: '9em', m: '1em' }} />
                        <Grid container flexDirection='column' textAlign={{ xs: 'center', sm: 'left' }} justifyContent='center'>
                            <Typography variant='h1'>
                                <Box fontSize={{ xs: '1em', sm: '2em' }}>
                                    bokoup
                                </Box>
                            </Typography>
                            <Box >
                                <Typography textAlign='center'>
                                    Blockchain based offers,<br />promotions and loyalty programs
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' alignContent='center' flexGrow={1} sx={{ m: '1em' }}>
                    <Button color='primary' sx={{ width: '248px' }} variant='contained' href="https://forms.clickup.com/36264399/f/12jpef-560/0I2JTBPMXJBDDAYD77">
                        APPLY TO ADOPT EARLY
                    </Button>
                </Grid>
                <Grid container justifyContent='center' alignContent='flex-end' flexGrow={1} sx={{ m: '1em' }}>
                    <Copyright />
                </Grid>

            </Grid>
        </Paper >
    );
};
