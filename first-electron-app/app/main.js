const { app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainwindow = null;

app.on('ready', () => {
    console.log('Hello from Electron!');
    mainwindow = new BrowserWindow({
        height: 900, 
        width: 800,
        maxWidth: 1024,
        maxHeight: 800,
        minWidth: 600, //default is 0
        minHeight: 768, //default is 0,
        movable: true, //defaults to true
        resizable: true, //defaults to true
        alwaysOnTop: false, //defaults to false, allows other apps to show over it
        backgroundColor: '#FFF'
        // show: true, 
        
    }); //show is default to true, set to false so page can render fully

    mainwindow.on('ready-to-show', () => { //show window when page is fully rendered
        mainwindow.show;
    });

    mainwindow.on('closed', () => {
        mainwindow = null;
    });
    
    mainwindow.webContents.loadURL(
        url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true ///
        })
    );
});

