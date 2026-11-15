# HGhub 片源配置与播放测试

日期：2026-11-15（Asia/Singapore）。

用户选择：先配置官方开放短片源。

## 已配置

- 插件名称：开放短片 · Blender。
- 插件 ID：`local.open-films`，版本 `1.0.0`。
- 源码备份：`sources/open-films.js`；恢复导入列表：`sources/manifest.json`。
- HGhub 已安装、启用，索引记录 `enabled: true`、`usable: true`。
- 这是本机制作的适配插件，不是 Blender 或 Mux 发布的官方插件。不需要账号、Cookie 或密钥，不设置自动更新。
- 未修改 HGhub 主体源码或可执行文件。

## 视频来源

| 条目 | 格式 | 托管与许可 |
| --- | --- | --- |
| Sintel 官方预告片 | MP4，提供 480p / 720p 地址 | Blender 官方服务器；© Blender Foundation / durian.blender.org；CC BY 3.0 |
| Big Buck Bunny / 大雄兔 | HLS，480p | Mux 官方公开测试流；© 2008 Blender Foundation / www.bigbuckbunny.org；CC BY 3.0 |

来源依据：[Sintel 许可](https://durian.blender.org/sharing/)、[Big Buck Bunny 许可](https://peach.blender.org/about/)、[Mux 官方测试流](https://test-streams.mux.dev/)。

## 本机实测

在之前编译的 Windows 原生 HGhub 0.0.1 窗口中测试，使用真实远端视频，未以 HTTP 成功响应代替播放验证。

| 检查 | 结果与证据 |
| --- | --- |
| 导入与启用 | 界面显示“已安装并启用”，已安装数量为 1 |
| MP4 解码和播放 | Sintel 显示实际画面，进度从 00:06 推进至 00:28，总时长 00:52 |
| MP4 暂停 | 点击后显示播放三角按钮，进度停在约 00:28 |
| MP4 拖动 | 拖动进度条至 00:09，画面切至对应片头 |
| MP4 恢复 | 点击播放后进度由约 00:09 推进至 00:18 |
| HLS 解码和播放 | Big Buck Bunny 显示标题和动画画面，总时长 10:34 |
| HLS 拖动 | 从 00:06 拖到 01:20，成功显示新画面 |
| HLS 恢复 | 从 01:20 连续推进至 01:35、01:46，无错误提示 |
| 配置持久化 | 正常退出后重新启动 HGhub，片源仍存在，并自动显示 Sintel 播放画面 |
| 最终状态 | 已暂停，保持静音，用户可点击播放按钮继续 |

截图：`HGhub-MP4-test.png`、`HGhub-HLS-test.png`、`HGhub-restart-test.png`。

测试边界：测试了短时画面解码、时间推进及交互；未逐一切换 Sintel 的两档画质，未完整观看所有视频，保持静音且未实听核验扬声器音频。第三方服务器后续可用性不在本次验证范围。

## 恢复方式

打开 HGhub → 插件中心 → 导入与订阅，选择 `sources/open-films.js`；也可读取 `sources/manifest.json` 的完整本地路径后导入。

本备份仅含可移植的插件文件与恢复说明，不包含个人播放历史或应用数据目录。
