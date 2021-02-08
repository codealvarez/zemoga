import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Breadcrumbs } from '@material-ui/core';
import www404  from "../../images/www404.png";

export default function Error404(){
    
    return <div className="contentPage">
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12}>
                    <Paper elevation={0} style={{fontFamily:"Lato"}}>
                        <Typography variant="h2" component="h2" style={{color:"#333333", fontWeight:"lighter", fontFamily:"Lato", marginBottom:"20px"}}>
                            Page not found
                        </Typography>
                        <div>
                            <img width="100%" src={www404}></img>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div>
}