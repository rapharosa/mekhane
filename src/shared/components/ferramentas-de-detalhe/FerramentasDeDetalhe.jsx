import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"

export const FerramentasDeDetalhe = ({
    textoBotaoNovo = 'Novo', 
    mostrarBotaoNovo = true, 
    mostrarBotaoApagar = true, 
    mostrarBotaoSalvar = true, 
    mostrarBotaoVoltar = true, 
    mostrarBotaoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
    aoClicarEmVoltar
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
            component={Paper}
        >
            {mostrarBotaoSalvar && (<Button
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvar}
            >
                Salvar
            </Button>)}
            {mostrarBotaoSalvarEFechar && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvarEFechar}
            >
                Salvar e voltar
            </Button>)}
            {mostrarBotaoApagar && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                endIcon={<Icon>delete</Icon>}
                onClick={aoClicarEmApagar}
            >
                Apagar
            </Button>)}
            {mostrarBotaoNovo && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>add</Icon>}
                onClick={aoClicarEmNovo}
            >
                {textoBotaoNovo}
            </Button>)}
            <Divider variant="middle" orientation="vertical" />
            {mostrarBotaoVoltar && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                endIcon={<Icon>arrow_back</Icon>}
                onClick={aoClicarEmVoltar}
            >
                Voltar
            </Button>)}
        </Box>
    )
}