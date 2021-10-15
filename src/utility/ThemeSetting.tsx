import { ThemeProvider, ThemeProviderProps, useTheme } from "next-themes";

type UseTheme = () => [isDark: () => boolean, toggleTheme: () => void];

const DARK = "dark";
const LIGHT = "light";

const Use: UseTheme = () => {
    const { resolvedTheme: theme, setTheme } = useTheme();

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
