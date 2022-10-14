import { createContext, useCallback, useContext, useState } from "react";


const DrawerContext = createContext({})

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerOptions, setDrawerOptions] = useState([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOptions) => {
        setDrawerOptions(newDrawerOptions)
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    )
}