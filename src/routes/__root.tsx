import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { AnimatePresence } from "motion/react";

import { ThemeProvider } from "@/context/theme";
import { MantineProvider, createTheme } from "@mantine/core";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanstackQueryLayout from "../integrations/tanstack-query/layout";

interface MyRouterContext {
	queryClient: QueryClient;
}

const theme = createTheme({
	colors: {
		app: [
			"#ffe9e9",
			"#ffd3d3",
			"#f6a6a6",
			"#ef7575",
			"#e84c4c",
			"#e53232",
			"#e42324",
			"#cb1518",
			"#b60d14",
			"#9f000e",
		],
	},
	primaryColor: "app",
	fontFamily: "Iceland",
});

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<ThemeProvider>
			<AnimatePresence mode="wait" initial={false}>
				<MantineProvider theme={theme} forceColorScheme="dark">
					<Outlet />
					<TanStackRouterDevtools />

					<TanstackQueryLayout />
				</MantineProvider>
			</AnimatePresence>
		</ThemeProvider>
	),
});
