import type { Config } from '@/types';

const pwaConfig: Config = {
  version: '1.0',
  name: 'Anix7 Photos',
  shortName: 'Anix7 Photos',
  description: 'Anix7 Photos is your go-to destination for high-quality anime images and wallpapers. Discover a wide range of stunning, carefully curated photos from your favorite series, all available for free download. Enhance your collection and bring your favorite anime moments to life with Anix7 Photos.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Anime Girls Photos',
      shortName: 'Anime Girls Photos',
      description: 'Anime Girls Photos',
      url: '/search/label/Girl?utm_source=homescreen',
    },
    {
      name: 'Anime Girls Photos',
      shortName: 'Anime Girls Photos',
      description: 'Anime Girls Photos',
      url: '/search/label/Boy?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: 'fc603d92-e2e7-4f48-b981-a108cd507001',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://photos.anix7.site/',
};

export default pwaConfig;
