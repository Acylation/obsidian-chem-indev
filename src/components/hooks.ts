import * as React from "react";
import { App } from "obsidian";
import { AppContext } from "./context";

export const useApp = (): App | undefined => {
	const context = React.useContext(AppContext);
	if (!context) {
		throw new Error("useView must be used within a AppContext.Provider");
	}
	return context;
};
