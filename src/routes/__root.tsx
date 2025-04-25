import { AnimatePresence } from "motion/react";

import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanstackQueryLayout from "../integrations/tanstack-query/layout";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<AnimatePresence mode="wait" initial={false}>
			<Outlet />
			<TanStackRouterDevtools />

			<TanstackQueryLayout />
		</AnimatePresence>
	),
});
