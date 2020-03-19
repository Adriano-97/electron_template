const  {app, BrowserWindow} = require('electron')
const  path = require('path')
const url = require('url')

let window

function createWindow() {
    //Creates browser window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/icon.png'})

    //loads the window with index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes:true
    }));

    //Open devtools.
    win.webContents.openDevTools();

    win.on('closed', () =>{
        win = null;
    });
}

// Run Create window function
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
