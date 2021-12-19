import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
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
    const theme = useTheme();

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

// function Nav() {
//     //Instead of just listing each category's name, we'll create objects that contain each category's name and a short description
//     const categories = [
//         {
//             name: "front-end",
//             description: "Full stack web projects featuring simple, elegant designs"
//         },
//         {
//             name: "back-end",
//             description: "CLI applications geared towards functionality for CMS projects"
//         },
//         {
//             name: "radio",
//             description: "Samples of my weekly sports radio show in Portland, OR"
//         }
//     ]
//     function categorySelected () {
//             alert("Fuck You")
//     }
//     return (
//         <header>
//             <h2>
//                 <a href="/">
//                     <span role="img" aria-label="Waving Hand"> 👋</span> WD
//                 </a>
//             </h2>
//             <nav>
//                 <ul>
//                     <li>
//                         <a href='#about'>
//                             About Me
//                         </a>
//                     </li>
//                     <li>
//                         <span>
//                             Contact
//                         </span>
//                     </li>
//                     {/* map over the cateogires array to display in the nav bar */}
//                     {categories.map((category) => (
//                         <li key={category.name}>
//                             <span onClick={() => categorySelected()} >
//                             {capitalizeFirstLetter(category.name)}
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Nav


