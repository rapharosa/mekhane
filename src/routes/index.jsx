import { Button } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext()

    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />
        </Routes>
    )
}