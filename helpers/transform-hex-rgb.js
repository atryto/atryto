// Packages
import hexRgb from 'hex-rgb'

function transformHexRgb(color) {
  const hex = color.replace('#', '')
  const { red, green, blue } = hexRgb(hex)

  return `${red}, ${green}, ${blue}`
}

export default transformHexRgb
