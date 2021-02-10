import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import submitBackground from "../../../images/submitBackground.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spBox: {
        backgroundColor: "#ebebeb",
        marginTop: "34px",
        marginBottom: "40px",
        color: "#333333",
        paddingLeft: "20px",
        backgroundImage: "url(" + submitBackground + ")",
        backgroundSize: "cover"
    }
  })
);

export default function Submit(){
    const classes = useStyles();
    return <div id="submitPerson">
        <Container maxWidth="md">
            <div className={classes.spBox}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <div className="submitLabel">Is there anyone else you would want us to add?</div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <button>Submit a name</button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>
}