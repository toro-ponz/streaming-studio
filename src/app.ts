import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 1200,
    height: 850,
    frame: false,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
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

ipcMain.handle('exit', async () => {
  app.exit();
});
