import { App } from 'electron';

declare global {
  interface Window {
    app: App;
    echo: Echo;
  }
}

export interface App {
  quit: () => Promise<void>;
}

export interface Echo {
  hello: () => Promise<void>;
  message: (string) => Promise<void>;
}
