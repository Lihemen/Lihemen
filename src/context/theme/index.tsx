import {
	type PropsWithChildren,
	createContext,
	use,
	useEffect,
	useState,
} from "react";

type Theme = "dark" | "orange" | "blue" | "default" | "green";

const ThemeContext = createContext<{
	theme: [theme: Theme, changeTheme: (theme: Theme) => void];
	text: [textSize: string, changeSize: (size: string) => void];
}>({
	theme: ["default", () => {}],
	text: ["16px", () => {}],
});

export function ThemeProvider({ children }: PropsWithChildren) {
	const getTheme = (): Theme => {
		return (localStorage.getItem("theme") as Theme) ?? "default";
	};

	const getTextSize = (): string => {
		return localStorage.getItem("textSize") ?? "16px";
	};

	const [colorScheme, setColorScheme] = useState<Theme>(() => getTheme());
	const [textSize, setTextSize] = useState(() => getTextSize());

	const changeTheme = (theme: Theme) => {
		localStorage.setItem("theme", theme);
		setColorScheme(theme);
	};

	const changeSize = (size: string) => {
		localStorage.setItem("textSize", size);
		setTextSize(size);
	};

	// Sync on initial render
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", colorScheme);
		document.documentElement.style.setProperty("--text-size", textSize);
	}, [colorScheme, textSize]);

	return (
		<ThemeContext.Provider
			value={{
				text: [textSize, changeSize],
				theme: [colorScheme, changeTheme],
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export const useThemeContext = () => use(ThemeContext);
