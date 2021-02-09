import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spBox: {
        marginTop: "34px",
        marginBottom: "40px",
        color: "#333333",
        paddingLeft: "20px"
    },
    gridBox: {
        alignItems: "center"
    },
    firstE: {
        fontFamily: 'Lato',
        fontSize: "14px",
        fontWeight: "lighter",
        lineHeight: "18px"
    },
    span: {
        fontWeight: "bold",
        fontFamily: 'Lato',
        fontSize: "23.6px",
    },
    text1: {
        fontWeight: "lighter",
        fontFamily: 'Lato',
        fontSize: "13px",
    }
  }),
);

export default function SpeakBox(){
    const classes = useStyles();
    return  <div>
            <Container maxWidth="md">
                <div className={classes.spBox}>
                    <Grid container spacing={4} className={classes.gridBox}>
                        <Grid item xs={2} md={2} className={classes.firstE}>
                            Speak out. Be heard. 
                            <div className={classes.span}>Be counted</div>
                        </Grid>
                        <Grid item xs={9} md={9} className={classes.text1}>
                            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
                        </Grid>
                        <Grid item xs={1} md={1} className={classes.text1}>
                            <ClearIcon style={{ color: "#444444", fontSize:25 }}></ClearIcon>
                        </Grid>
                    </Grid>
                </div>
                
            </Container>
        </div>
    
}