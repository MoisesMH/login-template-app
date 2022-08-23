import { Search } from "@mui/icons-material";
import { AppBar, IconButton, InputBase, Switch, Toolbar, Typography } from "@mui/material";
import React, { Component } from "react";
import { withLanguageContext } from "./context/LanguageContext";
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

class Navbar extends Component {
    static contextType = ThemeContext
    render() {
        // console.log(this.context);
        // // Object { isDarkMode: true, tastesLikeChicken: true }
        const { isDarkMode, toggleTheme } = this.context
        const { language } = this.props.languageContext
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
}

export default withLanguageContext(Navbar)