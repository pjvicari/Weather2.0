import React from 'react'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen'

const NotFoundPage = () => {
    return (
        <WelcomeScreen>
            <Grid container
                direction="column"
                justify="center"
                className="full">
                <div className="highlight">
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Grid item>
                            <IconContext.Provider value={{ size: "6em" }}>
                                <WiRain></WiRain>
                            </IconContext.Provider>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Typography variant="h4" color="ïnherit">
                            404 | La página no existe
                            </Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Link color="inherit" aria-label="menu" component={RouterLink} to="/">
                            Regresar al inicio
                            </Link>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}

export default NotFoundPage