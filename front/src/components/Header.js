import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { common } from '@material-ui/core/colors';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { app } from "../config/firebaseConfig";
import { Auth } from "../config/AuthContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100px"
    },
    container: {
        height: "100px",
        alignItems: "center"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  }),
);

export default function Header(props){
    const [user, setUser] = React.useState({});
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [register, setRegister] = React.useState(false);
    const [age, setAge] = React.useState('');

    
    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('This is the user: ', user)
                setUser(user)
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        });
    });

    const handleClickOpen = () => {
        setOpen(true);
        setRegister(false);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const modalAction = () => {
        // setOpen(false);
        if(register){
            console.log("HAciendo registro");
            
        } else{
            console.log("HAciendo login");
            ingresar();
        }
    };

    const showRegisterForm = () => {
        setRegister(true);
        console.log("Show register: " + register);
        
    }
    const showLoginForm = () => {
        setRegister(false);
        console.log("Show register: " + register);
    }

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    function RenderButtonText(props) {
        if(props.register){
            return <span>Create account</span> 
        } else{
            return <span>Log in</span>
        }
    }
    const ingresar = async e => {
        
        await app
            .auth()
            .signInWithEmailAndPassword("daniel07079@gmail.com", "12345678")
            .then(result => {
                console.log(result);
                setUser(result.user)
            })
            .catch(error => {
                console.error(error);
                
            });
    };
    function RenderRegister(props) {
        if(props.register){
            return <div>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={6} md={6}>
                        <InputLabel id="select-label">Marriage status</InputLabel>
                        <Select labelId="select-label" id="simple-select"
                        value={age}
                        onChange={handleChange} fullWidth
                        >
                            <MenuItem value={1}>Single</MenuItem>
                            <MenuItem value={2}>Married</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="age"
                            label="Type you age"
                            type="text"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                

                

            </div>
        } else {
            return <div></div>
        }
        
    }
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
                                <li>
                                    {!user.uid ? (
                                    <a onClick={handleClickOpen}>Login/Sign up</a>) : (<div style={{color:"#fff"}}>Hi {user.email}</div>)
                                    }
                                </li>
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
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login/SignUp</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Plase <span style={{textDecoration:"underline"}} onClick={showLoginForm}>sign in</span> or <span style={{textDecoration:"underline"}} onClick={showRegisterForm}>create your account</span> to participate and make your votes
                </DialogContentText>
                <RenderRegister register={register} />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={modalAction} color="primary">
                    <RenderButtonText register={register}></RenderButtonText>
                </Button>
                </DialogActions>
            </Dialog>
        </Container>
    </header>
}