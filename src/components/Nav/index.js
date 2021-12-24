import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navbar(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        setContactSelected
    } = props;

    return (
        <>
            <header className="flex-row px-1">
                <h2>
                    <a href='/'>
                        <span role="img" aria-label="waving hand"> 👋 </span> It's Will!
                    </a>
                </h2>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="#about" onClick={() => setContactSelected(false)}>
                                About me
                            </a>
                        </li>
                        <li className={"mx-2"}>
                            <span onClick={() => setContactSelected(true)}>
                                Contact
                            </span>
                        </li>
                        {categories.map((category) => (
                            <li className={`mx-1 ${currentCategory.name === category.name
                                }`}
                                key={category.name}>
                                <span
                                    onClick={() => {
                                        setCurrentCategory(category);
                                        setContactSelected(false);
                                    }}
                                >
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar






















// import React from "react";
// import {
//     AppBar,
//     Toolbar,
//     CssBaseline,
//     Typography,
//     makeStyles,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//     navlinks: {
//         marginRight: theme.spacing(50),
//         display: "flex",
//     },
//     logo: {
//         flexGrow: "1",
//         cursor: "pointer",
//     },
//     Link: {
//         textDecoration: "none",
//         color: "white",
//         fontSize: "20px",
//         marginLeft: theme.spacing(20),
//         "&:hover": {
//             color: "#00FF65",
//             borderBottom: "1px solid white",
//         },
//     },
// }));

// function Navbar() {
//     const classes = useStyles();

//     return (
//         <AppBar position="static">
//             <CssBaseline />
//             <Toolbar>
//                 <Typography variant="h2" className={classes.logo}>
//                     WD
//                 </Typography>
//                 <div className={classes.navlinks}>
//                     <Link to="/" className={classes.Link}>
//                         Home
//                     </Link>
//                     <Link to="/about" className={classes.Link}>
//                         About
//                     </Link>
//                     <Link to="/projects" className={classes.Link}>
//                         Projects
//                     </Link>
//                     <Link to="/contact" className={classes.Link}>
//                         Contact
//                     </Link>
//                 </div>
//             </Toolbar>
//         </AppBar>
//     );
// }
// export default Navbar;
