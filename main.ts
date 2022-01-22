basic.clearScreen()
basic.forever(function () {
    if (input.temperature() >= 30) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.clearScreen()
    }
    basic.pause(1000)
    basic.showString("" + (input.temperature()))
    basic.showString("C")
})
