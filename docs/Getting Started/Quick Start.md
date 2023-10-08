---
sidebar_position: 1
---
Get Edison with NPM:

```bash
npm install edison
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.


## Uploading Standard Firmata to Arduino

- Open Arduino IDE.
- `File` > `Examples` > `Firmata` > `StandardFirmata`
- `Tools` > `Board` > `your board`
- Click `Upload` button.
if you use WSL, you need to follow [this instruction](/docs/Getting%20Started/How%20to%20WSL)
## Try LED flashing



```ts
import { board } from '../utils/board'
import { attachLed } from '../factory/output/uniqueDevice/led'
import { SerialPort } from 'serialport'

board.on('ready', (port: SerialPort) => {
  console.log('Board is ready!')
  const led = attachLed(port, 12)
  led.blink(500)
})
```



## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
