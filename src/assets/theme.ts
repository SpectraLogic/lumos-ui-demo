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
        primaryLight: blueGrey[200],
        primaryMain: blueGrey[600],
        primaryDark: blueGrey[800],
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