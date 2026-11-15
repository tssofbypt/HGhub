# HGhub Windows 与开放短片配置备份

备份日期：2026-11-15（Asia/Singapore）。这是个人部署备份，包含 Windows 播放器、开放短片适配插件和本机测试记录。

- 上游：[Minireel/HGhub](https://github.com/Minireel/HGhub)。
- 本机构建版本：0.0.1，源码提交 `2379957f7c9ae50f6d60a6da12e6124e91962634`。
- 主体源码未修改；便携包由上述源码构建，不是上游官方发布的安装包。
- 开放短片适配插件由本机配置，并非 Blender 或 Mux 发布的官方插件。

## 下载与恢复

1. 下载 [Windows 播放器与配置完整备份](https://github.com/tssofbypt/HGhub/raw/refs/heads/main/personal-backup/2026-11-15/HGhub-Windows-with-open-films.zip)，解压到普通文件夹。
2. 双击 `HGhub.exe`。需要 Windows x64 和 Microsoft Edge WebView2 Runtime。
3. 打开“插件中心 → 导入与订阅”，选择解压目录内 `sources/open-films.js`；也可以读取 `sources/manifest.json` 的完整本地路径后导入。
4. 启用“开放短片 · Blender”，即可访问 Sintel 官方预告片及 Big Buck Bunny / 大雄兔。

片源配置存在应用数据目录；只解压播放器不会自动导入插件。已有本次配置的电脑无需重复导入。

## 文件

| 文件 | 内容 |
| --- | --- |
| `HGhub-Windows-with-open-films.zip` | 播放器、许可证、插件、使用说明和测试记录截图 |
| `sources/` | 可直接阅读与恢复的插件代码、导入列表、来源署名 |
| `HGhub-片源与播放测试.md` | 实测步骤、观察结果及测试范围 |
| `HGhub-*-test.png` | 原生播放器的测试截图 |
| `SHA256SUMS.txt` | 备份文件的 SHA-256 校验值 |

## 验证与范围

Windows 11 x64 上完成了构建、启动、插件导入、MP4 与 HLS 的短时画面播放、暂停、拖动进度、恢复播放及退出重启后的配置保留验证。测试保持静音，未实听核验扬声器音频，也未完整播放所有影片或逐一验证两档 MP4 画质。

内容为两部公开短片条目，不是完整影视片库。视频仍由远端服务器提供，本备份不包含视频媒体文件，也不能保证第三方链接永久可用。

不包含账号、Cookie、密钥、个人播放历史、开发工具链或构建缓存。影片署名与许可见 [片源说明](sources/README.md)。HGhub 主体遵循仓库的 PolyForm Noncommercial 1.0.0 许可证；请保留便携包内的许可证文件。

`HGhub.exe` SHA-256：`d35b2de244118c696cc72920c1f2bf06c860937f2baa6f67714362944acc04f0`。
