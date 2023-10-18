
![RGB-Led img](/img/RGB-LED.svg)

## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)


## 2. Run the RGB-LED

```ts title="index.ts"
import { SerialPort, attachRgbLed, board, delay } from "edison"

board.on('ready', async (port: SerialPort) => {
  console.log('Board is ready!')
  //red, green, blue, vcc or gnd
  const rgbLed = attachRgbLed(port, 9, 10, 11)

  await rgbLed.setColor(255, 0, 0)
  await delay(1000)
  await rgbLed.setColor(0, 255, 0)
  await delay(1000)
  await rgbLed.setColor(0, 0, 255)
  await delay(1000)
  await rgbLed.off()
})

```
:::tip

The above code is for cathode common.
For anode common, use `attachOutput` to control it.

:::

```ts title="index.ts"
import { SerialPort, attachOutput, attachRgbLed, board, delay } from "edison"

board.connectManual('/dev/ttyUSB0')

board.on('ready', async (port: SerialPort) => {
  console.log('Board is ready!')
  //red, green, blue, vcc or gnd
  const rgbLed = attachRgbLed(port, 9, 10, 11)
  const output = attachOutput(port, 12)
  
  await output.on()
  await rgbLed.setColor(255, 0, 0)
  await delay(1000)
  await rgbLed.setColor(0, 255, 0)
  await delay(1000)
  await rgbLed.setColor(0, 0, 255)
  await delay(1000)
  await rgbLed.off()
  await output.off()
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
| `setColor` | `red:number` `green:number` `blue:number` |Controls colors by values from 0~255, respectively.Any combination of colors can be used to represent all colors. |

