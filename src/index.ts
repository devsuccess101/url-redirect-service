export default {
  async fetch(request: Request) {
    const redirectMap = new Map([
      ['/youtube', 'https://www.youtube.com/@devsuccess101'],
      ['/subscribe', 'https://www.youtube.com/@devsuccess101?sub_confirmation=1'],
      ['/github', 'https://github.com/devsuccess101'],
      ['/viblo', 'https://viblo.asia/o/devsuccess101'],
      ['/facebook', 'https://www.facebook.com/devsuccess101'],
      [
        '/slack',
        'https://join.slack.com/t/devsuccess101/shared_invite/zt-21n8p64z7-yO_bNpDiA6OYx2M1GB~9pQ',
      ],
      ['/tiktok', 'https://www.tiktok.com/@devsuccess101'],
      ['/web', 'https://devsuccess101.com'],
      ['/discord', 'https://discord.gg/jtHSCZwM'],
    ]);

    const requestURL = new URL(request.url);
    const path = requestURL.pathname;
    const location = redirectMap.get(path);

    if (location) {
      return Response.redirect(location, 301);
    }

    return new Response('Hi there!');
  },
};
