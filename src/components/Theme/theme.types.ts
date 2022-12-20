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
    'mainTitle',
    'sectionTitle',
    'cardTitle',
    'itemTitle',
    'paragraph',
    'caption'],
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

type TypographyVariant = typeof properties.typographyNames[number];
type TypographyProps = Getters<typeof properties.typographyProperties[number], string>;
type TypographyType = Getters<TypographyVariant, TypographyProps>;

export type Theme = {
  palette: Partial<PaletteType>;
  typography: TypographyType;
  breakpoints?: BreakpointsType;
};
