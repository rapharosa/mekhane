import { Button } from "@mui/material"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/'
            },
            {
                label: 'Relatórios',
                icon: 'notebook',
                path: '/relatorios'
            },
            {
                label: 'Novo relatório',
                icon: 'add',
                path: '/novo-relatorio'
            },
        ])
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />
        </Routes>
    )
}