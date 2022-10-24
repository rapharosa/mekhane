import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"

export const Relatorios = () => {

    const tipoDeManutencao = [
        {
            value: 'Preventiva',
        },
        {
            value: 'Corretiva',
        },
        {
            value: 'Preditiva',
        }
    ];

    return (
        <Box margin={3} display='flex' flexDirection='column' gap={2} width={600}>
            <TextField label='Nome' helperText='Insira seu nome completo' />
            <TextField
                type="date"
                InputLabelProps={{ shrink: true }}
                label='Data'
                helperText='Data que foi realizada a manutenção' />
            <TextField label='Equipamento' helperText='Em qual equipamento foi feito a manutenção?' />

            <FormLabel id="tipoManutencao">Tipo de manutenção</FormLabel>
            <RadioGroup
                aria-labelledby="tipoManutencao"
                name="tipoManutencao"
                row
            >
                <FormControlLabel value="Preventiva" control={<Radio />} label="Preventiva" />
                <FormControlLabel value="Preditiva" control={<Radio />} label="Preditiva" />
                <FormControlLabel value="Corretiva" control={<Radio />} label="Corretiva" />

            </RadioGroup>

            <FormLabel id="maquinaParada">Maquina parada?</FormLabel>
            <RadioGroup
                aria-labelledby="maquinaParada"
                name="maquinaParada"
                row
            >
                <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="Nao" control={<Radio />} label="Não" />

            </RadioGroup>

            <TextField
                id="descricao"
                label="Descrição"
                multiline
                rows={4}
                helperText='Descreva o que foi feito'
                InputLabelProps={{ shrink: true }}
            />

            <Button type="submit" variant="outlined"><Typography>Enviar</Typography></Button>
        </Box>

    )
}