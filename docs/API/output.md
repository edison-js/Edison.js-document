## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

## 2. Set output pin

You can use `attachOutput(port, pin)` function to set output pin.

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