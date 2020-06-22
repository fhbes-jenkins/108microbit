input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let y = 0
let x = 0
radio.setGroup(1)
basic.forever(function () {
    x = Math.round(pins.map(
    KSB045.getJoystickValue(KSB045.valueType.X),
    0,
    1024,
    0,
    2
    ))
    y = Math.round(pins.map(
    KSB045.getJoystickValue(KSB045.valueType.Y),
    0,
    1024,
    0,
    2
    ))
    if (x == 0 && y == 0) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
    }
    if (x == 0 && y == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (x == 0 && y == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # # # . .
            `)
    }
    if (x == 1 && y == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (x == 1 && y == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (x == 1 && y == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (x == 2 && y == 0) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            # . . . .
            `)
    }
    if (x == 2 && y == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (x == 2 && y == 2) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . #
            . . . # #
            . . # # #
            `)
    }
})
