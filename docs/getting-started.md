# 快速上手

## 下载安装

前往 [GitHub Releases](https://github.com/0xxb/chatneo-releases/releases) 下载最新版本。

| 平台 | 安装包 |
|------|--------|
| macOS (Apple Silicon) | `.dmg` |
| macOS (Intel) | `.dmg` |
| Windows | `.exe` |
| Linux | `.deb` / `.AppImage` |

### macOS 用户须知

应用未签名，安装后需在终端执行：

```shell
xattr -cr /Applications/ChatNeo.app
```

## 首次使用

### 1. 配置提供商

打开 **设置 > 提供商**，选择你使用的 AI 服务商，填入 API Key。

<!-- TODO: 截图 - 提供商设置页面，展示 API Key 输入界面 -->

详见 [提供商配置](./providers)。

### 2. 开始对话

回到主界面，顶部选择模型，输入消息即可开始。

<!-- TODO: 截图 - 主界面，展示模型选择器和输入框 -->

### 3. 你可以做什么

- 发送文本消息，AI 流式回复
- 上传图片让 AI 分析（需模型支持视觉）
- 添加文件附件（PDF / Word / Excel 等）
- 使用 `@` 引用本地文件
- 开启工具让 AI 搜索网页、运行代码
- 同时向多个模型提问，对比回答

## 免费版 vs 专业版

ChatNeo 采用免费 + 专业版模式。

| 功能 | 免费版 | 专业版 |
|------|--------|--------|
| 基础对话 | :white_check_mark: | :white_check_mark: |
| 提供商数量 | 最多 3 个 | 无限制 |
| 自定义指令 | 最多 5 个 | 无限制 |
| 扩展思考 | :white_check_mark: | :white_check_mark: |
| 内置工具 | :white_check_mark: | :white_check_mark: |
| 插件 | :white_check_mark: | :white_check_mark: |
| 语音输入 | :x: | :white_check_mark: |
| 知识库 (RAG) | :x: | :white_check_mark: |
| MCP 服务 | :x: | :white_check_mark: |
| 图片/视频生成 | :x: | :white_check_mark: |
| 高级模型参数 | :x: | :white_check_mark: |
| 导出 PDF/Word | :x: | :white_check_mark: |
| 截图（无限制） | :x: | :white_check_mark: |
| 备份恢复 | :x: | :white_check_mark: |
| WebDAV 云同步 | :x: | :white_check_mark: |

## 常用设置

| 设置项 | 路径 | 说明 |
|--------|------|------|
| 语言 | 设置 > 通用 | 中文 / English |
| 代理 | 设置 > 通用 | HTTP / SOCKS 代理 |
| 主题 | 设置 > 外观 | 亮色 / 暗色 / 跟随系统 |
| 开机自启 | 设置 > 通用 | 系统启动时自动运行 |
| 系统托盘 | 设置 > 通用 | 关闭窗口时最小化到托盘 |
