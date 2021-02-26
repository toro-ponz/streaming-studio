import { contextBridge, ipcRenderer } from 'electron';

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
