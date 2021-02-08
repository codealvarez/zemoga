import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { common } from '@material-ui/core/colors';
import {Router, Switch, Route, Link} from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100px"
    },
    container: {
        height: "100px",
        alignItems: "center"
    }
  }),
);

export default function Header(props){
    const classes = useStyles();
    return  <header>
        <Container maxWidth="md">
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={3}>
                    <div className="logo">
                        <Link to="/">Rule of Thumb</Link>
                    </div>
                </Grid>
                <Grid item xs={10} sm={10} md={8}>
                    <nav>
                        <ul>
                            <li><Link to="/past-trials">Past trials</Link></li>
                            <li><Link to="/how-it-works">How it works</Link></li>
                            <li><a href="#">Login/Sign up</a></li>
                        </ul>
                    </nav>
                </Grid>
                <Grid item xs={2} sm={2} md={1}>
                    <div className="searchBox">
                        <SearchIcon style={{ color: common.white }}></SearchIcon>
                    </div>
                </Grid>

            </Grid>
            </div>
        </Container>
    </header>
}