import { App, Plugin, PluginSettingTab, Setting } from "obsidian";

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
			() => {} //加鼠标click回调函数
		);

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ChemSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, "click", (evt: MouseEvent) => {
			console.log("click", evt);
		});

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

		console.log("chemplugin loaded");
	}

	onunload() {
		console.log("chemplugin unloading");
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
