import { SitemapStream, streamToPromise } from "sitemap";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.head.host}`,
      cacheTime: 600000,
    });

    const posts = [];
    posts.forEach(post => {
      smStream.write({
        url: `/post/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    smStream.end();

    const sitemapOutput = (await streamToPromise(smStream)).toString();

    res.writeHead(200, {
      'Content-Type': 'application/xml'
    })

    res.end(sitemapOutput);
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}
