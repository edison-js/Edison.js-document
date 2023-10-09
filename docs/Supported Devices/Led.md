
![Led img](/img/Led.svg)

## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)


## 2. Run the LED

```ts title="index.ts"
import { SerialPort, board, attachLed } from 'edison'

board.on('ready', (port: SerialPort) => {
  const led = attachLed(port, 12)
  led.blink(500)
})
```


## 3. execute the program
```bash
$ ts-node index.ts 
```

The LED will blink every 500ms.
`attachLed` is a receive two arguments, `port` and `pin`.

| Arguments | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `port`      | `SerialPort<AutoDetectTypes>`  | Port information for serial communication with the device     | `None`    |
| `pin`      | `number`  | Pin number to control current     | `None` |

and return led object. It has three method

| method | Arguments   | Description      | 
|-----------|----------|------------------|
| `blink` | `arg1:number` |Blinking at intervals of the interval of the first argument |
| `on` | |Current flows to the pin number specified by the attachLED function. connect the LED to GND and the above pins, and the LED will be electrified. |
| `off` | |Shuts off current at specified pin number |
