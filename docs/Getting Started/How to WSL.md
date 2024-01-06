It is necessary to operate on Linux and Windows, respectively.

## Linux(Ubuntu)

```bash
sudo apt install linux-tools-generic hwdata
sudo update-alternatives --install /usr/local/bin/usbip usbip /usr/lib/linux-tools/*-generic/usbip 20
```

## Windows

```bash
winget install --interactive --exact dorssel.usbipd-win
```

And open your PowerShell as Administrator mode, and run the following command:

```powershell
usbipd list
```

and you will see the following output:

```powershell
BUSID  VID:PID    DEVICE                                                        STATE
2-4    ****:****  USB 入力デバイス                                              Not attached
2-8    ****:****  Arduino Uno (COM4)                                           Not attached
2-10   ****:****  HD Webcam                                                    Not attached
2-14   ****:****  インテル(R) ワイヤレス Bluetooth(R)                           Not attached
```

Attach **Arduino** device to WSL

```powershell
usbipd attach --wsl --busid 2-8
```

and run the following command:

```powershell
usbipd list
```

if Arduino device was attached to WSL, [Quick Start](/docs/Getting%20Started/Quick%20Start) will work!!
