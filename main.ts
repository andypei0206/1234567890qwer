let a = false
let ab = 0
let b = false
input.onButtonPressed(Button.A, function () {
    a = input.buttonIsPressed(Button.A)
    led.plot(3, 1)
    led.plot(4, 2)
    led.plot(3, 3)
    led.plot(3, 2)
    led.plot(2, 2)
    led.plot(1, 2)
    led.plot(0, 2)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    ab = ab
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 3)
    led.plot(4, 3)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    b = input.buttonIsPressed(Button.B)
    led.plot(1, 1)
    led.plot(1, 3)
    led.plot(0, 2)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(4, 2)
    basic.pause(500)
    basic.clearScreen()
})
