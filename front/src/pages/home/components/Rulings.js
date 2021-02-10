import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import {peopleData} from '../data/people';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { common } from '@material-ui/core/colors';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    buttonB: {
        border: "2px solid white"
    },
    voteUp:{
        backgroundColor: "#1cbbb4",
        width: "30px",
        minWidth: "30px",
        paddingLeft: "1px",
        borderRadius: 0
    },
    voteDown:{
        backgroundColor: "#ffad1d",
        width: "30px",
        minWidth: "30px",
        paddingLeft: "1px",
        borderRadius: 0
    }
  }),
);
export default function Rullings(){
    const [voteOption, setVoteOption] = React.useState([]);
    const classes = useStyles();
    
    function ValidateVotes(props) {
        if (props.up >= props.down) {
            return <span className="resumeUp"><ThumbUpAltIcon style={{ color: common.white, fontSize:20 }}></ThumbUpAltIcon></span>;
        }else{
            return <span className="resumeDown"><ThumbDownIcon style={{ color: common.white,  fontSize:20 }}></ThumbDownIcon></span>;
        }
    }

    const changeStyle = (id) => {
        console.log(id);
        const ids = id.split('-');
        if (ids[2] == 1) {
            let element = document.getElementById("vote-"+ids[1]+"-2");
            ReactDOM.findDOMNode(element).style.border = "none";
        } else if(ids[2] == 2){
            let element = document.getElementById("vote-"+ids[1]+"-1");
            ReactDOM.findDOMNode(element).style.border = "none";
        }
        
        let element = document.getElementById(id);
        ReactDOM.findDOMNode(element).style.border = "2px solid white";
    }

    const Vote = () => {
        console.log("voteOption:");
        
        console.log(voteOption);
    }
    return <div id="rullings">
        <Container maxWidth="md">
            <h3>Previous rulings</h3>
            <GridList spacing={30} cellHeight={550} className={classes.gridList}>
                {peopleData.map((person) => (
                    <div className="personCont" key={person.id}>
                        <div className="person" style={{backgroundImage: "url(" + person.img + ")"}}>
                            <div className="personInfo">
                                <h4>
                                    <ValidateVotes up={person.up} down={person.down}></ValidateVotes>
                                    {person.name}</h4>
                                <p>{person.description}</p>
                                <div className="votePerson">
                                    <Button id={'vote-'+person.id+'-'+1} className={classes.voteUp} onClick={(e)=>{
                                        setVoteOption([person.id, 1]);
                                        changeStyle('vote-'+person.id+'-'+1);
                                    }}>
                                        <ThumbUpAltIcon style={{ color: common.white, fontSize:20 }}></ThumbUpAltIcon>  
                                    </Button >
                                    <Button id={'vote-'+person.id+'-'+2} className={classes.voteDown} onClick={()=>{
                                        setVoteOption([person.id, 2]);
                                        changeStyle('vote-'+person.id+'-'+2);
                                    }}>
                                        <ThumbDownIcon style={{ color: common.white,  fontSize:20 }}></ThumbDownIcon>
                                    </Button>
                                    <Button className="vote" onClick={Vote}>
                                        Vote now
                                    </Button>
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
