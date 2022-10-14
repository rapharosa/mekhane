import { createContext, useCallback, useContext, useState } from "react";


const DrawerContext = createContext({})

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider = ({ children }) => {
    const [isDrawerOpen, setisDrawerOpen] = useState(false)

    const toggleDrawerOpen = useCallback(() => {
        setisDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}