
![PressureSensor img](/img/PressureSensor.svg)

### 1. Run the Pressure sensor

```ts
import { SerialPort, attachLed, attachSensor, board } from "edison"

board.on('ready', (port: SerialPort) => {
  console.log('Board is ready!')
  const led1 = attachLed(port, 12)
  const sensor1 = attachSensor(port, 'A0')

  sensor1.read('on', function () {
    led1.blink(500)
  })
})
```
This program will blink the LED when the pressure sensor is pressed.

`AnalogPin` is a original type. check [Types](/docs/Types/Types.md) .

| Arguments | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `port`      | `SerialPort<AutoDetectTypes>`  | Port information for serial communication with the device     | `None`    |
| `pin`      | `AnalogPin`  | Pin number to control current     | `None` |

and you can use `read` method.

| template literal       | Description  
|--------|-------|
| `on`   | if sensor was pressed, execute the function of the argument |
| `off`  | if not sensor was pressed, execute the function of the argument |
| `change` | if sensor state was changed, execute the function of the argument |
