// Packages
import { darken, lighten } from 'polished'

// Helpers
import transformHexRgb from '../helpers/transform-hex-rgb'

const typography = {
  h100: {
    fontSize: '42px',
    lineHeight: '44px',
    fontWeight: '700'
  },
  h200: {
    fontSize: '28px',
    lineHeight: '32px',
    fontWeight: '700'
  },
  h300: {
    fontSize: '26px',
    lineHeight: '32px',
    fontWeight: '500'
  },
  h400: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '500'
  },
  h500: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '700'
  },
  h600: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '700'
  },
  h700: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '700'
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    marginBottom: '12px'
  },
  caption: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '500'
  }
}

const designTokens = {
  shadow: Object.assign(
    color => `0 2px 6px rgba(${transformHexRgb(color)}, .25)`,
    {
      small: color => `0 1px 1px rgba(${transformHexRgb(color)}, .16)`,
      medium: color => `0 8px 10px rgba(${transformHexRgb(color)}, .16)`,
      large: color => `0 24px 32px rgba(${transformHexRgb(color)}, .16)`
    }
  ),
  spacing: Object.assign('8px', {
    small: '4px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
    xxLarge: '40px',
    xxxLarge: '48px'
  }),
  transition: 'all 0.2s ease-in-out',
  responsive: {
    phone: 'screen and (max-width: 580px)'
  },
  radius: Object.assign('3px', {
    small: '2px',
    medium: '4px',
    large: '6px'
  })
}

const primary = '#5139EF'
const white = '#ffffff'
const black = '#0e1012'
const green = '#00A878'
const red = '#E15554'
const yellow = '#FEB64D'

const colors = {
  black: Object.assign(black, {
    lighter: lighten('0.45', black),
    light: lighten('0.1', black),
    dark: darken('0.025', black),
    darker: darken('0.45', black)
  }),
  white: Object.assign(white, {
    lighter: lighten('0.45', white),
    light: lighten('0.1', white),
    dark: darken('0.1', white),
    darker: darken('0.45', white)
  }),
  primary: Object.assign(primary, {
    lighter: lighten('0.2', primary),
    light: lighten('0.1', primary),
    dark: darken('0.025', primary),
    darker: darken('0.1', primary)
  }),
  secondary: '#A4A8B3',
  gray: Object.assign('#17191b', {
    lighter: '#959697',
    light: '#414244',
    dark: '#131517',
    darker: '#0f1012'
  }),
  red: Object.assign(red, {
    lighter: lighten('0.2', red),
    light: lighten('0.1', red),
    dark: darken('0.025', red),
    darker: darken('0.1', red)
  }),
  green: Object.assign(green, {
    lighter: lighten('0.2', green),
    light: lighten('0.1', green),
    dark: darken('0.025', green),
    darker: darken('0.1', green)
  }),
  yellow: Object.assign(yellow, {
    lighter: lighten('0.2', yellow),
    light: lighten('0.1', yellow),
    dark: darken('0.025', yellow),
    darker: darken('0.1', yellow)
  })
}

export { colors, typography, designTokens }
