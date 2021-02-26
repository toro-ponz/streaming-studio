declare global {
  interface Window {
    app: App;
    echo: Echo;
  }
}

export interface App {
  minimize: () => Promise<void>;
  maximize: () => Promise<void>;
  restore: () => Promise<void>;
  close: () => Promise<void>;
  exit: () => Promise<void>;
}

export interface Echo {
  hello: () => Promise<void>;
  message: (string) => Promise<void>;
}
