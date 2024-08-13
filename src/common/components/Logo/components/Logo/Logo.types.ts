/**
 * Logo Type
 */
export type LogoType = 'default' | 'full';

/**
 * Logo Props
 */
export type LogoProps = Omit<React.HTMLProps<HTMLImageElement>, 'src' | 'alt'> & {
    asLink?: boolean | undefined;
    asType?: LogoType | undefined;
};