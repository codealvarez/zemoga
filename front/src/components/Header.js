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
import { Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';
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
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
  }),
);

export default function Header(props){
    const [user, setUser] = React.useState({});
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [mensaje, setMensaje] = React.useState('');
    const [openAlert, setOpenAlert] = React.useState(false);
    const [register, setRegister] = React.useState(false);
    const [age, setAge] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ingresando, setIngresando] = React.useState(false);
    
    React.useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('This is the user: ', user)
                setUser(user);
                setIngresando(false);
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        });
    }, [user]);
    

    const handleClickOpen = () => {
        setOpen(true);
        setRegister(false);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = async () => {
        setIngresando(true);
        await app.auth().signOut().then((res) => {
            setIngresando(false);
            setUser({});
            setMensaje("Logout successful See you soon");
            setOpenAlert(true);
        })
    }

    const handleCloseAlert = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
    };

    const modalAction = () => {
        // setOpen(false);
        if(register){
            console.log("HAciendo registro");
            setOpen(false);
            setIngresando(true);
            registrar();
        } else{
            console.log("HAciendo login");
            setOpen(false);
            setIngresando(true);
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

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    function RenderButtonText(props) {
        if(props.register){
            return <span>Create account</span> 
        } else{
            return <span>Log in</span>
        }
    }
    const ingresar = () => {
        app.auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
                setMensaje("Welcome, " + result.user.email)
                setOpenAlert(true);
                setUser(result.user);
                
            })
            .catch(error => {
                console.error(error);
                setMensaje(error.message)
                setOpenAlert(true);
                setIngresando(false);
            });
    };

    const registrar = async () => {
        
        await app.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            console.log(result);
            /* const usersCollectoin = useFirestore().collection('users');
            const data = {
                uid: user.uid,
                email: user.email,
                age: age,
            }
            usersCollectoin.add(data).then(res => {
                setMensaje("Account created successfully, welcome " + result.user.email)
                setOpenAlert(true);
                setIngresando(false);
            }); */
            const data = {
                uid: result.user.uid,
                email: result.user.email,
                age: age,
                status: status
            }
            console.log(data);
            
            const usersCollectoin = app.firestore().collection("users");
            usersCollectoin.add(data).then(res => {
                setMensaje("Account created successfully, welcome " + result.user.email)
                setOpenAlert(true);
                setIngresando(false);
            });
            
        }).catch(error => {
            console.error(error);
            setMensaje(error.message)
            setOpenAlert(true)
            setIngresando(false);

        });
    };
    function RenderRegister(props) {
        if(props.register){
            return <div>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={6} md={6}>
                        <InputLabel id="select-label">Marriage status</InputLabel>
                        <Select labelId="select-label" id="simple-select"
                        value={status}
                        label="Age"
                        onChange={handleChangeStatus} fullWidth
                        >
                            <MenuItem value={1}>Single</MenuItem>
                            <MenuItem value={2}>Married</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <InputLabel id="select-label-age">Age</InputLabel>
                        <TextField
                            margin="dense"
                            id="age"
                            labelId="select-label-age"
                            type="number"
                            value={age}
                            onChange={handleChangeAge}
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
                                    <a onClick={handleClickOpen}>Login/Sign up</a>) : (<div style={{color:"#fff"}}>Hi, {user.email} <a onClick={handleLogout}>Logout</a></div>)
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
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
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
            <Backdrop className={classes.backdrop} open={ingresando} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openAlert}
                autoHideDuration={6000}
                message={mensaje}
                action={
                    <React.Fragment>
                      
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseAlert}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                }
            />
        </Container>
    </header>
}