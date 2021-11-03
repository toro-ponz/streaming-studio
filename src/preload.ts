import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { ICaptureSource } from './domain/Capture';

contextBridge.exposeInMainWorld('app', {
  minimize: async () => {
    await ipcRenderer.invoke('minimize');
  },
  maximize: async () => {
    await ipcRenderer.invoke('maximize');
  },
  restore: async () => {
    await ipcRenderer.invoke('restore');
  },
  close: async () => {
    await ipcRenderer.invoke('close');
  },
  exit: async () => {
    await ipcRenderer.invoke('exit');
  },
});

contextBridge.exposeInMainWorld('echo', {
  hello: async () => {
    await ipcRenderer.invoke('echo', 'Hello, world!');
  },
  message: async (message: string) => {
    await ipcRenderer.invoke('echo', message);
  },
});

contextBridge.exposeInMainWorld('capture', {
  getSources: async (): Promise<ICaptureSource[]> => {
    return ipcRenderer.invoke('get-capture-sources');
  },
  stream: async () => {
    await ipcRenderer.invoke('stream');
  },
  onCaptureStream: (listener: (stream: MediaStream) => void) =>
    ipcRenderer.on(
      'capture-stream',
      (_event: IpcRendererEvent, stream: MediaStream) => listener(stream),
    ),
});
