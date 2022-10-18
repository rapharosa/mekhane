import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"

export const BarraDeFerramentas = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    aoClicarEmNovo,
    mostrarBotaoNovo = true,
    textoBotaoNovo = 'Novo'
}) => {
    const theme = useTheme()

    return (
        <Box
            height={theme.spacing(5)}
            marginX={3}
            padding={1}
            paddingX={2}
            display='flex'
            gap={1}
            alignItems='center'
            justifyContent='space-between'
            component={Paper}
        >
            {mostrarInputBusca &&
                (<TextField
                    size="small"
                    placeholder="Pesquisar..."
                    value={textoDaBusca}
                    onChange={(e) => aoMudarTextoDeBusca(e.target.value)}
                />)}

            {mostrarBotaoNovo &&
                (<Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    endIcon={<Icon>add</Icon>}
                    onClick={aoClicarEmNovo}
                >
                    {textoBotaoNovo}
                </Button>)}
        </Box>
    )
}