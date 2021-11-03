import * as path from 'path';
import { app, BrowserWindow, desktopCapturer, dialog, ipcMain } from 'electron';
import { ICaptureSource } from './domain/Capture';

let win: BrowserWindow | null = null;

const createWindow = (): void => {
  win = new BrowserWindow({
    width: 1200,
    minWidth: 400,
    height: 850,
    minHeight: 400,
    frame: false,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, './preload.js'),
    },
  });

  win.loadFile('./index.html');
  win.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('echo', async (_event, message: string) => {
  dialog.showMessageBox({
    message: message,
  });
});

ipcMain.handle('minimize', async () => {
  win?.minimize();
});

ipcMain.handle('maximize', async () => {
  win?.maximize();
});

ipcMain.handle('restore', async () => {
  win?.restore();
});

ipcMain.handle('close', async () => {
  if (win?.webContents.isDevToolsOpened()) {
    win?.webContents.closeDevTools();
  }
  win?.close();
});

ipcMain.handle('exit', async () => {
  app.exit();
});

ipcMain.handle(
  'get-capture-sources',
  async (): Promise<ICaptureSource[]> => {
    const sources = await desktopCapturer.getSources({
      types: ['window', 'screen'],
    });

    return sources.map(source => {
      return {
        id: source.id,
        displayId: source.display_id,
        name: source.name,
      };
    });
  },
);

ipcMain.handle('stream', async () => {
  desktopCapturer
    .getSources({ types: ['window', 'screen'] })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then(async _sources => {
      // for (const source of sources) {
      // if (source.name === 'Electron') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mediaDevices = navigator.mediaDevices as any;
      const stream = mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            // chromeMediaSourceId: source.id,
          },
        },
      });

      console.log(stream);

      win?.webContents.send('capture-stream', stream);

      // return;
      // }
      // }
    });
});
