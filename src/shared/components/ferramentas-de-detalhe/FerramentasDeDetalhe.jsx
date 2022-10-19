import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material"

export const FerramentasDeDetalhe = ({
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoSalvarEFechar = false,
    
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

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
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (<Button
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvar}
            >
                Salvar
            </Button>)}

            {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvarEFechar}
            >
                Salvar e voltar
            </Button>)}

            {mostrarBotaoSalvarEFecharCarregando && (<Skeleton width={180} height={60} />)}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                endIcon={<Icon>delete</Icon>}
                onClick={aoClicarEmApagar}
            >
                Apagar
            </Button>)}

            {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>add</Icon>}
                onClick={aoClicarEmNovo}
            >
                {textoBotaoNovo}
            </Button>)}

            {mostrarBotaoNovoCarregando && (<Skeleton width={110} height={60} />)}

            <Divider variant="middle" orientation="vertical" />
            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                endIcon={<Icon>arrow_back</Icon>}
                onClick={aoClicarEmVoltar}
            >
                Voltar
            </Button>)}

            {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60} />)}

        </Box>
    )
}