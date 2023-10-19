## Want to connect a non-genuine Arduino?
You can use non-genuine Arduino. But you need to set the port manually.
If you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

```ts title="index.ts"

import { SerialPort, board, attachLed } from 'edison'

board.connectManual('/dev/tty***') // *** is your port

board.on('ready', (port: SerialPort) => {
  const led = attachLed(port, 12)
  led.blink(500)
})
```

## if you use WSL or Mac
`ls /dev/tty*` and check your port.

## if you use Windows

`Tools` > `Port` > `Com**` and check your port.

```ts title="index.ts"
//example
board.connectManual('COM8') // *** is your port

board.on('ready', (port: SerialPort) => {
  const led = attachLed(port, 12)
  led.blink(500)
})
```