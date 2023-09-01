export default {
  async fetch(request) {
    const redirectMap = new Map([
      ['/youtube', 'https://www.youtube.com/@devsuccess101'],
      ['/subscribe', 'https://www.youtube.com/@devsuccess101?sub_confirmation=1'],
      ['/github', 'https://github.com/devsuccess101'],
      ['/viblo', 'https://viblo.asia/o/devsuccess101'],
      ['/facebook', 'https://www.facebook.com/devsuccess101'],
      ['/slack', 'https://devsuccess101.slack.com'],
      ['/tiktok', 'https://www.tiktok.com/@devsuccess101'],
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
