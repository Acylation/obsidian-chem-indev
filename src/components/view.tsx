import { ItemView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactView } from "./ReactView"
import { createRoot } from "react-dom/client";
import { AppContext } from "./context";

export const VIEW_TYPE_CHEM = "chem-view";

export class ChemView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType() {
        return VIEW_TYPE_CHEM;
    }

    getDisplayText() {
        return "Chem view";
    }

    async onOpen() {
        const root = createRoot(this.containerEl.children[1]);
        root.render(
            <React.StrictMode>
                <AppContext.Provider value={this.app}>
                    <ReactView />
                </AppContext.Provider>
            </React.StrictMode>
        ); 
    }

    async onClose() {
        ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
    }
}