import { ThemeOptions } from "@mui/material";
import { blueGrey, green } from "@mui/material/colors";

export interface BaseTheme {
    colors: {
        primaryLight: string
        primaryMain: string,
        primaryDark: string,
        contrastText: string,
        secondaryMain: string
    }
}

const baseTheme: BaseTheme = {
    colors: {
        primaryLight: '#4A4A4A',
        primaryMain: '#242424',
        primaryDark: '1A1A1A',
        contrastText: '#fff',
        secondaryMain: '#00e676'
    }
}

const muiTheme: ThemeOptions = {
    palette: {
        primary: {
            main: baseTheme.colors.primaryMain,
            light: baseTheme.colors.primaryMain,
            dark: baseTheme.colors.primaryDark,
            contrastText: baseTheme.colors.contrastText
        },
        secondary: green
    }
}


export { baseTheme, muiTheme };