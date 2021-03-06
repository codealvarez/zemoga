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
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { app } from "../../../config/firebaseConfig";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {
    SuspenseWithPerf,
    FirebaseAppProvider,
    useFirestoreCollectionData,
    useFirestore,
    AuthCheck,
    useUser
  } from "reactfire";
const useStyles = makeStyles(() =>
  createStyles({
    gridList: {
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    buttonB: {
        border: "2px solid white"
    }
  }),
);
export default function Rullings(props){
    const [voteOption, setVoteOption] = React.useState([]);
    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);
    const { data: user } = useUser();
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    }, [snackPack, messageInfo, open]);

    const vote = (message, id) => () => {
        console.log(id);
        console.log(voteOption);
        if(voteOption[0] == id){
            console.log("OK");
            message = "Thanks for votting";
            const votesCollection = app.firestore().collection('people/'+id+'/votes');
            const query = votesCollection.where("user","==",user.uid);
            //const votesXUser = app.firestore().useFirestoreCollectionData(query, { idField: 'id' });
            const userVotes = query.get().then((res) => {
                console.log("Votes per user");
                console.log(res.size);
                
                if(res.size <= 2){
                    votesCollection.add({
                        user: user.uid,
                        option: voteOption[1]
                    }).then((res) => {
                        const currentPerson = app.firestore().doc('people/'+id).get().then((resPerson) => {
                            let votesUpTemp = resPerson.data().up;
                            let votesDownTemp = resPerson.data().down;
                            if(voteOption[1] == 1){
                                votesUpTemp++;
                                app.firestore().doc('people/'+id).update({
                                    up: votesUpTemp
                                });
                            }

                            if(voteOption[1] == 2){
                                votesDownTemp++;
                                app.firestore().doc('people/'+id).update({
                                    down: votesDownTemp
                                });
                            }
                            setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
                        });
                        
                    });
                } else {
                    message = "Votes per box exceded";
                    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
                }
                
            })

            
        }else{
            console.log("No");
            setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
        }
        
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };
    const classes = useStyles();
    
    function ValidateVotes(props) {
        if (props.up >= props.down) {
            return <span className="resumeUp"><ThumbUpAltIcon style={{ color: common.white, fontSize:20 }}></ThumbUpAltIcon></span>;
        }else{
            return <span className="resumeDown"><ThumbDownIcon style={{ color: common.white,  fontSize:20 }}></ThumbDownIcon></span>;
        }
    }

    function CalcPercentages(props) {
        console.log(props);
        
        let total = props.up + props.down;
        let upPercent = Math.round( ((props.up * 100) / total) * 10) / 10;
        let downPercent = Math.round( ((props.down * 100) / total) * 10) / 10;
        
        return (
        <>
            <div className="up" style={{width: (upPercent + '%') }}>
                <ThumbUpAltIcon style={{ color: common.white, fontSize:30 }}></ThumbUpAltIcon>  
                <span>{upPercent}%</span>
                </div>
            <div className="down" style={{width: (downPercent + '%') }}>
                <span>{downPercent}%</span>
                <ThumbDownIcon style={{ color: common.white,  fontSize:30 }}></ThumbDownIcon>
            </div>
        </>
        );
    }

    const changeStyle = (id) => {
        console.log(id);
        // Clean borders for others vote boxes
        people.data.forEach(element => {
            let elementT = document.getElementById("vote-"+element.id+"-1");
            ReactDOM.findDOMNode(elementT).style.border = "none";

            let elementT2 = document.getElementById("vote-"+element.id+"-2");
            ReactDOM.findDOMNode(elementT2).style.border = "none";

        });

        // Clean border for inverse option
        const ids = id.split('-');
        if (ids[2] == 1) {
            let element = document.getElementById("vote-"+ids[1]+"-2");
            ReactDOM.findDOMNode(element).style.border = "none";
        } else if(ids[2] == 2){
            let element = document.getElementById("vote-"+ids[1]+"-1");
            ReactDOM.findDOMNode(element).style.border = "none";
        }
        
        // Set border for selected vote box option
        let element = document.getElementById(id);
        ReactDOM.findDOMNode(element).style.border = "2px solid white";
    }

    const peopleCollection = useFirestore().collection('people');
    const people = useFirestoreCollectionData(peopleCollection, { idField: "id" });
    console.log(people);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    const getGridListCols = () => {
        const { innerWidth: width, innerHeight: height } = window;
        console.log(width);
        
        if (width < 600) {
          return 1;
        }
    
        return 2;
    }

    return <div id="rullings">
        <Container maxWidth="md">
            <h3>Previous rulings</h3>
            {(people.status == "success") ? 
            <GridList spacing={30} cellHeight={550} className={classes.gridList} cols={getGridListCols()}>
                {people.data.map((person) => (
                    <div className="personCont" key={person.id}>
                        <div className="person" style={{backgroundImage: "url(" + person.img + ")"}}>
                            <div className="personInfo">
                                <h4>
                                    <ValidateVotes up={person.up} down={person.down}></ValidateVotes>
                                    {person.name}</h4>
                                <p>{person.description}</p>
                                <AuthCheck fallback={<Button className="btnNoUser">Please log in to vote</Button>}>
                                <div className="votePerson">
                                        <Button id={'vote-'+person.id+'-'+1} className="voteUp" onClick={(e)=>{
                                            setVoteOption([person.id, 1]);
                                            changeStyle('vote-'+person.id+'-'+1);
                                        }}>
                                            <ThumbUpAltIcon style={{ color: common.white, fontSize:20 }}></ThumbUpAltIcon>  
                                        </Button >
                                        <Button id={'vote-'+person.id+'-'+2} className="voteDown" onClick={()=>{
                                            setVoteOption([person.id, 2]);
                                            changeStyle('vote-'+person.id+'-'+2);
                                        }}>
                                            <ThumbDownIcon style={{ color: common.white,  fontSize:20 }}></ThumbDownIcon>
                                        </Button>
                                        <Button className="vote" onClick={vote('Please select an option', person.id)}>
                                            Vote now
                                        </Button>
                                    </div>
                                </AuthCheck>
                                
                            </div>
                            <div className="voteResults">
                                <CalcPercentages up={person.up} down={person.down}></CalcPercentages>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </GridList>
            :
                <p>Loading people</p>
            }
        </Container>
        <Snackbar
            key={messageInfo ? messageInfo.key : undefined}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            onExited={handleExited}
            message={messageInfo ? messageInfo.message : undefined}
            action={
            <React.Fragment>
                <IconButton
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={handleClose}
                >
                <CloseIcon />
                </IconButton>
            </React.Fragment>
            }
        />
    </div>
}
