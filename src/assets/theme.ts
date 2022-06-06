import { Palette, PaletteColorOptions, ThemeOptions } from "@mui/material";
import { blueGrey, green, blue } from "@mui/material/colors";

const spectraRed: PaletteColorOptions = {
    main: '#b5121b',
    light: '#B52C33',
    dark: '#5D0F13',
    contrastText: '#ffffff'
} 

const spectraGray: PaletteColorOptions = {
    light: '#636466',
    main: '#282829',
    dark: '#000000',
    contrastText: '#ffffff'
}

const spectraBlue: PaletteColorOptions = {
    main: '#5d87a1',
    dark: '#335d77',
    light: '#65bcf1'
}

const spectraOrange: PaletteColorOptions = {
    main: '#e58e1a',
    dark: '#925b14',
    light: '#fcb14f'
}

const spectraPurp: PaletteColorOptions = { 
    main: '#7a68ae',
    light: '#c4b0ff',
    dark: '#260f6b'

}

export interface BaseTheme {
    colors: {
        backgroundDark: string,
        backgroundLight: string
        primaryLight: string
        primaryMain: string,
        primaryDark: string,
        contrastText: string,
        secondaryMain?: string
        secondaryLight?: string
        secondaryDark?: string
    }
}

export const baseThemeA: BaseTheme = {
    colors: {
        backgroundDark: '#242424',
        backgroundLight: '#fff',
        primaryLight: '#4A4A4A',
        primaryMain: '#242424',
        primaryDark: '#1A1A1A',
        contrastText: '#fff',
        secondaryMain: blue["500"], //spectraBlue.main,
        secondaryDark: blue["900"], //spectraBlue.dark,
        secondaryLight: blue["300"] //spectraBlue.light
    }
}

export const baseThemeB: BaseTheme = {
    colors: {
        backgroundDark: '#282828',
        backgroundLight: '#FFFFFF',
        primaryDark: '#000',
        primaryMain: spectraGray.main,
        primaryLight: '#636466',
        secondaryMain: '#b5121b',
        secondaryLight: '#B52C33',
        secondaryDark: '#5D0F13',
        contrastText: '#FFFFFF'
    }
}

export const baseThemeC: BaseTheme = { 
    colors: {
        backgroundDark: '#282828',
        backgroundLight: '#FFFFFF',
        primaryDark: '#000',
        primaryMain: spectraGray.main,
        primaryLight: '#636466',
        secondaryMain: spectraOrange.main,
        secondaryLight: spectraOrange.light,
        secondaryDark: spectraOrange.dark,
        contrastText: '#FFFFFF'
    }
}

export const baseThemeD: BaseTheme = { 
    colors: {
        backgroundDark: '#282828',
        backgroundLight: '#FFFFFF',
        primaryDark: '#000',
        primaryMain: spectraGray.main,
        primaryLight: '#636466',
        secondaryMain: spectraPurp.main,
        secondaryLight: spectraPurp.light,
        secondaryDark: spectraPurp.dark,
        contrastText: '#FFFFFF'
    }
}

export const muiThemeA: ThemeOptions = {
    typography: {
        body1: {
        }
    },
    palette: {
        primary: {
            main: baseThemeA.colors.primaryMain,
            light: baseThemeA.colors.primaryLight,
            dark: baseThemeA.colors.primaryDark,
            contrastText: baseThemeA.colors.contrastText
        },
        secondary: blue,
        success: blue
    }
}

export const muiThemeB: ThemeOptions = {
    palette: {
        primary: spectraGray,
        secondary: spectraRed,
        error: spectraGray,
        info: spectraBlue,
        success: spectraRed,
        warning: spectraOrange
    }
}

export const muiThemeC: ThemeOptions = {
    palette: {
        primary: spectraGray,
        secondary: spectraOrange,
        error: spectraGray,
        info: spectraBlue,
        success: spectraOrange,
        warning: spectraRed
    }
}

export const muiThemeD: ThemeOptions = {
    palette: {
        primary: spectraGray,
        secondary: spectraPurp,
        error: spectraRed,
        info: spectraBlue,
        success: spectraPurp,
        warning: spectraRed
    }
}




// export { baseThemeA, baseThemeB, muiThemeA, muiThemeB };