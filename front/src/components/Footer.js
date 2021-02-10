import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spBox: {
        marginTop: "34px",
        paddingBottom: "10px",
        backgroundImage: "linear-gradient(to right, gray 33%, rgba(255,255,255,0) 0%)",
        backgroundPosition: "top",
        backgroundSize: "5px 2px",
        backgroundRepeat: "repeat-x"
    },
    containerL: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    containerR: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    }
  })
);
export default function Footer(){
    const classes = useStyles();
    return <footer>
        <Container maxWidth="md">
            <div className={classes.spBox}>
                <Grid container spacing={4}>
                    <Grid item xs={8} md={8} className={classes.containerL}>
                    <nav id="navFooter">
                        <ul>
                            <li><Link to="/terms">Terms & conditions</Link></li>
                            <li><Link to="/policy">Privacy policy</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                        </ul>
                    </nav>
                    </Grid>
                    <Grid item xs={4} md={4} className={classes.containerR}>
                        <div className="follow">Follow us</div>
                        <div className="footerIcon">
                            <a href="https://www.facebook.com/Zemoga" target="_black">
                                <FacebookIcon style={{ color: "#333333",  fontSize:35 }} />
                            </a>
                        </div>
                        <div className="footerIcon">
                            <a href="https://twitter.com/Zemoga" target="_black">
                                <TwitterIcon style={{ color: "#333333",  fontSize:35 }} />
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </footer>
}