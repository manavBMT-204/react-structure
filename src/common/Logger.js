import { Config } from './Config';

export function debugLog() {
  if (!Config.debugMode) {
    return;
  }
  // eslint-disable-next-line no-console,prefer-rest-params
  console.log(...arguments);
}
