// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import expose from './expose';
import renderer from './renderer';
expose();
window.addEventListener('DOMContentLoaded', renderer);