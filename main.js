const { app, BrowserWindow } = require('electron');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
function createWindow() {
  const splash = new BrowserWindow({ width: 836, height: 470, frame: false, resizable: false,
    alwaysOnTop: true, center: true, skipTaskbar: true });
  splash.loadFile('splash.html');
  const win = new BrowserWindow({ width: 1366, height: 820, backgroundColor: '#121418',
    autoHideMenuBar: true, title: 'EDITOX', show: false,
    webPreferences: { backgroundThrottling: false } });
  win.loadFile('index.html');
  const t0 = Date.now();
  win.once('ready-to-show', () => {
    setTimeout(() => { win.maximize(); win.show(); splash.close(); }, Math.max(0, 3000 - (Date.now() - t0)));
  });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
