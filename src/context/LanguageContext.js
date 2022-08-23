import React, { Component, createContext } from "react";

export const LanguageContext = createContext()

export class LanguageProvider extends Component {
    constructor(props) {
        super(props)
        this.state = { language: "english" }
        this.changeLang = this.changeLang.bind(this)
    }

    changeLang(e) {
        this.setState({ language: e.target.value })
    }
    render() {
        return (
            // Passing the prop globally with the context provider
            <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLang}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

// Workaround: higher order component to consume the language context
export const withLanguageContext = Component => ((props) => (
    <LanguageContext.Consumer>
        {/* value is context: {...this.state, changeLanguage: this.changeLang} */}
        {/* We're also passing the props */}
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
))