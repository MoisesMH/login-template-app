import { styled } from "@mui/material";
import React, { Component } from "react";
import { ThemeContext } from "./context/ThemeContext";

const CustomTemplate = styled('div')((props) => ({
    backgroundColor: props.isDarkActive ? "black" : "white",
    height: "100vh",
    width: "100vw"
}))

class PageContent extends Component {
    static contextType = ThemeContext
    render() {
        const { isDarkMode } = this.context
        return (
            <CustomTemplate
                isDarkActive={ isDarkMode }
            >
                {this.props.children}
            </CustomTemplate>
        )
    }
}

export default PageContent