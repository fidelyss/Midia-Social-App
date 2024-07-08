import React, { useEffect } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import logo from './images/logo192.png'
import Form from './Components/Form/form.js'
import Posts from './Components/Posts/posts.js'
import useStyles from './styles.js'
export default function App() {
    const classes = useStyles();
    return (
        <Container>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h1">Memories</Typography>
                <img className={classes.image} src={logo} height={"60"} width={"60"} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={4}><Posts /></Grid>
                        <Grid item xs={12} sm={4}><Form /></Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
