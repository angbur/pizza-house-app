const colorNames= ['primary', 'secondary','tertiary', 'accent', 'background'] as const;
const colorHue = ['main','light', 'lighter', 'dark', 'darker', 'contrastColor'] as const;
const typographyNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'paragraph', 'button', 'caption', 'subtitle1', 'subtitle2'] as const;
const typographyProperties = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight'] as const;
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

type Getters<T extends string, K> = {
    [k in T]?: K
};

type ColorNameInPalette = (typeof colorNames)[number];
type HexColor = `#${string}`;
type ColorHue = (typeof colorHue)[number];

type ColorHueType = Getters<ColorHue, HexColor>;
type Color = HexColor;

type BreakpointsNameInPalette = (typeof breakpoints)[number];

type TypographyNameInPalette = (typeof typographyNames)[number];
type TypographyPropertiesTypes = (typeof typographyProperties)[number];

type PaletteType = Getters<ColorNameInPalette, (Color | ColorHueType)>;

type BreakpointsType = Getters<BreakpointsNameInPalette, number>;

type TypographyProps = Getters<TypographyPropertiesTypes, string>;
type TypographyType = Getters<TypographyNameInPalette, TypographyProps>;

export type Theme = {
    palette: PaletteType;
    typography?: TypographyType;
    breakpoints?: BreakpointsType;
};