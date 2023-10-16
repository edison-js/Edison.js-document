
![Servo img](/img/Servo.svg)

## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

### 2. Run the Servo

```ts title="index.ts"
import { SerialPort, attachServo, board } from "edison"

board.on('ready', async (port: SerialPort) => {
  const servo = attachServo(port, 8)
  await servo.rotate(50)
  await servo.rotate(150)
  await servo.rotate(50)
  await servo.rotate(150)
})
```

The Servo will rotate 50 degrees => 150 degrees => 50 degrees => 150 degrees. 



## 3. execute the program
```bash
$ ts-node index.ts 
```

`attachServo` is a receive two arguments, `port` and `pin`.

| Arguments | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `port`      | `SerialPort<AutoDetectTypes>`  | Port information for serial communication with the device     | `None`    |
| `pin`      | `number`  | Pin number to control current     | `None` |

and return servo object. It has one method now.

| method | Arguments   | Description      | 
|-----------|----------|------------------|
| `rotate` | `angle:number` |move the motor to a specified angle  |

:::danger Take care

`rotate` is a method that turns the motor to a specified angle regardless of the current angle.
If you want to reset the angle at the beginning, use XX.

:::