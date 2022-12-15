const properties = {
  colorNames: ['primary', 'secondary', 'tertiary', 'accent', 'background'],
  colorHue: ['main', 'light', 'lighter', 'dark', 'darker', 'contrastColor'],
  typographyNames: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body1',
    'body2',
    'paragraph',
    'button',
    'caption',
    'subtitle1',
    'subtitle2',
  ],
  typographyProperties: ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight'],
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
} as const;

type Getters<T extends string, K> = {
  [k in T]?: K;
};

type HexColor = `#${string}`;

type Color = HexColor;
type ColorHueType = Getters<typeof properties.colorHue[number], HexColor>;
type PaletteType = Getters<typeof properties.colorNames[number], Color | ColorHueType>;

type BreakpointsType = Getters<typeof properties.breakpoints[number], number>;

type TypographyProps = Getters<typeof properties.typographyProperties[number], string>;
type TypographyType = Getters<typeof properties.typographyNames[number], TypographyProps>;

export type Theme = {
  palette: PaletteType;
  typography?: TypographyType;
  breakpoints?: BreakpointsType;
};
