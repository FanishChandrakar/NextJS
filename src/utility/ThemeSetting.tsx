import { ThemeProvider, ThemeProviderProps, useTheme } from "next-themes";

const DARK = "dark";
const LIGHT = "light";

const Use = (): [isDark: () => boolean, toggleTheme: () => void] => {
    const { theme, setTheme } = useTheme();

    const isDark = () => theme === DARK;
    const isLight = () => theme === LIGHT;
    const setDark = () => setTheme(DARK);
    const setLight = () => setTheme(LIGHT);
    const toggleTheme = () => (isLight() ? setDark() : setLight());

    return [isDark, toggleTheme];
};

const Provider: React.FC<ThemeProviderProps> = (props) => (
    <ThemeProvider {...props} enableSystem={true} defaultTheme="system" />
);

const Theme = { Provider, Use };
export default Theme;
