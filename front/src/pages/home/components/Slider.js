import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import icon_wiki  from "../../../images/icon_wiki.png";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { common } from '@material-ui/core/colors';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoBox: {
        backgroundColor: "rgba(51, 51, 51, 0.377)",
        backdropFilter: "blur(50px)",
        marginTop:"70px"
    }
  }),
);
export default function Slider(){
    const classes = useStyles();
    return <div id="slider">
        <Container maxWidth="md">
            <Grid container spacing={3}></Grid>
                <Grid item xs={12} md={6} >
                    <div id="infoBox" className={classes.infoBox}>
                        <span>What's your opinion on</span>
                        <div className="title">Pope Francis?</div>
                        <p>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </p>
                        <div className="moreInfo">
                            <img src={icon_wiki}></img> <span>More information</span>
                        </div>
                        <p className="veredict">What's your veredict?</p>
                        
                    </div>
                    <div className="voteBox">
                        <div className="up">
                            <ThumbUpAltIcon style={{ color: common.white, fontSize:50 }}></ThumbUpAltIcon>
                        </div>
                    <div className="down">
                        <ThumbDownIcon style={{ color: common.white,  fontSize:50 }}></ThumbDownIcon>
                    </div>
                </div>
            </Grid>
        </Container>
        <div className="closingBox">
            <div className="closing">
                <span>Closing in</span>
            </div>
            <div className="days">
                <span className="number">22</span> 
                <span className="text">days</span></div>
        </div>
    </div>
}