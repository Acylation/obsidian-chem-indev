import {
	App,
	Plugin,
	PluginSettingTab,
	Setting,
	WorkspaceLeaf,
} from "obsidian";
import { ChemView, VIEW_TYPE_CHEM } from "./components/view";

interface ChemPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: ChemPluginSettings = {
	mySetting: "default",
};

export default class ChemPlugin extends Plugin {

	settings: ChemPluginSettings;
	
	async onload() {
		await this.loadSettings();

		this.addRibbonIcon(
			"hexagon",
			"This is Chem Plugin, todo: Open Chem-Canvas",
			() => {
				this.activateView();
			}
		);

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ChemSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, "click", (evt: MouseEvent) => {
			console.log("click", evt);
		});

		this.registerView(
			VIEW_TYPE_CHEM,
			(leaf: WorkspaceLeaf) => new ChemView(leaf)
		);

		this.registerMarkdownCodeBlockProcessor("smiles", (source, el, ctx) => {
			const rows = source.split("\n").filter((row) => row.length > 0);

			const table = el.createEl("table");
			const body = table.createEl("tbody");

			for (let i = 0; i < rows.length; i++) {
				const cols = rows[i].split(",");

				const row = body.createEl("tr");

				for (let j = 0; j < cols.length; j++) {
					row.createEl("td", { text: cols[j] });
				}
			}
		});
	}

	onunload() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE_CHEM);
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	/**
	 * activateView opens the main Projects view in a new workspace leaf.
	 * Clarify: from marcusolsson/obsidian-projects
	 * */
	async activateView(): Promise<void> {
		const leaf = await this.getOrCreateLeaf();

		leaf.setViewState({
			type: VIEW_TYPE_CHEM,
			state: {},
		});

		this.app.workspace.revealLeaf(leaf);
	}

	/**
	 * getOrCreateLeaf returns a new leaf, or returns an existing leaf if
	 * Projects is already open.
	 * Clarify: from marcusolsson/obsidian-projects
	 */
	async getOrCreateLeaf(): Promise<WorkspaceLeaf> {
		const existingLeaves =
			this.app.workspace.getLeavesOfType(VIEW_TYPE_CHEM);

		if (existingLeaves[0]) {
			return existingLeaves[0];
		}

		return this.app.workspace.getLeaf(true);
	}
}

class ChemSettingTab extends PluginSettingTab {
	plugin: ChemPlugin;

	constructor(app: App, plugin: ChemPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl("h2", { text: "Settings for my awesome plugin." });

		new Setting(containerEl)
			.setName("Setting #1")
			.setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder("Enter your secret")
					.setValue(this.plugin.settings.mySetting)
					.onChange(async (value) => {
						console.log("Secret: " + value);
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
					})
			);
	}
}
