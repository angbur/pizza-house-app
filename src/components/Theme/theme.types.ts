export const themeProperties = {
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
    'main-title',
    'section-title',
    'card-title',
    'card-subtitle',
    'item-title',
    'dialog-title',
    'paragraph',
    'caption',
    'price-tag',
  ],
  typographyProperties: ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'],
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
} as const;

export type Getters<T extends string, K> = {
  [k in T]?: K;
};

export type HexColor = `#${string}`;

export type ColorVariants = typeof themeProperties.colorNames[number];
type PaletteType = Getters<ColorVariants, HexColor>;

type BreakpointsType = Getters<typeof themeProperties.breakpoints[number], number>;

export type TypographyVariant = typeof themeProperties.typographyNames[number];
type TypographyProps = Getters<typeof themeProperties.typographyProperties[number], string>;
type TypographyType = Getters<TypographyVariant, TypographyProps>;

export type Theme = {
  palette: Partial<PaletteType>;
  typography: TypographyType;
  breakpoints?: BreakpointsType;
};
