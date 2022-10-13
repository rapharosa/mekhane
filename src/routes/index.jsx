import { Button } from "@mui/material"
import { Route, Routes } from "react-router-dom"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary">Teste</Button>} />
        </Routes>
    )
}