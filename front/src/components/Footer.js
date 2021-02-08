import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spBox: {
        marginTop: "34px",
        paddingBottom: "10px"
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
                            <li><a href="">Terms & conditions</a></li>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Contact us</a></li>
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