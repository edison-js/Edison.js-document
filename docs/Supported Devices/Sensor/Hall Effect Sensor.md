
## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

## 2. Run the Hall effect sensor

```tsx title="index.tsx"
import { Board, Led, HallEffectSensor, render} from "edison"
import React, {useState} from "react"

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  const handlePress = () => {
    setIsOn(true)
  }

  const handleRelease = () => {
    setIsOn(false)
  }
  return (
    <Board>
      <HallEffective
        pin={8}
        onPress={handlePress}
        onRelease={handleRelease}
      >
        <Led
          pin={13}
          isOn={isOn}
        />
      </HallEffective>
    </Board>
  )
}
render(<App />)
```
This program will blink the LED when the hall effect sensor is run.

:::tip

if you use non-genuine Arduino, you need to set the port manually.
check [this](/docs/API/connectManual.md)

:::

## 3. execute the program
```bash
$ npx vite-node index.tsx 
```

You can use `<HallEffective >`

| Props | Type   | Description      | Default |
|-----------|--------|-----------------------|---------|
| `pin`      | `number`  | Pin number to control current     | `None` |
| `onPress?`      | `(() => void)`  | Pin number to control current     | `None` |
| `onRelease?`      | `(() => void)`  | Pin number to control current     | `None` |
| `debounceTime?`      | `number`  | Delay for a specified period of time    | `None` |
| `children`      | `React.ReactNode`  | Child components such as outbut     | `None` |


