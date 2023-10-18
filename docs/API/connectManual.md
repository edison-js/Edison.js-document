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

:::tip
Unplug the device and examine it. The path displayed only when the device is plugged in is the port required to connect to the device
:::
| Arguments | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `port`      | `SerialPort<AutoDetectTypes>`  | Port information for serial communication with the device     | `None`    |
| `pin`      | number  | Pin number to control current     | `None` |

and you can use `read` method.

| template literal       | Description  
|--------|-------|
| `on`   | output pin will be on|
| `off`  | output pin will be off |

:::tip

`attachOutput` is a function that sets the output pin. So, you can control many device Led, Buzzer, etc.

:::