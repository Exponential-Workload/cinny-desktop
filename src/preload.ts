// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

// expose apis as window.electronAPI
contextBridge.exposeInMainWorld('electronAPI', {
  greet: (...args: any[]) => ipcRenderer.invoke('greet', ...args),
});
contextBridge.exposeInMainWorld('exit', () =>
  ipcRenderer.invoke('close-window'),
);
contextBridge.exposeInMainWorld('byebye', () =>
  ipcRenderer.invoke('close-app'),
);
