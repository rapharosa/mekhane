import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material"
import { DarkTheme, LightTheme } from "../themes";
import { Box } from "@mui/system";

const ThemeContext = createContext({})

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider = ({children}) => {
    const [themeName, setThemeName] = useState('LightTheme')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'LightTheme' ? 'DarkTheme' : 'LightTheme')
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'LightTheme') return LightTheme

        return DarkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}