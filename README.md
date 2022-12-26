# Obsidian Chem

Obisidian Chem 为Obisidian 提供结构式绘制、渲染等功能，使您能够在笔记中添加化学式、结构式

## Features

### 2D Sketcher
- [ ] [Ketcher](https://lifescience.opensource.epam.com/ketcher) Integration (Standalone version)
- [ ] 在笔记中渲染SMILES字符串/InCHI字符串为Chem Canvas, with 内置结构编辑窗口，参考[obsidian-admonition](https://github.com/valentine195/obsidian-admonition)
- [ ] 提供选项，是否展示化合物信息(Analysis Window)
- [ ] 在笔记中插入化学结构链接，with 独立结构编辑窗口/Chemdraw联用器，以附件形式插入
- [ ] 在Canvas中插入化学对象
- [ ] ChemDraw Clipboard Support
- [ ] Import/Export \*.mol files, \*.gjf files etc.
- [ ] Export graphs/string/name etc.
- [ ] OCR, 调用已有ChemOCR 库，或使用联网的Ketcher
- [ ] 【长期】重写编辑器，提供类似ChemDraw的使用体验，需要处理翻译器、渲染器、交互、样式设计等复杂问题，预计用 Cpp+Qt 实现初版，打包后移植上nodejs
- [ ] 【Optional】InChI Integration

### 3D Sketcher, Crystals, Bio & supermolecule
- [ ] [miew](https://github.com/epam/miew)
- [ ] Diamond embedded

### Chemical Formula Supoort
- [ ] 字符串处理库，cpp or ts
- [ ] Obsidian渲染，使用Markdown内建LaTex 或 HTML 编辑
- [ ] 在线渲染方案，以 Plain String 存储
- [ ] 输入转换方案，以 Formatted String 存储
- [ ] 中英文俗名-化学式对应库，允许用户编辑，整合自动填充
- [ ] 复制导出格式：Word、HTML、图片等
- [ ] 化学方程式支持及自动配平校正，提供标准的等号、箭头、物态标注方案，需要强大的数学库，热力学、动力学数据标记支持
- [ ] 整合结构式的化学方程式
- [ ] 核方程式

### Chemical Support
- [ ] 结构式、化学式、CAS、商城直通，基本数据、理化性质、MSDS数据做表
- [ ] 内建Markdown表格或DB，提供导出方案（ChemDraw for Excel）

### Spectrum Support
- [ ] 化学常用谱图

### ChemGraphs
- [ ] 仪器装置图
- [ ] 反应流程图

## Development

### 技术选型
- 框架：React, Vue, Svelte
- 语言：Typescript
- Core：Ketcher & Indigo

### 兼容性
- InChI & SMILES support by Ketcher
- MOL files and other coordinate files

### 项目任务：
- [ ] 帮助文档
- [ ] License
- [ ] 发布
- [ ] Github 工作流
- [ ] Roadmap in Github Project
- [ ] 移动端兼容
- [ ] i18n
- [ ] a11y

## Memo
2022-12-26: 该插件正在构想阶段，在半年内无法提供可用包

---
# Obsidian Sample Plugin

This is a sample plugin for Obsidian (https://obsidian.md).

This project uses Typescript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

This sample plugin demonstrates some of the basic functionality the plugin API can do.
- Changes the default font color to red using `styles.css`.
- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.
- Registers a global click event and output 'click' to the console.
- Registers a global interval which logs 'setInterval' to the console.

## First time developing plugins?

Quick starting guide for new plugin devs:

- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)! There might be an existing plugin similar enough that you can partner up with.
- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/your-plugin-name` folder.
- Install NodeJS, then run `npm i` in the command line under your repo folder.
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding your plugin to the community plugin list

- Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## How to use

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint (optional)
- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code. 
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

## API Documentation

See https://github.com/obsidianmd/obsidian-api
