import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material"

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
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
                <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Salvar
                </Typography>
            </Button>)}

            {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvarEFechar}
            >
                <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Salvar e voltar
                </Typography>
            </Button>)}

            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton width={180} height={60} />)}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>delete</Icon>}
                onClick={aoClicarEmApagar}
            >
                <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Apagar
                </Typography>
            </Button>)}

            {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>add</Icon>}
                onClick={aoClicarEmNovo}
            >
                <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    {textoBotaoNovo}
                </Typography>
            </Button>)}

            {(mostrarBotaoNovoCarregando && !smDown) && (<Skeleton width={110} height={60} />)}

            {
                (
                    mostrarBotaoVoltar &&
                    (mostrarBotaoNovo || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
                ) && (
                    <Divider variant="middle" orientation="vertical" />
                )
            }

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>arrow_back</Icon>}
                onClick={aoClicarEmVoltar}
            >
                <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Voltar
                </Typography>
            </Button>)}

            {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60} />)}

        </Box>
    )
}