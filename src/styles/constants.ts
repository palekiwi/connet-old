export const colors = {
  //base: 'hsl(195, 92%, 38%)',
  base: 'hsl(195, 0%, 38%)',
  //accent: 'hsl(33, 86%, 67%)',
  accent: 'hsl(33, 0%, 67%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 10%)',
  gray: 'hsl(0, 0%, 90%)'
}

export const fonts = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140,
}

export const heights = {
  header: 60,
}
