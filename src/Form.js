import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import React, { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { CustomForm, classes } from "./styles/FormStyles";

const wordsMap = (function() {
    const words = new Map()
    words.set("english", {
        signIn: "Sign in",
        email: "Email",
        password: "Password",
        remember: "Remember Me"
    })
    words.set("french", {
        signIn: "Se Connecter",
        email: "Adresse Électronique",
        password: "Mot de Passe",
        remember: "Souviens-toi De Moi"
    })
    words.set("spanish", {
        signIn: "Iniciar Sesión",
        email: "Correo Electrónico",
        password: "Contraseña",
        remember: "Recuérdame"
    })
    return words
}())

function Form(props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { email, signIn, password, remember } = wordsMap.get(language)    
    return (
        <CustomForm classname={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{signIn}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name="email" autoFocus/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name="password" autoFocus/>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label={remember}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        color="primary"
                        className={classes.submit}
                    >
                        {signIn}
                    </Button>
                </form>
            </Paper>
        </CustomForm>
    )
}

export default Form