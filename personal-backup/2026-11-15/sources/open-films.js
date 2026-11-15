// Local HGhub adapter. Films retain their original CC BY 3.0 attribution.
export const meta = {
  id: 'local.open-films',
  name: '开放短片 · Blender',
  version: '1.0.0',
  protocol: 1,
  description: 'Sintel 官方预告片与 Big Buck Bunny 开放动画。无需账号；包含 MP4 和 HLS。此适配插件由本机配置，并非 Blender 官方插件。',
  author: '本机配置',
  homepage: 'https://www.blender.org/about/projects/',
};

export default function (hg) {
  const films = [
    {
      id: 'sintel-trailer',
      title: 'Sintel · 官方预告片',
      year: 2010,
      type: 'short',
      tags: ['开放电影', '动画', '预告片'],
      badge: 'CC BY 3.0',
      entryEpisodeId: 'full',
      description: '© Blender Foundation | durian.blender.org。CC BY 3.0。许可说明：https://durian.blender.org/sharing/ 。视频由 Blender 官方服务器提供。',
    },
    {
      id: 'big-buck-bunny',
      title: 'Big Buck Bunny · 大雄兔',
      year: 2008,
      type: 'short',
      tags: ['开放电影', '动画', '短片'],
      badge: 'CC BY 3.0',
      entryEpisodeId: 'full',
      description: '© 2008 Blender Foundation | www.bigbuckbunny.org。CC BY 3.0。许可说明：https://peach.blender.org/about/ 。视频由 Mux 官方公开播放测试服务托管：https://test-streams.mux.dev/ 。',
    },
  ];
  const streams = {
    'sintel-trailer': [
      { url: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4', format: 'progressive', codec: 'h264', label: '480p · 官方', height: 480 },
      { url: 'https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4', format: 'progressive', codec: 'h264', label: '720p · 官方', height: 720 },
    ],
    'big-buck-bunny': [
      { url: 'https://test-streams.mux.dev/x36xhzz/url_6/193039199_mp4_h264_aac_hq_7.m3u8', format: 'hls', codec: 'h264', label: '480p · Mux 测试流', height: 480 },
    ],
  };
  const page = (items, cursor) => ({ items: cursor ? [] : items, next: null });
  const find = id => {
    const film = films.find(item => item.id === id);
    if (!film) throw new hg.PluginError('NOT_FOUND', '短片不存在');
    return film;
  };
  return {
    home: {
      getSections({ cursor } = {}) {
        return page([{ id: 'open-films', title: 'Blender 开放短片', layout: 'row', imageAspect: 'landscape', items: films }], cursor);
      },
    },
    catalog: {
      getCategories() { return [{ id: 'all', label: '开放短片' }]; },
      list({ categoryId, cursor }) { return page(categoryId === 'all' ? films : [], cursor); },
    },
    search: {
      search({ query = '', cursor }) {
        const term = String(query).trim().toLowerCase();
        return page(films.filter(film => (film.title + ' ' + film.tags.join(' ')).toLowerCase().includes(term)), cursor);
      },
    },
    media: {
      getDetail({ id }) {
        const film = find(id);
        return { ...film, playlists: [{ id: 'main', label: '官方开放视频', episodes: [{ id: 'full', index: 1, label: id === 'sintel-trailer' ? '官方预告片' : '完整短片' }] }] };
      },
      resolvePlayback({ mediaId, episodeId }) {
        find(mediaId);
        if (episodeId !== 'full') throw new hg.PluginError('NOT_FOUND', '分集不存在');
        return { streams: streams[mediaId] };
      },
    },
  };
}
