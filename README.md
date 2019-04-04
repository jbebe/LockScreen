# LockScreen

## Explanation

* Server connects your phone to your desktop pc so you can send a message to lock the screen.

## Installation

* place server.js and index.html on the designated server with public ip
* place client.js on the computer you want to lock
* npm install at both places
* `node ./server.js`
* `node ./client.js <public-ip>:80`
* Open `<public-ip>` on your smart phone which supports websocket
* Press the button

## Issues

* **lock-your-windows** is a very complicated package that needs rebuilding and node-gyp so I saved a little time for you and compiled both x86 and x64 binaries.
* In case you're still having problems with it, feel free to suffer the same way I did. 
* client cannot reconnect so you better keep the server alive :) 
