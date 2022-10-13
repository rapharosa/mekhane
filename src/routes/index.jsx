import { Button } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { useAppThemeContext } from "../shared/contexts"

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext()

    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>} />
        </Routes>
    )
}