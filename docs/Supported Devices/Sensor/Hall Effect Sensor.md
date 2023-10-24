
## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

## 2. Run the Hall effect sensor

```ts title="index.ts"
import { board, attachLed, attachHallEffectSensor, SerialPort } from "edison"

board.on('ready', (port: SerialPort) => {
  console.log('Board is ready!')
  const led1 = attachLed(port, 13)

  const hallEffectSensor = attachHallEffectSensor(port, 8)
  hallEffectSensor.read('on', () => {
    led1.on()
  })
  hallEffectSensor.read('off', () => {
    led1.off()
  })
})
```
This program will blink the LED when the hall effect sensor is run.

:::tip

if you use non-genuine Arduino, you need to set the port manually.
check [this](/docs/API/connectManual.md)

:::

## 3. execute the program
```bash
$ ts-node index.ts 
```

You can use `attachPressureSensor(port, pin)`

| Arguments | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `port`      | `SerialPort<AutoDetectTypes>`  | Port information for serial communication with the device     | `None`    |
| `pin`      | `number`  | Pin number to control current     | `None` |

and you can use `read` method.

| template literal       | Description  
|--------|-------|
| `on`   | if sensor was responded, execute the function of the argument |
| `off`  | if not sensor was responded, execute the function of the argument |
