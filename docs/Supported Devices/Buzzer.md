
![Buzzer img](/img/Buzzer.svg)

## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)


## 2. Run the Buzzer

```ts title="index.ts"
import { SerialPort, board, attachBuzzer } from 'edison'

board.on('ready', (port: SerialPort) => {
  const buzzer = attachBuzzer(port, 13)
  buzzer.on()
})
```


## 3. execute the program
```bash
$ ts-node index.ts 
```

`attachBuzzer` is a receive two arguments, `port` and `pin`.

| Arguments | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `port`      | `SerialPort<AutoDetectTypes>`  | Port information for serial communication with the device     | `None`    |
| `pin`      | `number`  | Pin number to control current     | `None` |

and return buzzer object. It has three method

| method | Arguments   | Description      | 
|-----------|----------|------------------|
| `on` | |Current flows to the pin number specified by the attachBuzzer function. connect the buzzer to GND and the above pins, and the Buzzer will be electrified. |
| `off` | |Shuts off current at specified pin number |
