import React from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import {peopleData} from '../data/people';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { common } from '@material-ui/core/colors';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);
export default function Rullings(){
    const classes = useStyles();
    
    function ValidateVotes(props) {
        if (props.up >= props.down) {
            return <span className="resumeUp"><ThumbUpAltIcon style={{ color: common.white, fontSize:20 }}></ThumbUpAltIcon></span>;
        }else{
            return <span className="resumeDown"><ThumbDownIcon style={{ color: common.white,  fontSize:20 }}></ThumbDownIcon></span>;
        }
    }
    return <div id="rullings">
        <Container maxWidth="md">
            <h3>Previous rulings</h3>
            <GridList spacing={30} cellHeight={550} className={classes.gridList}>
                {peopleData.map((person) => (
                    <div className="personCont">
                        <div className="person" style={{backgroundImage: "url(" + person.img + ")"}}>
                            <div className="personInfo">
                                <h4>
                                    <ValidateVotes up={person.up} down={person.down}></ValidateVotes>
                                    {person.name}</h4>
                                <p>{person.description}</p>
                                <div className="votePerson">
                                    <button className="voteUp">
                                        <ThumbUpAltIcon style={{ color: common.white, fontSize:20 }}></ThumbUpAltIcon>  
                                    </button>
                                    <button className="voteDown">
                                        <ThumbDownIcon style={{ color: common.white,  fontSize:20 }}></ThumbDownIcon>
                                    </button>
                                    <button className="vote">
                                        Vote now
                                    </button>
                                </div>
                            </div>
                            <div className="voteResults">
                                <div className="up" style={{width: (person.up + '%') }}>
                                    <ThumbUpAltIcon style={{ color: common.white, fontSize:30 }}></ThumbUpAltIcon>  
                                    <span>{person.up}%</span>
                                </div>
                                <div className="down" style={{width: (person.down + '%') }}>
                                    <span>{person.down}%</span>
                                    <ThumbDownIcon style={{ color: common.white,  fontSize:30 }}></ThumbDownIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </GridList>
        </Container>
    </div>
}
