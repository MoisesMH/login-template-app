import React, { createContext } from "react";
import useInputState from "../hooks/useInputState";

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, changeLanguage] = useInputState("english")

    return (
        // Passing the prop globally with the context provider
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

// Workaround: higher order component to consume the language context
export const withLanguageContext = Component => ((props) => (
    <LanguageContext.Consumer>
        {/* value is context: {...this.state, changeLanguage: this.changeLang} */}
        {/* We're also passing the props */}
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
))