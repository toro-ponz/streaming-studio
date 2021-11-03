import { ICaptureSource } from '../domain/Capture';

declare global {
  interface Window {
    app: App;
    echo: Echo;
    capture: Capture;
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

export interface Capture {
  getSources: () => Promise<ICaptureSource[]>;
  stream: () => Promise<void>;
  onCaptureStream: (listener: (stream: MediaStream) => void) => Promise<void>;
}
