let count = 0
input.onButtonPressed(Button.A, function () {
    count = 1
    while (count < 20) {
        basic.showNumber(count)
        count += 2
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() < 25) {
        basic.showString("Switch off Air conditioner")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(20211140)
})
