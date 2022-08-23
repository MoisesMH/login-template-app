import { styled } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const CustomTemplate = styled('div')((props) => ({
    backgroundColor: props.isDarkActive ? "black" : "white",
    height: "100vh",
    width: "100vw"
}))

function PageContent({ children }) {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <CustomTemplate
            isDarkActive={ isDarkMode }
        >
            {children}
        </CustomTemplate>
    )
}

export default PageContent