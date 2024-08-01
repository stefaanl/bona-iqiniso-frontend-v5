// src/app/services/browser.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  constructor() {
    // You can now use the global browser object
    if (typeof (window as any).browser !== 'undefined') {
      console.log('Browser polyfill is available');
    } else {
      console.error('Browser polyfill is not available');
    }
  }

  // Example method to get browser info
  getBrowserInfo() {
    return (window as any).browser.runtime.getBrowserInfo();
  }
}
