/**
 * This is auto generated metadata file, generated at: Tue Jun 25 2024 16:18:30 GMT+0000 (Coordinated Universal Time)
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
  '{"github":{"repository":"CodesWithSubham/blogger-pwa","branch":"main"},"pwa":{"serviceWorker":"/app/serviceworker.js","oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"fc603d92-e2e7-4f48-b981-a108cd507001","allowLocalhostAsSecureOrigin":true},"logs":true},"build":{"hash":"0o4drsK34GJjXjAkvv0LR"}}',
) as Metadata;
