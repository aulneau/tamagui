import { createFont, createTokens } from 'tamagui'

import { darkColorsPostfixed, light } from './colors'

const size = {
  0.25: 0.5,
  0.5: 1,
  0: 2,
  1: 6,
  2: 10,
  3: 15,
  4: 20,
  5: 25,
  6: 30,
  7: 40,
  8: 50,
  9: 65,
  10: 75,
  11: 85,
  12: 100,
  true: 10,
}

const space = {
  ...size,
  // negative spaces matching size
  ...Object.fromEntries(Object.entries(size).map(([k, v]) => [`-${k}`, -v])),
}

const interFont = createFont({
  family:
    'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  size: {
    1: 10,
    2: 12,
    3: 14,
    4: 15,
    5: 17,
    6: 18,
    7: 22,
    8: 24,
    9: 36,
    10: 44,
    11: 68,
    12: 76,
  },
  lineHeight: {
    1: 15,
    2: 26,
    3: 18,
    4: 20,
    5: 25,
    6: 30,
    7: 36,
    8: 40,
    9: 46,
    10: 53,
    11: 75,
    12: 84,
  },
  weight: {
    4: '300',
    7: '600',
    8: '700',
  },
  letterSpacing: {
    4: 0,
    7: -1,
    9: -2,
    10: -3,
    12: -4,
  },
})

export const tokens = createTokens({
  size,
  space,
  font: {
    title: interFont,
    body: interFont,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
  color: {
    ...light,
    ...darkColorsPostfixed,
  },
  radius: {
    0: 0,
    1: 3,
    2: 5,
    3: 7,
    4: 9,
    5: 10,
    6: 12,
    7: 16,
    8: 20,
    9: 30,
  },
})