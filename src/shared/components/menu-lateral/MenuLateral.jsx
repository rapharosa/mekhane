import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box } from "@mui/system"

export const MenuLateral = ({ children }) => {
    const theme = useTheme()

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>

                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://github.com/rapharosa.png" />
                    </Box>

                    <Divider />
                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Página inicial' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>notebook</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Relatórios' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>add</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Novo relatório' />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}