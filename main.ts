input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 10 && input.lightLevel() < 20) {
        basic.showArrow(ArrowNames.North)
    } else if (input.lightLevel() == 10 || input.lightLevel() == 20) {
        basic.showArrow(ArrowNames.South)
    } else if (input.lightLevel() < 10) {
        basic.showArrow(ArrowNames.West)
    } else if (input.lightLevel() > 20) {
        basic.showArrow(ArrowNames.East)
    }
})
