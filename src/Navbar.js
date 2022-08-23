import { Search } from "@mui/icons-material";
import { AppBar, IconButton, InputBase, Switch, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { ThemeContext } from "./context/ThemeContext";
import { CustomNavbar, classes } from "./styles/NavbarStyles";

const content = (function() {
    const words = new Map()
    words.set("english", {
        search: "Search",
        flag: "🇬🇧"
    })
    words.set("french", {
        search: "Chercher",
        flag: "🇫🇷"
    })
    words.set("spanish", {
        search: "Buscar",
        flag: "🇲🇽"
    })
    return words
}())

function Navbar() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)
    const { search, flag } = content.get(language)
    return (
        <CustomNavbar className={classes.root}>
            <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span>{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onClick={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase 
                            placeholder={`${search}...`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </CustomNavbar>
    )    
}

// Now we don't use the higher order component withLanguageContext
// export default withLanguageContext(Navbar)
// because we're consuming two contexts using the hook useContext, which can be used one, two or more times
// which can only be used in a react functional component instead of a class component

export default Navbar