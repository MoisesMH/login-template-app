import { styled } from "@mui/material";

const PREFIX = 'Form';
const classes = {
    main: `${PREFIX}`,
    paper: `${PREFIX}-paper`,
    avatar: `${PREFIX}-avatar`,
    form: `${PREFIX}-form`,
    submit: `${PREFIX}-submit`
}

const CustomForm = styled('main')(({ theme }) => ({
    [`&.${classes.main}`]: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("sm")] : {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    [`& .${classes.paper}`]: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
    },
    [`& .${classes.avatar}`]: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    [`& .${classes.form}`]: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    [`& .${classes.submit}`]: {
        marginTop: theme.spacing(3)
    }
}))

export { CustomForm, classes }