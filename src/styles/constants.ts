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

const gap = 64;

const size = {
  tablet: '769px',
  desktop: `${960 + 2 * gap}px`,
  widescreen: `${1152 + 2 * gap}px`,
  fullhd: `${1344 + 2 * gap}px`,
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  widescreen: `(min-width: ${size.widescreen})`,
  fullhd: `(min-width: ${size.fullhd})`,
};

export const widths = {
  desktop: `${960 - 2 * gap}px`,
  widescreen: `${1152 - 2 * gap}px`,
  fullhd: `${1344 - 2 * gap}px`,
}

export const heights = {
  header: 64,
}
