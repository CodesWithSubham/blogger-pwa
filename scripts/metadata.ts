/**
 * This is auto generated metadata file, generated at: Tue Jun 25 2024 14:00:11 GMT+0000 (Coordinated Universal Time)
 * Prevent making any changes here
 */

export interface Metadata {
  github: {
    repository: string;
    branch: string;
  };
  pwa: {
    logs: boolean;
    serviceWorker: string;
    oneSignalEnabled: boolean;
    oneSignalSDK: string;
    oneSignalConfig: {
      appId: string;
      allowLocalhostAsSecureOrigin: boolean;
    };
  };
  build: {
    hash: string;
  };
}

export const metadata = JSON.parse(
  '{"github":{"repository":"CodesWithSubham/blogger-pwa","branch":"main"},"pwa":{"serviceWorker":"/app/serviceworker.js","oneSignalEnabled":false,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"********-****-****-****-************","allowLocalhostAsSecureOrigin":true},"logs":true},"build":{"hash":"kwXK19FsZfCRFz30fjd2Y"}}',
) as Metadata;
