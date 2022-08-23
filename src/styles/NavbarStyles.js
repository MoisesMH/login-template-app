import { styled, alpha } from "@mui/material";

const PREFIX = 'Navbar';
const classes = {
    root: `${PREFIX}`,
    grow: `${PREFIX}-grow`,
    menuButton: `${PREFIX}-menuButton`,
    title: `${PREFIX}-title`,
    search: `${PREFIX}-search`,
    searchIcon: `${PREFIX}-searchIcon`,
    inputRoot: `${PREFIX}-inputRoot`,
    inputInput: `${PREFIX}-inputInput`
}

const CustomNavbar = styled('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        width: "100%",
        marginBottom: 0
    },
    [`& .${classes.grow}`]: {
        flexGrow: 1
    },
    [`& .${classes.menuButton}`]: {
        marginLeft: -12,
        marginRight: 20
    },
    [`& .${classes.title}`]: {
        display: "none",
        [theme.breakpoints.up("sm")] : {
            display: "block"
        }
    },
    [`& .${classes.title}`]: {
        display: "none",
        [theme.breakpoints.up("sm")] : {
            display: "block"
        }
    },
    [`& .${classes.search}`]: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")] : {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    [`& .${classes.searchIcon}`]: {
        width: theme.spacing(9),
        height: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    [`& .${classes.inputRoot}`]: {
        color: "inherit",
        width: "100%"
    },
    [`& .${classes.inputInput}`]: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")] : {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    }
}))

export { CustomNavbar, classes }