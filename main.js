const electron = require('electron');
const { app, BrowserWindow } = electron;

require('electron-debug')({ showDevTools: true });

let mainWindow;
app.on('ready', () => {
    mainWindow = new BrowserWindow({ show: false });
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.once('ready-to-show', () => {
        mainWindow.maximize();
        mainWindow.show();
    });
});

exports.openWindow = (path, parentWindow = mainWindow) => {
    const win = new BrowserWindow({ parent: parentWindow, modal: true, show: false });
    win.loadURL(`file://${__dirname}/app/` + path);
    win.once('ready-to-show', () => {
        win.show();
    });
};
