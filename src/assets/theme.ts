import { ThemeOptions } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

export interface BaseTheme {
    colors: {
        primaryLight: string
        primaryMain: string,
        primaryDark: string,
        contrastText: string
    }
}

const baseTheme: BaseTheme = {
    colors: {
        primaryLight: '#4A4A4A',
        primaryMain: '#242424',
        primaryDark: '1A1A1A',
        contrastText: '#fff'
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
        secondary: grey
    }
}


export { baseTheme, muiTheme };