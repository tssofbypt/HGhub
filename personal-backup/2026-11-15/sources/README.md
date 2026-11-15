# 开放短片源

这是为本机 HGhub 配置的适配插件，并非 Blender 或 Mux 发布的官方插件。

| 条目 | 托管方 | 格式 | 授权 |
| --- | --- | --- | --- |
| Sintel 官方预告片 | Blender 官方服务器 | MP4，480p / 720p | CC BY 3.0 |
| Big Buck Bunny / 大雄兔 | Mux 官方公开测试服务 | HLS，480p | CC BY 3.0 |

电影版权与署名：

- Sintel：© Blender Foundation / durian.blender.org；[官方许可说明](https://durian.blender.org/sharing/)。
- Big Buck Bunny：© 2008 Blender Foundation / www.bigbuckbunny.org；[官方许可说明](https://peach.blender.org/about/)。
- HLS 托管：[Mux 测试流列表](https://test-streams.mux.dev/)。

恢复配置：HGhub → 插件中心 → 导入与订阅 → 选择 `open-films.js`，或读取本目录 `manifest.json` 的完整本地路径。

插件不读取账号、Cookie 或文件，不加载远程脚本，不设置自动更新。网络访问由播放器在播放视频时发起。片源可用性取决于官方服务器，不保证永久在线。
