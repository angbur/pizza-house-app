const properties = {
  colorNames: [
    'primary',
    'primaryDark',
    'secondary',
    'secondaryDark',
    'light',
    'tertiary',
    'accent',
    'background',
    'contrastColor',
  ],
  typographyNames: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'page-title',
    'body1',
    'body2',
    'paragraph',
    'button',
    'caption',
    'subtitle1',
    'subtitle2',
  ],
  typographyProperties: ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'],
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
} as const;

type Getters<T extends string, K> = {
  [k in T]?: K;
};

export type HexColor = `#${string}`;

export type ColorVariants = typeof properties.colorNames[number];
type PaletteType = Getters<ColorVariants, HexColor>;

type BreakpointsType = Getters<typeof properties.breakpoints[number], number>;

export type TypographyVariant = typeof properties.typographyNames[number];
type TypographyProps = Getters<typeof properties.typographyProperties[number], string>;
type TypographyType = Getters<TypographyVariant, TypographyProps>;

export type Theme = {
  palette: Partial<PaletteType>;
  typography?: TypographyType;
  breakpoints?: BreakpointsType;
};
