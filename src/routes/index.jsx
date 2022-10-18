
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages"
import { useDrawerContext } from "../shared/contexts"

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext()

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
            <Route path="/" element={<Dashboard/>} />
        </Routes>
    )
}