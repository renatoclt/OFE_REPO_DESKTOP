const { app, BrowserWindow, session, globalShortcut } = require("electron");

var wwww  = require('./1002.OFE-API/configuracion/www');

app.on("ready", () => {
  let mainWindow = new BrowserWindow({       
    webPreferences: {
      nativeWindowOpen: true,
      plugins: true
    },
      show: false })

  mainWindow.loadURL(`file://${__dirname}/1002.OFE-PROD/PROD_ANGULAR/dist/index.html`);
  //comentar la siguiente linea para no mostar herramientas de desarrollo
  mainWindow.webContents.openDevTools();
    
  mainWindow.once("ready-to-show", () => { 
    mainWindow.maximize();
    mainWindow.show() 
  });

  mainWindow.setMenu(null);
    
  const filter = {
    urls: ["http://*/*", "https://*/*"]
  }

  session.defaultSession.webRequest.onBeforeSendHeaders(filter,(details, callback) => {
    console.log('--:',details.requestHeaders['Origin']);
    details.requestHeaders['Origin'] = 'http://localhost:4200';
    console.log('--:',details.requestHeaders);
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  globalShortcut.register('CommandOrControl+R', function() {
		console.log('CommandOrControl+R is pressed');
		mainWindow.loadURL(`file://${__dirname}/1002.OFE-PROD/PROD_ANGULAR/dist/index.html`);
  })
  
  mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    if (frameName === 'modal') {
      // open window as modal
      event.preventDefault()
      Object.assign(options, {
        modal: true,
        parent: mainWindow,
        width: 100,
        height: 100
      })
      console.log('**************************************');
      console.log(options);
      event.newGuest = new BrowserWindow({       
        webPreferences: {
          nativeWindowOpen: true,
          plugins: true
        },
          show: false })
    }
  })

});

app.on("window-all-closed", () => { app.quit() })