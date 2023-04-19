# Obsidian Chem

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-chem%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

Obisidian Chem 为Obisidian 提供结构式绘制、渲染等功能，使您能够在笔记中添加化学式、结构式
项目语言&多语言问题，支持中英文提交issue（后期国际维护者多了再切换Guidance），建议双语，添加到Contributing、Welcoming/Issue工单中，原生自带汉化？

## 开发状态/Status

- 2022-12-26: 该插件正在构想阶段
- 2022-12-27: 行内渲染 powered by smiles-drawer
- 2022-12-31: 完成技术选型，暂时搁置
- 2023-02-21: 项目重启
- 2023-04-01: 搭建框架
- 2023-04-20：导包成功，暂时搁置，下一步是调试深浅主题

## 设计理念

- 数据存储可移植，能够方便地移植到非Obsidian场景，保留数据但不渲染
- 渲染方法按照 Obisidian & Markdown 原生语法优化

## Features

### 2D Sketcher

- [ ] [Ketcher](https://lifescience.opensource.epam.com/ketcher) Integration (Standalone version)
- [ ] 在笔记中渲染SMILES字符串/InCHI字符串为Chem Canvas, with 内置结构编辑窗口，参考[obsidian-admonition](https://github.com/valentine195/obsidian-admonition)
- [ ] OpenSmiles标准支持<http://opensmiles.org/>
- [ ] 提供选项，是否展示化合物信息(Analysis Window)
- [ ] 在笔记中插入化学结构链接，with 独立结构编辑窗口/Chemdraw联用器，以附件形式插入
- [ ] 在Canvas中插入化学对象
- [ ] ChemDraw Clipboard Support
- [ ] Import/Export \*.mol files, \*.gjf files etc.
- [ ] Export graphs/string/name etc.
- [ ] OCR, 调用已有ChemOCR 库，或使用联网的Ketcher
- [ ] 【长期】重写编辑器，提供类似ChemDraw的使用体验，需要处理翻译器、渲染器、交互、样式设计等复杂问题，预计用 Cpp+Qt 实现初版，打包后移植上nodejs
- [ ] 【Optional】InChI Integration
- [ ] Ketcher Canvas Support, saved and rendered as svg

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

单独编写一个光谱库，导入为js

- [ ] 化学常用谱图
- 谱图类型
  - IR
    - FFT/原始图
  - MS
  - NMR
  - UV-Vis
- 基本浏览功能

### ChemGraphs

- [ ] 仪器装置图
- [ ] 反应流程图

## Development

### 技术选型

- 框架：React
- 语言：Typescript
- Core：Smiles-drawer/RDKit.js, CDK, Ketcher & Indigo

### 兼容性

- InChI & SMILES support by Ketcher
- MOL files and other coordinate files
- RDKit
- Open Babel

### 项目任务

- [ ] 帮助文档
  - [ ] installation
  - [ ] usage & demo
  - [ ] roadmap
  - [ ] contribution
- [x] License: GPLv2 with openbabel depenency/MIT
- [ ] 发布版本，迁移仓库，并重新上传
- [ ] Github 工作流
- [ ] Roadmap in Github Project
- [ ] 移动端兼容
- [ ] i18n
- [ ] a11y

### 项目致谢

- obsidian-projects
- obsidian-admonition
- smiles-drawer
-
