import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

async function openWebApp() {
  if (Capacitor.isNativePlatform()) {
    await Browser.open({
      url: 'https://jsg-sparsh-pune.vercel.app',
      windowName: '_self', // Opens inside app tab
    });
  } else {
    // If running in normal browser (for testing)
    window.location.href = 'https://jsg-sparsh-pune.vercel.app';
  }
}

openWebApp();