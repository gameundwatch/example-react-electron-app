
const { BrowserWindow, app } = require('electron');
const path = require('path')


function createWindow() {
  const win= new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#ffffff",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  //win.setMenuBarVisibility(false)
  win.loadFile('index.html');
}

if(!app.isPackaged){
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady().then(createWindow)