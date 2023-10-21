// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
}

module.exports = {
  nextConfig,
  images: {
    domains: ['m.media-amazon.com', 'upload.wikimedia.org', 'www.mobygames.com', 'www.mangagamer.com', 'cdn02.nintendo-europe.com', 'e.snmc.io', 'static.wikia.nocookie.net'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
}