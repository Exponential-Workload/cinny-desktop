import { contextBridge, ipcRenderer } from 'electron';
export const electronAPI = {
  greet: (...args: any[]) => ipcRenderer.invoke('greet', ...args),
}
export type Cfg = {
  apps: {
    userid: string;
    pfp: string;
    id: number | null;
  }[];
  latestApp: number;
}
export const exit = () => ipcRenderer.invoke('close-window')
export const byebye = () => ipcRenderer.invoke('close-app')
export const delApp = (): Promise<Cfg> => ipcRenderer.invoke('del-app', document.location.href)
export const cfg = (): Promise<Cfg> => ipcRenderer.invoke('get-cfg')
export const updApp = (userid: string, pfp: string): Promise<Cfg> => ipcRenderer.invoke('update-app', document.location.href, pfp, userid);
export default () => {
  // expose apis as window.electronAPI
  contextBridge.exposeInMainWorld('electronAPI', electronAPI);
  contextBridge.exposeInMainWorld('exit', exit);
  contextBridge.exposeInMainWorld('byebye', byebye);
  contextBridge.exposeInMainWorld('cfg', cfg);
  contextBridge.exposeInMainWorld('updApp', updApp);
  contextBridge.exposeInMainWorld('delApp',
    delApp,
  );
}