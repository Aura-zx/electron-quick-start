// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log('hello world!')
var ipc = require('electron').ipcRenderer;
const currentWindow = require('electron').remote.getCurrentWindow()
/*document.body.addEventListener('click', () => {
  console.log('hello vscode!')
  
})*/
document.getElementById('maxbt').addEventListener('click', () => {
  console.log('max!')
  // ipc.send('window-max');
  if (currentWindow.isMaximized()) {
    currentWindow.unmaximize();
  } else {
      currentWindow.maximize();
  }
})
document.getElementById('minbt').addEventListener('click', () => {
  console.log('max !')
  // ipc.send('window-min');
  ipc.send('window-max')
})
document.getElementById('closebt').addEventListener('click', () => {
  console.log('close!')
  ipc.send('window-close');
  
})
currentWindow.on('resize', (event, listener)=>{
  console.log(event)
  // console.log(currentWindow.getSize())
  console.log('resize trigger')
})
