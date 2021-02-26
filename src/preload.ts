import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('echo', {
  hello: async () => {
    await ipcRenderer.invoke('echo', 'Hello, world!');
  },
  message: async (message: string) => {
    await ipcRenderer.invoke('echo', message);
  },
});

contextBridge.exposeInMainWorld('app', {
  exit: async () => {
    await ipcRenderer.invoke('exit');
  },
});
