import { App } from 'electron';

declare global {
  interface Window {
    app: App;
    echo: Echo;
  }
}

export interface App {
  exit: () => Promise<void>;
}

export interface Echo {
  hello: () => Promise<void>;
  message: (string) => Promise<void>;
}
