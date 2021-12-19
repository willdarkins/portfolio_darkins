import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginRight: theme.spacing(50),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    Link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "#00FF65",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h2" className={classes.logo}>
                    WD
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.Link}>
                        Home
                    </Link>
                    <Link to="/about" className={classes.Link}>
                        About
                    </Link>
                    <Link to="/projects" className={classes.Link}>
                        Projects
                    </Link>
                    <Link to="/contact" className={classes.Link}>
                        Contact
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
